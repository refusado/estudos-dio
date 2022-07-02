// encadeamento 

const myPromise = new Promise((resolve, reject) => {
  const nome = "Matheus";
  
  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado!");
  }
  else {
    reject("Usuário Matheus não encontrado!");
  }
});

myPromise
  .then((data) => {
    return data.toLowerCase();
  })
  .then((data) => {
    console.log(data);
  });



// usando o catch

const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Pedro";
  
  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado!");
  }
  else {
    reject("Usuário Matheus não encontrado!");
  }
});

myPromise2
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Ooops, algo errado aconteceu: " + err + " :/");
  });