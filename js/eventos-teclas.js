// Utilizaremos la función String.fromCharCode() para convertir el código de un carácter
// (que no es el código interno) al carácter que representa la tecla que se ha pulsado.
// 
// Con (windows.onload) esperamos a que la pagina carge por completo.

window.onload = function () {
  document.onkeyup = muestraInformacion;
  document.onkeypress = muestraInformacion;
  document.onkeydown = muestraInformacion;
};
function muestraInformacion(elEvento) {
  var evento = window.event || elEvento;
  var mensaje =
    "Tipo de evento: " +
    evento.type +
    "<br>" +
    "Propiedad keyCode: " +
    evento.keyCode +
    "<br>" +
    "Propiedad charCode: " +
    evento.charCode +
    "<br>" +
    "Carácter pulsado: " +
    String.fromCharCode(evento.charCode);
  info.innerHTML += "<br>------------------<br>" + mensaje; // Con innerHTML reemplazamos el contenido HTML por lo que queramos
}
