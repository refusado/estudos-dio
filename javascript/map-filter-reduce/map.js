const myArray = ['Vassoura', 'Rodo', 'Pazinha', 'Escova', 'Mangueira'];

function callback(valor, indice, array) {
  return `${valor} é o ${indice+1}º elemento da array [${array.join(', ')}]`;
}

const objetosDeCozinha = myArray.map((valor, indice, array) => `${valor}`);

// console.log(objetosDeCozinha)

// ATIVIDADE
// sem this

const numeros = [1, 2, 3, 4, 5];
const numerosSomados = numeros.map(n => n + 5); // Arrow function

// console.log(numerosSomados);

// com this

const banana = {
  tipo: 'fruta',
  cor: 'amarelo',
  valor: 10,
};
const pera = {
  tipo: 'fruta',
  cor: 'verde',
  valor: 8,
};
const dipirona = {
  tipo: 'remédio',
  cor: 'branco',
  valor: 1,
};

function somaValores(arr, obj) {
  return arr.map(function(item) {
    return item + this.valor;
  }, obj);
};

const resultado = somaValores(numeros, pera);
console.log(resultado);