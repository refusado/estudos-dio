const pessoas = [
  {
    nome: "Maria",
    idade: 52,
  },
  {
    nome: "Carlos",
    idade: 25,
  },
  {
    nome: "Jonata",
    idade: 13,
  },
  {
    nome: "Stephany",
    idade: 25,
  },
  {
    nome: "Carla",
    idade: 32,
  },
]


function destructuring(arr) {
  let nomes = [];

  for (let i = 0; i < arr.length; i++) {
    const {nome, idade} = arr[i];
    
    nomes.push(nome)
  }

  return nomes;
}

console.log(destructuring(pessoas));