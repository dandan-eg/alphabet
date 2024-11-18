# Taille d'une chaine

System.argv()
|> case do
  [] ->
    IO.puts("Usage: elixir terre07.exs \"<sentence>\"")
    System.stop(1)

  [arg | _rest] ->
    arg
    |> String.to_charlist()
    |> Enum.reduce(0, fn _char, count ->
      count + 1
    end)
    |> IO.puts()
end
