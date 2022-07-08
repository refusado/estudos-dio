// importação normal
// import { sum, sub } from "./calc.mjs";

// importação assíncrona (RETORNA UMA PROMISE), já pode usar .then, .catch...
const carregaCalc = async () => {
  const { sum, sub } = await import('./calc.mjs'); 
  console.log(sum(9), sub(10));
};

document.getElementById('btn').addEventListener('click', carregaCalc);

// import('./calc.mjs')
//   .then((module) => {
//     console.log(module);
//   })