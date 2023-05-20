local MONSTER_NAME <const> = "Catastroff"

local maxMonsterHealth = 35
local monsterHealth = maxMonsterHealth

local function hitMonster(weapon)
  local hitPower
  if weapon == "soco" then
    hitPower = 3
  elseif weapon == "faca" then
    hitPower = 5
  elseif weapon == "arma" then
    hitPower = 8
  else
    hitPower = 0
    print("ERROR: Arma (\"" .. weapon .. "\") não especificada")
  end

  monsterHealth = monsterHealth - hitPower

  if monsterHealth > maxMonsterHealth then
    monsterHealth = maxMonsterHealth
  elseif monsterHealth < 0 then
    monsterHealth = 0
  end
end

local function getMonsterHealthStatus(health)
  local status
  
  if health <= 0 then
    status = "vida vazia"
  elseif health < 7 then
    status = "vida precária"
  elseif health > maxMonsterHealth - 3 then
    status = "vida cheia"
  else
    status = "vida normal"
  end

  return status
end

local function checkIfMonsterNeedHelp()
  local isHealthFull = monsterHealth == maxMonsterHealth
  local isHealthOk = maxMonsterHealth > maxMonsterHealth - 3
  local isHealthCritical = monsterHealth <= 7

  if isHealthCritical then
    return true
  else
    return false
  end
end

hitMonster("faca")
hitMonster("arma")
hitMonster("arma")
hitMonster("arma")



local monsterHealthStatus = getMonsterHealthStatus(monsterHealth)

print(MONSTER_NAME .. " está com a " .. monsterHealthStatus .. " (" .. monsterHealth .. "/" .. maxMonsterHealth .. ")")

local monsterNeedHelp = checkIfMonsterNeedHelp()