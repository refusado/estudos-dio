// named exports = exporta vários arquivos
// defaul exports = exporta apenas 1 arquivo

// exportando arquivos com named exports

// MODO 1
export function mostraIdade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa) {
  return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostraHobby(pessoa) {
  return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

// MODO 2
function mostraIdade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa) {
  return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa) {
  return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}
export {
  mostraIdade,
  mostraCidade,
  mostraHobby
}



// exportando arquivos com default export
function mostraIdade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa) {
  return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa) {
  return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}
export {
  mostraIdade,
  mostraCidade
}

export default mostraHobby; // só pode haver 1 por arquivo