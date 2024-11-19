# Division

# Helper function
parse_to_int = fn str ->
  case Integer.parse(str) do
    {number, _rest} -> {:ok, number}
    :error -> {:error, str}
  end
end

System.argv()
|> case do
  [arg1, arg2] ->
    with {:ok, number1} <- parse_to_int.(arg1),
         {:ok, number2} <- parse_to_int.(arg2) do
      case {number1, number2} do
        {_n1, 0} ->
          IO.puts("Cannot divide by 0")

        {n1, n2} when n1 < n2 ->
          IO.puts("Second argument must be lower than the first")

        {n1, n2} ->
          IO.puts("résultat: #{floor(n1 / n2)}")
          IO.puts("reste: #{rem(n1, n2)}")
      end
    else
      {:error, invalid} -> IO.puts("Expected a valid number got=#{invalid}")
    end

  _args ->
    IO.puts("Usage: elixir terre05.exs <number1> <number2>")
end
