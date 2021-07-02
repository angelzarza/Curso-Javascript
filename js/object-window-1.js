var ventana;
var x, y;

function CrearVentana() {
  var opciones = "left=100,top=100,";
  opciones = opciones + "width=" + document.FORMULARIO[0].value + ",";
  opciones = opciones + "height=" + document.FORMULARIO[1].value;
  ventana = window.open("", "", opciones);
  ventana.document.write("Ventana nueva con el tamaño ");
}
function CerrarVentana() {
  if (ventana && !ventana.closed) ventana.close();
  window.close();
}
function MoverVentana() {
  x = document.FORMULARIO[0].value;
  y = document.FORMULARIO[0].value;
  window.moveTo(x, y);
}
function Redimensionar() {
  x = document.FORMULARIO[0].value;
  y = document.FORMULARIO[0].value;
  window.resizeTo(x, y);
}
