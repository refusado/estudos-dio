// Uma coleção de arrays no formato [chave, valor];
// Pode ser iterado pou um loop for...of;

// Podem ter CHAVES de QUALQUER TIPO, diferente de objetos;
// Poem ter VALORES apenas do MESMO TIPO;
// Possuem a propriedade length;
// Utilizado quando o valor das chaves é desconhecido;

const myMap = new Map();

myMap.set('fruta', 'banana');
// Map { 'fruta' => 'banana' }

myMap.get('fruta');
// 'banana'

// myMap.delete('fruta');
// true

myMap.get('fruta');
// undefined

console.log(myMap.size);
console.log(myMap);

myMap.set('fruta2', 'morango');

console.log(myMap.size);
console.log(myMap);




// const numbers = [ 1, 2, 3, 4, 5, 5, 6, 7, 7, 8 ];