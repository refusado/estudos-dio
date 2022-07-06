// pegar elemento
const title = document.getElementById("title");
const content = document.getElementById('conteudo');
const list = document.getElementById('listinha');
const items = document.getElementsByClassName('item');

content.addEventListener('mouseover', function() {
  content.style.backgroundColor = 'red';
})
content.addEventListener('mouseout', function() {
  content.style.backgroundColor = 'transparent';
})

console.log(items);

const allItems = Object.keys(items).map(function(k) {
  return items[k];
})

console.log(allItems);

allItems.map( (value) => {
  value.addEventListener('mouseover', function() {
    value.style.backgroundColor = 'blue';
  })
  value.addEventListener('mouseout', function() {
    value.style.backgroundColor = 'transparent';
  })
})