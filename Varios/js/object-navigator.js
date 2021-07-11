var i, navi;
var navi = eval("navigator"); //eval evalúa el parámetro y devuelve el
for (i in navi) { // objeto asociado a la cadena
  document.write("navigator. <b>" + i + "</b>=> <i>" + navi[i] + "</i><br>");
}
