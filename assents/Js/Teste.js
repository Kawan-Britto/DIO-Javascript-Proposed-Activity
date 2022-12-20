'use strict';
var book = {
  topic: 'Javascript',
  fat: true,
};
book.author = 'Flanagan';

var primes = [2, 3, 5, 6, 7];
primes[4] = 9;

var count = 0;
count = count + 2 * 4 - 5 / 5;
count += 5;
console.log(count == 12);
console.log(count !== 12);
console.log(count < 14);
console.log(count <= 12);
console.log(false == (count == 12));
console.log(count == 12 && count != 12);

this.name = 'Camila';
this.age = 19;
const dev = {
  name: 'Isabella',
  age: 22,
};

function choseName() {
  console.log(this);
}

choseName.call(this);
choseName.call(dev);

const pushReversePrimes = (w, y, z) => {
  primes.push(w, y, z);
  primes.reverse();
  console.log(primes);
};

pushReversePrimes(11, 17, 23);

var coordenadas = {
  p1: [34, 53],
  p2: [78, 84],
  dist: function () {
    var xp1 = this.p1[0];
    var xp2 = this.p2[1];
    var yp1 = this.p1[0];
    var yp2 = this.p2[1];

    var a = (xp2 - xp1) * (xp2 - xp1);
    var b = (yp2 - yp1) * (yp2 - yp1);

    return Math.sqrt(a + b);
  },
};

function abs(x) {
  if (x >= 10) {
    return x;
  } else {
    return -x;
  }
}

function factorial(n) {
  var product = 1;
  while (n > 1) {
    product *= n;
    n--;
    console.log(product);
  }
  return product;
}

function factorial2(n) {
  var product = 1;
  var i = 1;
  for (i == 2; i <= n; i++) {
    product *= i;
    console.log(product);
  }
}

function points(x, y) {
  this.x = x;
  this.y = y;
}
var p = new points(3, 5);
points.prototype.r = function () {
  return Math.sqrt(this.x * this.x + this.y + this.y);
};
function debug(msg) {
  var area = document.body.querySelector('.area_de_testes');
  var log = area.querySelector('#debuglog');
  if (!log) {
    log = document.createElement('div');
    log.classList.add('debuglog');
    log.innerHTML = msg;
    area.appendChild(log);
  }
}

//Datas
/* 
later.getFullYear() // => 2010
later.getMonth() // => 0: meses com base em zero
later.getDate() // => 1: dias com base em um
later.getDay() // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
later.getHours() // => 17: 5 da tarde, hora local
later.getUTCHours() // Horas em UTC; depende do fuso horário
later.toString() // => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800
JavaScript básica
 // (PST)"
later.toUTCString() // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
later.toLocaleDateString() // => "01/01/2010"
later.toLocaleTimeString() // => "05:10:30 PM"
later.toISOString() // => "2010-01-02T01:10:30.000Z"; somente ES5
*/

//String
/* 
var s = "hello, world" // Começa com um texto.
s.charAt(0) // => "h": o primeiro caractere.
s.charAt(s.length-1) // => "d": o último caractere.
s.substring(1,4) // => "ell": o 2º, 3º e 4º caracteres.
s.slice(1,4) // => "ell": a mesma coisa
s.slice(-3) // => "rld": os últimos 3 caracteres
s.indexOf("l") // => 2: posição da primeira letra l.
s.lastIndexOf("l") // => 10: posição da última letra l.
s.indexOf("l", 3) // => 3: posição do primeiro "l" em ou após 3 
s.split(", ") // => ["hello", "world"] divide em substrings
s.replace("h", "H") // => "Hello, world": substitui todas as instâncias
s.toUpperCase() // => "HELLO, WORLD
*/

function anime(name, genre, nota) {
  this.name = name;
  this.genre = genre;
  this.nota = nota;
}
const FMAB = new anime('Fullmetal Alchemist Brotherhood', 'Shounen', 9.2);
console.log(FMAB);

function varfor() {
  for (var i = 0; i < 10; i++) console.log(i);
  for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
}

function testss(o) {
  var i = 0;
  if (typeof o == 'object') {
    var j = 0;
    for (var k = 0; k < 10; k++) {
      console.log(k, i);
    }
    console.log(k);
  }
  console.log(j);
}

var square = (x) => {
  return x * x;
};
