// try irá verificar uma função e se ocorrer um erro nesta função
// o código irá ler o bloco catch e ele poderá qual foi o erro para manipular

function retornaString(str) {
  if (!str) return console.log("String inválida");

  console.log(str);
}


function retornaError(str) {
  if (!str) throw "String inválida";

  return str;
}


function manipulaErro(str) {
  try {
    retornaError(str);
  } catch(e) {
    // console.log(e);
    // console.log(`Houve um erro na execução. (${e}).`);
    throw e;
  }
}

manipulaErro();