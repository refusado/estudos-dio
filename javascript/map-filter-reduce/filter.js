// ATIVIDADE 
// retorne todos os números pares de uma array

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function retornaPares(arr) {
  return arr.filter(function(n) {
    return n % 2 === 0;
  });
};

console.log(retornaPares(meuArray));