# 24 to 12
defmodule Exercice do
  def convert(time_str) do
    case parse_str_to_time(time_str) do
      {12, minutes} ->
        format_time(12, minutes, "PM")

      {hours, minutes} when hours > 12 ->
        format_time(hours - 12, minutes, "PM")

      {hours, minutes} ->
        format_time(hours, minutes, "AM")

      {:error, message} ->
        IO.puts(:stderr, message)
        System.halt(1)
    end
  end

  defp parse_str_to_time(time_str) do
    try do
      [hours, minutes] =
        time_str
        |> String.split(":")
        |> Enum.map(&String.to_integer/1)

      case {hours, minutes} do
        {h, m} when h in 0..23 and m in 0..59 ->
          {:ok, {h, m}}

        _ ->
          {:error, "Time values out of range"}
      end
    rescue
      _ -> {:error, "invalid format must be: hh:mm"}
    end
  end

  defp format_time(hours, minutes, period) do
    if hours > 10 do
      if minutes > 10 do
        "#{hours}:#{minutes}#{period}"
      else
        "#{hours}:0#{minutes}#{period}"
      end
    else
      if minutes > 10 do
        "0#{hours}:#{minutes}#{period}"
      else
        "0#{hours}:0#{minutes}#{period}"
      end
    end
  end
end

case System.argv() do
  [time_str] ->
    Exercice.convert(time_str) |> IO.puts()

  _ ->
    IO.puts(:stderr, "Usage: elixir terre10.exs <date>")
    System.halt(1)
end
