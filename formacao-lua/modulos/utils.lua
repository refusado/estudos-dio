local utils = {}

---Habilita o UTF-8 no terminal
utils.enableUtf8 = function()
  os.execute('chcp 65001')
end

---Cria uma bara de progresso com limite 10 a partir de uma valor
---@param value number|string|nil
---@return string 
utils.generateProgressBar = function(value)
  if type(value) ~= "number" then
    value = tonumber(value)
  end

  value = value or 0
  local empty = 10 - value
  local fill = value

  if value < 10 then
    value = "0" .. value
  end
  local bar = "(" .. value .. "/10) "

  for _ = 1, fill, 1 do
    bar = bar .. "◆ "
  end
  for _ = 1, empty, 1 do
    bar = bar .. "◇ "
  end

  return bar
end

return utils