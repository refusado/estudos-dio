--[[

  Nome da criatura
  Descrição
  Som emitido
  Atributos
    Ataque
    Defesa
    Vitalidade
    Velocidade
    Inteligência

===============================================================
/
/ CREEPER
/ ...
/
/ Som emitido: ...
/
/ Atributos:
/   Ataque: xxx
/   Defesa: yyy
/   ...
/
===============================================================

]]


-- Habilitar utf-8 no terminal
os.execute("chcp 65001")

-- criatura
local name = "CREEPER"
local description = "Um monstro que se explode e destrói as coisas ao redor."
local emoji = "🧨"
local sound = "bomba explodindo"
local drop = "Pólvora"

-- atributos
local attack = 10
local defense = 1
local linedefined = 5
local speed = 7
local inteligence = 2

local function getProgressBar(value)
  local empty = 10 - value
  local fill = value

  if value < 10 then
    value = "0" .. value
  end
  local barr = "(" .. value .. "/10) "

  for i = 1, fill, 1 do
    barr = barr .. "◆ "
  end

  for i = 1, empty, 1 do
    barr = barr .. "◇ "
  end

  return barr
end

local function getLine(char, size)
  char = char or "="
  size = size or 62

  local line = ""

  for i = 0, size, 1 do
    line = line .. char
  end

  return line
end

print(getLine("#", 18))
print("/")
print("/ " .. name .. " " .. emoji)
print("/ " .. description)
print("/")
print("/ Som emitido: " .. sound)
print("/ Drop: " .. drop)
print("/")
print("/ Atributos:")
print("/    Ataque:      " .. getProgressBar(attack))
print("/    Defesa:      " .. getProgressBar(defense))
print("/    linedefined: " .. getProgressBar(linedefined))
print("/    speed:       " .. getProgressBar(speed))
print("/    inteligence: " .. getProgressBar(inteligence))
print("/")
print(getLine("#", 18))