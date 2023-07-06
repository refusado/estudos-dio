-- habilitar uf8 no terminal
os.execute("chcp 65001")

-- Dependecies
local player = require("definitions.player")
local colossus = require("definitions.colossus")

-- Header
print([[
=================================================================================

               /---|
               |   |
     /---------|   |-----------------------------------------------------,
     |             |_______________________________________________________\
     |             |////////////////////////////////////////////////////////
     \=========|   |-----------------------------------------------------'
               |   |
               |___/
 
                --------------------------------------------------
 
                         >|  SIMULADOR DE BATALHAS   |<

=================================================================================

                  Empunhe a sua espada e se prepare para lutar.
                               É hora da batalha!

]])


-- Obter definição do jogador
print(string.format("A vida do jogador está em %d/%d", player.health, player.maxHealth))

-- Obter definição do monstro
local boss = colossus
print(string.format("A vida do chefão está em %d/%d", boss.health, boss.maxHealth))

-- Apresentar monstro

-- Começar o loop de batalha