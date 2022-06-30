var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var decrementBtn = document.getElementsByName('subtrair')[0];
var incrementBtn = document.getElementsByName('adicionar')[0];

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function verifyLimit() {
  if (currentNumber < 0 || currentNumber > 9) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'black';
  }
}

function decrement() {
  if (currentNumber > -10) {
    currentNumber--;
  }
  currentNumberWrapper.innerHTML = currentNumber;
  verifyLimit();
}
function increment() {
  if (currentNumber < 20) {
    currentNumber++;
  }
  currentNumberWrapper.innerHTML = currentNumber;
  verifyLimit();
}