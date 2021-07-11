// Creamos un reloj y le obtenemos los valores que nos interesen

var fechaHora = new Date();

function reloj() {
  var fechaHora = new Date();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();
  
  // Formato 12h
  var sufijo = "am";
  if (horas > 12) {
    horas = horas - 12;
    sufijo = "pm";
  }

  //Agregamos los 0
  if (horas < 10) { horas = '0' + horas; }
  if (minutos < 10) { minutos = '0' + minutos; }
  if (segundos < 10) { segundos = '0' + segundos; }

  document.getElementById("reloj").innerHTML =
      horas + ":" + minutos + ":" + segundos + " " + sufijo;
}

// Funcion para actualizar la pagina cada segundo
window.onload = function () {
  setInterval(reloj, 1000);
}
