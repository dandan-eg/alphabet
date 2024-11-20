defmodule Exercice do
  def validate_args([arg1, arg2, arg3]) do
    with {:ok, num1} <- parse_arg(arg1),
         {:ok, num2} <- parse_arg(arg2),
         {:ok, num3} <- parse_arg(arg3) do
      {num1, num2, num3}
    end
  end

  defp parse_arg(arg) do
    case Integer.parse(arg) do
      {num, _rest} -> {:ok, num}
      :error -> {:error, {:invalid_arg, arg}}
    end
  end
end

System.argv()
|> Exercice.validate_args()
|> case do
  {num1, num2, num3} ->
    begin_max = max(num1, num2)
    end_max = max(num2, num3)
    center = min(begin_max, end_max)

    IO.puts(center)

  {:error, {:invalid_arg, arg}} ->
    IO.puts("\"#{arg}\"")
end
