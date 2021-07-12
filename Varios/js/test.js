// Script para pruebas de codigo, asociado a (test.html)

function validacion() {
  formulario = document.getElementById("formulario");
  for (var i = 0; i < formulario.elements.length; i++) {
    var elemento = formulario.elements[i];
    if (elemento.type == "checkbox") {
      if (!elemento.checked) {
        return false;
      }
    }
  }
}
