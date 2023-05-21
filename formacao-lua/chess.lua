local table <const> = {}
local letters <const> = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'}

for i = 1, 8, 1 do
  table[i] = {}
  for j = 1, 8, 1 do
    table[i][j] = letters[j]
  end
end

local chessView = ""
for x = #table, 1, -1 do
  local squares = table[x]

  for j = 1, #squares, 1 do
    local y = squares[j]

    chessView = chessView .. y .. x
  end
  chessView = chessView .. "\n"
end

print(chessView)

--[[

a8 b8 c8 d8 e8 f8 g8 h8
a7 b7 c7 d7 e7 f7 g7 h7
a6 b6 c6 d6 e6 f6 g6 h6
a5 b5 c5 d5 e5 f5 g5 h5
a4 b4 c4 d4 e4 f4 g4 h4
a3 b3 c3 d3 e3 f3 g3 h3
a2 b2 c2 d2 e2 f2 g2 h2
a1 b1 c1 d1 e1 f1 g1 h1

]]
