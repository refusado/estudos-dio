// INTERFACE

interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarSom?(decibeis: number): void;
    domestico: boolean;
}

interface Felino extends Animal {
    visaoNoturna: boolean;
}

interface Canino extends Animal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type Domestico = Felino | Canino;

const dog: Domestico = {
    domestico: true,
    nome: 'dog',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
}

const animal: Animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false,
    executarSom(decibeis) {
        return `${decibeis}dB`;
    },
}

const felino: Felino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: false,
    domestico: false,
}

if (animal.executarSom) console.log(animal.executarSom(1213));