System.argv()
|> case do
  [] ->
    IO.puts("Usage: elixir terre08.exs")
    System.stop(1)

  [arg | _rest] ->
    case Integer.parse(arg) do
      :error ->
        IO.puts("Expected a valid number got=#{arg}")
        System.stop(1)

      {number, _rest} when number < 1 ->
        IO.puts("Expected a positive number")
        System.stop(1)

      {number, _rest} ->
        1..number
        |> Enum.find(fn divisor ->
          divisor * divisor > number
        end)
        |> then(fn divisor -> divisor - 1 end)
        |> IO.puts()
    end
end
