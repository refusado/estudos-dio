local MONSTER_NAME <const> = "Crepeer"

local maxHealth = 10
local health = maxHealth
-- local isHealthFull = health == maxHealth
-- local healthPercentage = health / maxHealth
-- local isHealthCritical = healthPercentage <= 0.25

-- local isCreeper = MONSTER_NAME == "Crepeer"
-- local shouldIRun = isCreeper or not isHealthFull
-- print(shouldIRun)

local hitPower = 1

-- while health > 0 do
--   health = health - hitPower

--   local isHealthFull = health == maxHealth
--   local healthPercentage = health / maxHealth
--   local isHealthCritical = healthPercentage <= 0.25

--   print(healthPercentage, isHealthCritical)
-- end

repeat
  health = health - hitPower

  local isHealthFull = health == maxHealth
  local healthPercentage = health / maxHealth
  local isHealthCritical = healthPercentage <= 0.25

  print(healthPercentage, isHealthCritical)
until health <= 0

-- for i = 0, -10, -2 do
--   print(i)
-- end