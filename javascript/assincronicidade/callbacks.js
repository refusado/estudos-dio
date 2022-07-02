//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

const alunos = [
  {
    nome: "Ronaldo",
    nota: 45,
  },
  {
    nome: "Amanda",
    nota: 58,
  },
  {
    nome: "Gabriel",
    nota: 68,
  },
  {
    nome: "Carla",
    nota: 80,
  },
  {
    nome: "Marcela",
    nota: 84,
  }
];

const nomes = [];

alunos.map(function callback(cada) {
  nomes.push(cada.nome);
});

console.log(nomes);