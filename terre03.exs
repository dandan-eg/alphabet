System.argv()
|> case do
  [] ->
    IO.puts("Usage: elixir terre03.exs <letter>")
    System.stop(1)

  [arg | _rest] when byte_size(arg) > 1 ->
    IO.puts(bit_size(arg))
    IO.puts("Expected a lowercase letter got=#{arg}")
    System.stop(1)

  [arg | _rest] ->
    [char] = String.to_charlist(arg)

    if char not in ?a..?z do
      IO.puts("Expected a lowercase letter got=#{arg}")
      System.stop(1)
    else
      char..?z
      |> Enum.to_list()
      |> IO.puts()
    end
end
