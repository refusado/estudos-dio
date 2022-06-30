// o finally vai ser um bloco de código que será executado depois do catch
// este bloco de código é executado se houver erro ou não

function retornaError(str) {
  if (!str) throw "String inválida";

  return str;
}

function manipulaErro(str) {
  try {
    retornaError(str);
  }
  catch(e) {
    console.log(e);
  }
  finally {
    console.log(`A string enviada foi: "${str}"`);
  }
}

manipulaErro('');
manipulaErro('Coqueiro carregado');