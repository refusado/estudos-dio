// GENERIC TYPES
function somarComMap<TipoDesconhecido>(array: TipoDesconhecido[], valor: TipoDesconhecido) {
    return array.map(() => valor);
}

console.info(somarComMap([1, 2, 3], 100));
// O TIPO DESCONHECIDO SERÁ O QUE FOR PASSADO NELE NA PRIMEIRA ATRIBUIÇÃO
// OU SEJA, SE O PRIMEIRO ARGUMENTO FOR UMA ARRAY DE NÚMERO, O VALOR TAMBÉM TERÁ QUE SER UM NÚMERO