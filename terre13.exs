defmodule Exercice do
  # Sort
  def sorted?([]), do: true
  def sorted?([_last]), do: true

  def sorted?([current | tail]) do
    next = hd(tail)

    if current > next do
      false
    else
      sorted?(tail)
    end
  end

  # Helper :
  @spec validate_args(list(String.t())) ::
          {:ok, list(number())} | {:error, :not_enough_args | {:invalid_arg, String.t()}}
  def validate_args(args)

  def validate_args([_, _ | _rest] = args) do
    parse_args_to_int(args, [])
  end

  def validate_args(_args) do
    {:error, :not_enough_args}
  end

  defp parse_args_to_int([], acc), do: {:ok, Enum.reverse(acc)}

  defp parse_args_to_int([arg | tail], acc) do
    case Integer.parse(arg) do
      {num, _rest} ->
        parse_args_to_int(tail, [num | acc])

      :error ->
        {:error, {:invalid_arg, arg}}
    end
  end
end

System.argv()
|> Exercice.validate_args()
|> case do
  {:ok, numbers} ->
    if Exercice.sorted?(numbers) do
      IO.puts("trié")
    else
      IO.puts("pas trié")
    end

  {:error, :not_enough_args} ->
    IO.puts("Usage: elixir terre13.exs number number [...]")

  {:error, {:invalid_arg, arg}} ->
    IO.puts("\"#{arg}\" is not a valid number")
end
