-- Dependecies
local utils = require("utils");
local player = require("definitions.player")
local colossus = require("definitions.colossus")

-- habilitar uf8 no terminal
utils.enableUtf8()

-- Header
utils.printHeader()

-- Obter definição do jogador
print(string.format("A vida do jogador está em %d/%d", player.health, player.maxHealth))

-- Obter definição do monstro
local boss = colossus
boss.health = boss.health - 5
print(string.format("A vida do chefão está em %d/%d", boss.health, boss.maxHealth))

-- Apresentar monstro
utils.printCreature(boss)

-- Começar o loop de batalha