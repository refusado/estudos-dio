//Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

// Promise recebe uma função com 2 outras funções callbacks ->
// A primeira função será executada se não houver erros na chamado do promise (por isso geralmente nomeam esta função com resolve)
// A segunda função será executada caso haja algum erro na chamada (por isso é geralmente nomeada reject e é manipulada com .catch no futuro)

const myPromise = new Promise(callback)

function callback(resolve, reject) {
  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuário Matheus criado!");
    // esta mensagem será recebida como parâmetro da função callback do .then
  }
  else {
    reject("O usuário Matheus não foi criado!");
    // esta mensagem será recebida como parâmetro da função callback do .catch
  }

}

myPromise.then((data) => {
  console.log(data);
})