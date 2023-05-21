local function manyValues(a, b, c)
  c = c or 15
  return a + 5, b + 5, c + 5
end

local a, b, c = manyValues(5, 10)

print(string.format("Valores: %d, %d, %d", a, b, c))

local echo = print
echo("Print sem print()")

print = function(string)
  return string
end

print('Print que não funciona')

echo(print('Echo com retorno do print'))