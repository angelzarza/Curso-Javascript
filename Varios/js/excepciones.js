// Se definen las palabras reservadas try, catch y finally. Y finally es opional, mientras
// que try debe ir siempre con catch.

try {
  var resultado = 5 / a;
} catch (excepcion) {
  alert(excepcion);
}

// Con JavaScript también podemos lanzar excepciones manualmente usando la palabra
// reservada throw

try {
  if (typeof a == "undefined" || isNaN(a)) {
    throw new Error('La variable "a" no es un número');
  }
  var resultado = 5 / a;
} catch (excepcion) {
  alert(excepcion);
} finally {
  alert("Finally se ejecuta");
}
