System.argv()
|> case do
  [] ->
    IO.puts("Usage: elixir  terre04.js <number>")
    System.stop(1)
  [arg | _rest] ->
    case Integer.parse(arg) do
      {number, _rest} ->
        if rem(number, 2) == 0 do
          IO.puts("pair")
        else
          IO.puts("impair")
          System.exit(1)
        end

      :error -> 
        IO.puts("Expected a valid number got=#{arg}")
        System.stop(1)
    end
end
