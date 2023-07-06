local utils = {}

utils.enableUtf8 = function ()
  os.execute("chcp 65001")
end

utils.printHeader = function ()
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
end

---
---Imprime as informações de uma criatura
---@param creature table
---
utils.printCreature = function(creature)
  local healthRate = math.floor(creature.health / (creature.maxHealth / 100))

  print("===================================")
  print("/")
  print("/ " .. creature.name)
  print("/ " .. creature.description)
  print("/")
  print("/ Atributos:")
  print("/    Vida:         " .. healthRate .. "%")
  print("/    Vida Máxima:  " .. creature.maxHealth)
  print("/    Ataque:       " .. creature.attack)
  print("/    Defesa:       " .. creature.defense)
  print("/    Velocidade:   " .. creature.speed)
  print("/")
  print("===================================")
end

return utils