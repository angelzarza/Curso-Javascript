// Ejemplos con funciones de ECMASCRIPT incorporados

// Forma antigua de crear clases.
// Vamos a utilizar funciones para simular los constructores
// de objetos, y por ello las denominaremos "funciones constructoras".

// function Factura(idFactura, idCliente) {
//     this.idFactura = idFactura;
//     this.idCliente = idCliente;
// }

// var laFactura = new Factura(3, 7);

// alert("cliente = " + laFactura.idCliente + ", factura = " + laFactura.idFactura);

// Metodos

// function Factura(idFactura, idCliente) {
//   //Declaramos las propiedades
//   this.idFactura = idFactura;
//   this.idCliente = idCliente;
//   //Declaramos los metodos
//   this.muestraCliente = function () {
//     alert(this.idCliente);
//   };
// }
// this.muestraId = function () {
//   alert(this.idFactura);
// };

// //creamos el objeto laFactura
// var laFactura = new Factura(3, 7);
// //mediante los metodos, accedemos a sus propiedades
// laFactura.muestraCliente();
// var otraFactura = new Factura(5, 4);
// otraFactura.muestraId();

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

// Clases en Javascript metodo nuevo

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100

// Metodos estaticos de clases

// La palabra clave static define un método estático para una clase. Los métodos estáticos
// son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase.
// Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1, p2)); // 7.0710678118654755

// Clases extends

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace un ruido.");
  }
}

// Hereda todas las propiedades de Animal
class Perro extends Animal {
  hablar() {
    console.log(this.nombre + " ladra.");
  }
}

// Extender desde clases tradicionales

function Animal(nombre) {
  this.nombre = nombre;
}
Animal.prototype.hablar = function () {
  console.log(this.nombre + "hace un ruido.");
};

class Perro extends Animal {
  hablar() {
    super.hablar();
    console.log(this.nombre + " ladra.");
  }
}

var p = new Perro("Mitzie");
p.hablar();

// Fijarse que las clases no pueden extender objectos regulares (literales). Si se quiere heredar
// de un objecto regular, se debe user Object.setPrototypeOf()::

var Animal = {
  hablar() {
    console.log(this.nombre + "hace ruido.");
  },
};

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + " ladra.");
  }
}

Object.setPrototypeOf(Perro.prototype, Animal);

var d = new Perro("Mitzie");
d.hablar();

// Clases especies

// Quizás se quiera devolver objetos Array derivados de la clase array MyArray. El patron species
// permite sobreescribir constructores por defecto.
// Por ejemplo, cuando se usan metodos del tipo map() que devuelven el constructor por defecto, se
// quiere que esos métodos devuelvan un objeto padre Array, en vez de MyArray. El símbolo Symbol.species (en-US)
// permite hacer:

class MyArray extends Array {
  // Sobre escribe species sobre el constructor padre Array
  static get [Symbol.species]() {
    return Array;
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

// Clases con super

// La palabra clave super es usada para llamar funciones del objeto padre.

class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace ruido.");
  }
}

class Leon extends Gato {
  hablar() {
    super.hablar();
    console.log(this.nombre + " maulla.");
  }
}

// Clases Mix-ins

// Subclases abstractas or mix-ins son plantillas de clases. Una clase ECMAScript solo puede tener
// una clase padre, con lo cual la herencia multiple no es posible. La funcionalidad debe ser proporcionada
// por la clase padre.
// Una función con una clase padre como entrada y una subclase extendiendo la clase padre como salida puede
// ser usado para implementar mix-ins en EMCAScript:

var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

// Una clase que use este método puede ser escrita tal que así:
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
