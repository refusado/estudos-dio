const meuArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9];

function valoresUnicos(arr) {
  let set = new Set(arr);

  return [...set];
}

console.log(valoresUnicos(meuArray));