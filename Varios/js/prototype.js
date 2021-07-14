// Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.

// La propiedad prototype también nos permite modificar
// los objetos predefinidos en JavaScript, con lo que redefiniremos el comportamiento
// de algunos métodos de dichos objetos o añadiremos nuevas propiedades o métodos
// totalmente nuevos.

Array.prototype.indexOf = function (objeto) {
  var resultado = -1;
  for (var i = 0; i < this.length; i++) {
    if (this[i] == objeto) {
      resultado = i;
      break;
    }
  }
  return resultado;
};

// Veamos otro ejemplo, en el que vamos a modificar la clase String para añadir un método que
// convierta una cadena en un array:

String.prototype.toArray = function () {
  return this.split("");
};

// También podemos simular la herencia, usando Prototype, y añadiendo un método a
// la clase Object, llamado extend(), con el que podemos copiar las propiedades de una
// clase origen en otra que sea la clase destino:

Object.extend = function (ClaseDestino, ClaseOrigen) {
  for (var nombrePropiedad in ClaseOrigen) {
    ClaseDestino[nombrePropiedad] = ClaseOrigen[nombrePropiedad];
  }
  return ClaseDestino;
};

// Usamos prototype para evitar el consumo excesivo de recursos,
// automáticamente heredara las propiedades y métodos de otro
// objeto llamado prototype. Por lo tanto, si se modifica el objeto prototipo o le añadimos
// más funcionalidades nuevas, los objetos que estén fabricados con ese molde, también
// tendrán esas características nuevas.

// function Factura(idFactura, idCliente) {
//   this.idFactura = idFactura;
//   this.idCliente = idCliente;
// }
// Factura.prototype.muestraCliente = function () {
//   alert(this.idCliente);
// };
// Factura.prototype.muestraId = function () {
//   alert(this.idFactura);
// };

// Para que podamos incluir los métodos en el prototipo de un objeto, vamos a utilizar la
// propiedad prototype del objeto. Vemos como se han añadido los dos métodos en su
// prototipo. Así, todos los objetos que creemos con esta función constructora incluirán
// por defecto estos dos métodos. De esta manera, no tenemos que crear dos nuevas
// funciones por cada objeto, sino que hemos definido dos funciones para todos los
// objetos creados.

// Debemos tener cuidado con la propiedad prototype, y es que podemos rescribir un
// método o una propiedad sin darnos cuenta.

// Factura.prototype.iva = 16;
// var laFactura = new Factura(3, 7);
// // laFactura.iva = 16
// Factura.prototype.iva = 7;
// var otraFactura = new Factura(5, 4);
// Ahora, los objetos laFactura.iva y otraFactura.iva = 7
// Ambos objetos se cambian al ultimo valor establecido, esto se debe tener en cuenta.
