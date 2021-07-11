var valor1 = document.getElementById("texto").value;
var valor2 = document.getElementById("parrafo").value;

console.log(valor1);
console.log(valor2);

// Radiobutton
var elementos = document.getElementsByName("pregunta");
for (var i = 0; i < elementos.length; i++) {
  alert(
    " Elemento: " + elementos[i].value + "Seleccionado: " + elementos[i].checked
  );
}

// Checkbox
var elemento = document.getElementById("condiciones");
alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
elemento = document.getElementById("privacidad");
alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);

// Select
// Obtenemos la referencia a la lista
var lista = document.getElementById("opciones");
// Obtenemos el índice de la opción que se ha seleccionado
var indiceSeleccionado = lista.selectedIndex;
// Con el índice y el array "options", obtenemos la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];
// Obtener el valor y el texto de la opción seleccionada
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;
alert(
  "Opción seleccionada: " +
    textoSeleccionado +
    "\n Valor de la opción: " +
    valorSeleccionado

//Metodo corto
// Obtenemos el valor de la opción seleccionada
// var valorSeleccionado = lista.options[lista.selectedIndex].value;
// Obtenemos el texto que muestra la opción seleccionada
// var valorSeleccionado = lista.options[lista.selectedIndex].text;
// No confundir el valor de la propiedad selectedIndex con el valor correspon-
// diente a la propiedad value de la opción seleccionada.
);
