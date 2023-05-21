local person = {
  name = "João",
  age = 30,
  isAdult = true
}

for key, value in pairs(person) do
  print(key, value)
end

print('-------------------------')

print(person.name)
print(person['age'])
print(person.isAdult)

print('-------------------------')

person.isAdult = nil
person.age = nil

for key, value in pairs(person) do
  print(key, value)
end

-- local test = pairs(person)
-- print(test({0, 1}))

print('-------------------------')

local util <const> = {}
util.log = print
util.con = string.format

util.log('Objeto personalizado')
util.log(util.con('O nome da pessoa é %s!', person.name))

util.log(type(util))