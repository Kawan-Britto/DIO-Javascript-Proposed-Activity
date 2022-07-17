var containerContador2 = document.getElementById('number2');
var contador2 = 0;
containerContador2.innerHTML = contador;

function somar2() {
  contador2 = contador2 + 1;
  containerContador2.innerHTML = contador2;

  if (contador2 < 0) {
    containerContador2.innerHTML = 'None';
  }
}

function sub2() {
  contador2 = contador2 - 1;
  containerContador2.innerHTML = contador2;

  if (contador2 < 0) {
    containerContador2.innerHTML = 'None';
  }
}
