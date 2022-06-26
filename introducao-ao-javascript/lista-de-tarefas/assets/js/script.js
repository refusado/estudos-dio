var form = document.getElementById('add-container');

form.addEventListener('submit', function(f){
  var input = document.getElementById('newTask');
  if (input.value != ''){
    addItem(input.value);
    input.value = '';
  }
  f.preventDefault();
})



function addItem(name) {
  nextId = document.getElementsByClassName('task').length;

  var tasksContainer = document.getElementById('tasks-container');

  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'item');

  var newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('id', 'task-' + nextId);
  newCheckbox.setAttribute('class', 'task');

  var newLabel = document.createElement('label');
  newLabel.setAttribute('class', 'task-labels');
  newLabel.setAttribute('for', 'task-' + nextId);
  newLabel.innerText = ' ' + name;

  newDiv.appendChild(newCheckbox);
  newDiv.appendChild(newLabel);

  tasksContainer.appendChild(newDiv);
}