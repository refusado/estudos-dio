// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
// let lines = gets().split('\n');
// var N = parseInt(lines.shift());

var N = 19;

for (let i = 1; i <= N; i++) {

  let resultado = i ** 2;

	if (i % 2 === 0) {
    // print(`${i}^2 = ${resultado}`);
    console.log(`${i}^2 = ${resultado}`);
  }
}