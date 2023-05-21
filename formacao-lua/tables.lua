os.execute('chcp 65001')

local fruits <const> = {'maçã', 'banana', 'pêra', 'abacaxi'}

print('----------------')
for i = 1, #fruits, 1 do
  print(fruits[i])
end
print('----------------')

local numbers <const> = {5, 10, 15, 20, 25, 30, 35}
for key, value in pairs(fruits) do
  print(key, value)
end