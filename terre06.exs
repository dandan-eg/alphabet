# Inverser une chaine
System.argv()
|> case do
  [arg] ->
    arg
    |> String.to_charlist()
    |> Enum.reduce([], fn char, acc ->
      [char | acc]
    end)
    |> IO.puts()

  _args ->
    IO.puts("Usage: elixir terre06.exs \"<sentence>\"")
end
