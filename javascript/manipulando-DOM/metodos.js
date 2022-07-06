// pegar elemento
const title = document.getElementById("title");
const content = document.getElementById('conteudo');
const list = document.getElementById('listinha');
const items = document.getElementsByClassName('item');

const newTitleTag = document.createElement('h1');
let newTitleContent = document.createTextNode('Este é o novo titulo, internet!');
newTitleTag.appendChild(newTitleContent); // adicionando o conteúdo à nova tag de título



// document.removeChild('h1');
// document.appendChild('main');
// document.replaceChild('ul', 'ol');