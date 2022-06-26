// primeiro modo
function verifyPalidromo(string) {
  if (!string) return "String vazia";

  var reversed = string.split('').reverse().join('');

  if (reversed === string)
    return `${string} é um palídromo!`;
  return `${string} não é um palídromo`;
}

// segundo modo
function verifyPalidromo2(string) {
  if (!string) return "String vazia :\\";

  const array = string.split('');
  const reversed = string.split('').reverse();

  for (let i = 0; i < string.length / 2; i++) {
    if (array[i] !== reversed[i])
      return `${string} não é um palídromo`;
  }

  return `${string} é um palídromo!`;
}

console.log(verifyPalidromo2('subinoonibus'));