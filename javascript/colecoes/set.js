const myArray = [1, 2, 3, 3, 4, 5, 5, 6];
const mySet = new Set(myArray);

// São estruturas que armazenam valores únicos, que não se repetem;

// console.log(myArray); // [ 1, 2, 3, 3, 4, 5, 5, 6 ]
// console.log(mySet); // Set { 1, 2, 3, 4, 5, 6 }


// Métodos para Adicionar, consultar e deletar

mySet.add(0);
mySet.add(2);
mySet.add(7);
// Set { 1, 2, 3, 4, 5, 6, 0, 7 }

mySet.has(3); // true
mySet.has(9); // false

mySet.delete(4);
// Set { 1, 2, 3, 5, 6, 0, 7 }