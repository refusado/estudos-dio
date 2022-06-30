// throw atua como return em uma função, mas ao invés de retornar um valor, ele irá retornar um erro

function retornaString(str) {
  if (!str) return "String inválida";

  return str;
}

console.log(retornaString(''));



function retornaError(str) {
  if (!str) throw "String inválida";

  return str;
}

console.log(retornaError(''));