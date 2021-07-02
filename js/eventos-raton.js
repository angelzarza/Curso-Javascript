window.onload = function () {
  document.onclick = muestraInformacion;
};
function muestraInformacion(elEvento) {
  var evento = elEvento || window.event;
  var coordenadaX = evento.clientX;
  var coordenadaY = evento.clientY;
  alert(
    "Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY
  );
}
