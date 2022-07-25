interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome: string, idade: number, parque: string) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parque;
    }
}

const doguinho = new MeuCachorro('Apolo', 14, 'parquinho');
console.info(doguinho.idade);
