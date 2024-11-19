# Taille d'une chaine

System.argv()
|> case do
  [arg] ->
    arg
    |> String.to_charlist()
    |> Enum.reduce(0, fn _char, count ->
      count + 1
    end)
    |> IO.puts()

  _ ->
    IO.puts("Usage: elixir terre07.exs \"<sentence>\"")
    System.stop(1)
end
