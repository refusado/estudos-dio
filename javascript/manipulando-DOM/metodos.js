// métodos para pegar elementos
const
title     = document.getElementById("title");
content   = document.getElementById('conteudo');
list      = document.getElementById('listinha');
items     = document.getElementsByClassName('item');

const newTitleTag   = document.createElement('h1');
let newTitleContent = document.createTextNode('Este é o novo titulo, internet!');
newTitleTag.appendChild(newTitleContent); // adicionando o conteúdo à nova tag de título


// REMOVE O FILHO
// document.removeChild('h1');

// ADICIONAR O ELEMENTO EM OUTRO ELEMENTO
// document.appendChild('main');

// TROCA OS ELEMENTOS
// document.replaceChild(NEW, OLD);