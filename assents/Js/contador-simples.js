var containerContador = document.getElementById('number');
var contador = 0;
containerContador.innerHTML = contador;

function somar() {
  contador = contador + 1;
  containerContador.innerHTML = contador;
}

function sub() {
  contador = contador - 1;
  containerContador.innerHTML = contador;
}
