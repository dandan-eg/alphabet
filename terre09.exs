# Nombre Premier

arg =
  System.argv()
  |> case do
    [arg] ->
      arg

    _ ->
      IO.puts("Usage: elixir terre09.exs <number>")
      System.stop(1)
  end

case Integer.parse(arg) do
  :error ->
    IO.puts("Expected a valid number got=#{arg}")
    System.stop(1)

  {number, _rest} when number < 2 ->
    IO.puts("Non, #{number} n'est pas un nombre premier.")

  {number, _rest} ->
    divisible_by =
      2..round(number / 2)
      |> Enum.find(fn i ->
        rem(number, i) == 0
      end)

    if divisible_by == nil do
      IO.puts("Oui, #{number} est un nombre premier.")
    else
      division_result = round(number / divisible_by)

      IO.puts(
        "Non, #{number} n'est pas un nombre premier. #{number}/#{divisible_by}=#{division_result}"
      )
    end
end
