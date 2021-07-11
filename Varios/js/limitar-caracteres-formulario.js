// Si retorna False no se podra escribir mas en el formulario.

function limita(maximoCaracteres) {
  var elemento = document.getElementById("texto");
  if (elemento.value.length >= maximoCaracteres) {
    return false;
  } else {
    return true;
  }
}
