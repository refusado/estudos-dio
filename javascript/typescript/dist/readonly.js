"use strict";
class MeuCachorro {
    constructor(nome, idade, parque) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parque;
    }
}
const doguinho = new MeuCachorro('Apolo', 14, 'parquinho');
console.info(doguinho.idade);
