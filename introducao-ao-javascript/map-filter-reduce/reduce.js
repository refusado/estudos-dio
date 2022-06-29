// ATIVIDADE
// some todos os números de um array

function somaValores(arr) {
  return arr.reduce(function(acumulador, atual) {
    // console.log({ acumulador });
    // console.log({ atual });
    return acumulador + atual;
  });
};

const meuArray = [1, 2, 3, 4, 5];

// console.log(somaValores(meuArray)); 


// crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

function novoSaldo(arr, saldo) {
  return arr.reduce(function(acc, cur) {
    return acc - cur;
  }, saldo);
};

const array = [15, 20, 5, 30];
const saldo = 250;

// console.log(novoSaldo(array, saldo));

// usando this

const produtos = [
  {
    nome: 'Leite',
    preco: 20,
  },
  {
    nome: 'Chinelo',
    preco: 60,
  },
  {
    nome: 'Bermuda',
    preco: 120,
  }
]

function subtraiSaldo(saldo, produtos) {
  return produtos.reduce(function(acc, cur) {
    return acc - cur.preco;
  }, saldo);
};

console.log(subtraiSaldo(saldo, produtos));