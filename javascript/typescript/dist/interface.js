"use strict";
const dog = {
    domestico: true,
    nome: 'dog',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
};
const animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false,
    executarSom(decibeis) {
        return `${decibeis}dB`;
    },
};
const felino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: false,
    domestico: false,
};
if (animal.executarSom)
    console.log(animal.executarSom(1213));
