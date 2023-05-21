os.execute('chcp 65001')
print('----------')

local allCreatures <const> = {
  {
    id = 1,
    name = "Creeper",
    color = "Verde"
  },
  {
    id = 2,
    name = "Esqueleto",
    color = "Branca"
  },
  {
    id = 3,
    name = "Porco",
    color = "Rosa"
  },
}

print("Escolha o ID de uma criatura. ")
local chosenId = io.read("n");
local creature = allCreatures[chosenId]

if creature then
  print(string.format(
    "Você escolheu o %s (com id %d) e esta criatura tem a cor %s!",
    string.lower(creature.name),
    creature.id,
    string.lower(creature.color))
  )
else
  print(string.format("Criatura com o id %d não encontrada.", chosenId))
end