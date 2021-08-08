// Script para pruebas de codigo, asociado a (test.html)

Array.prototype.indexOf = function (objeto) {
  var resultado = -1;
  for (var i = 0; i < this.length; i++) {
      if (this[i] == objeto) {
          resultado = i;
          break;
      }
  }
  return resultado;
} 
