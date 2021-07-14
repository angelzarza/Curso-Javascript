// La reflexión es el proceso en tiempo de ejecución, mediante el cual un
// programa obtiene información sobre sí mismo y por tanto, es capaz de au-
// tomodificarse en tiempo de ejecución.

if (elObjeto.laPropiedad) {
  // el objeto posee la propiedad buscada
}

// Si no existe esa propiedad en el objeto, la respuesta será undefined, que será
// equivalente a un valor false, con lo que no se ejecutará el bloque if.

// Usando el operador typeof , nos devolverá el tipo del objeto o variable que se le pasa
// como parámetro

if (typeof elObjeto.laPropiedad != "undefined") {
  // el objeto posee la propiedad buscada
}

// También podemos usar el operador instanceof , con el que comprobaremos si un
// objeto es una instancia de otro objeto.

if (elObjeto instanceof Factura) {
  alert("Se trata de un objeto de tipo Factura");
}

// Ejemplo

var elObjeto = [];
if (elObjeto instanceof Array) {
  alert("Es un array");
} else if (elObjeto instanceof Object) {
  alert("Es un objeto");
}
