var containerContador1 = document.getElementById('number1');
var contador1 = 0;
containerContador1.innerHTML = contador;

function somar1() {
  contador1 = contador1 + 1;
  containerContador1.innerHTML = contador1;

  if (contador1 < 0) {
    containerContador1.style.color = 'red';
  } else {
    containerContador1.style.color = 'black';
  }
}

function sub1() {
  contador1 = contador1 - 1;
  containerContador1.innerHTML = contador1;

  if (contador1 < 0) {
    containerContador1.style.color = 'red';
  } else {
    containerContador1.style.color = 'black';
  }
}
