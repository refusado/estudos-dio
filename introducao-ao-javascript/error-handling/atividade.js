// o objetivo é que a função receba uma array e retorne ele caso seu tamanho corresponda ao número enviado como parâmetro, caso contrário um erro será lançado.

function verificaTamanho(arr, num) {
  try {
    if (!arr || !num) 
      throw new ReferenceError("Envie todos os parâmetros");
    
    if (typeof(arr) !== "object") 
      throw new TypeError("Envie um objeto no primeiro atributo");
    
    if (typeof(num) !== "number") 
      throw new TypeError("Envie um número no segundo atributo");
    
    if (arr.length !== num)
      throw new RangeError("Tamanho inválido");
    
    return console.log(arr);
  }
  catch(e) {
    if (e instanceof ReferenceError) {
      console.log("Ocorreu um erro \"ReferenceError\"");
      console.log(e.message);
    } else 
    if (e instanceof TypeError) {
      console.log("Ocorreu um erro \"TypeError\"");
      console.log(e.message);
    } else 
    if (e instanceof RangeError) {
      console.log("Ocorreu um erro \"RangeError\"");
      console.log(e.message);
    } else {
      console.log("Ocorreu um erro desconhecido: " + e);
    }
  }
}


var meuArray = [1, 2, 3, 4, 5, 6];

verificaTamanho(meuArray, 6, 2);