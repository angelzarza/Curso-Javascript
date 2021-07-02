// Esta propiedad (type) nos devolverá el tipo de evento producido, que será igual al nombre
// del evento pero sin el prefijo on.

function resalta(elEvento) {
  var evento = elEvento || window.event;
  switch (evento.type) {
    case "mouseover":
      this.style.borderColor = "black";
      console.log(evento);
      break;
    case "mouseout":
      this.style.borderColor = "silver";
      console.log(evento);
      break;
  }
}
window.onload = function () {
  document.getElementById("seccion").onmouseover = resalta;
  document.getElementById("seccion").onmouseout = resalta;
};
