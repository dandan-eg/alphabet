System.argv()
|> case do
  [arg] when byte_size(arg) > 1 ->
    IO.puts("Expected a lowercase letter got=#{arg}")
    System.stop(1)

  [arg] ->
    [char] = String.to_charlist(arg)

    if char not in ?a..?z do
      IO.puts("Expected a lowercase letter got=#{arg}")
      System.stop(1)
    else
      char..?z
      |> Enum.to_list()
      |> IO.puts()
    end

  _args ->
    IO.puts("Usage: elixir terre03.exs <letter>")
    System.stop(1)
end
