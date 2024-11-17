# Inverser une chaine
System.argv()
|> case do
  [] ->
    IO.puts("Usage: elixir terre06.exs \"<sentence>\"")

  [arg | _rest] ->
    arg
    |> String.to_charlist()
    |> Enum.reduce([], fn char, acc ->
      [char | acc]
    end)
    |> IO.puts()
end
