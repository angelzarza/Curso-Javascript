// Rellenar un campo obligatorio.
// Seleccionar el valor de una lista desplegable.
// Comprobar que la dirección de email indicada sea correcta.
// Comprobar que la fecha introducida sea lógica.
// Comprobar que se haya introducido un número donde se requiere, etc.

function validacion() {
  if ("condicion que debe cumplir el primer campo del formulario") {
    // Si no se cumple la condicion...
    alert("[ERROR] El campo debe tener un valor de...");
    return false;
  } else if ("condicion que debe cumplir el segundo campo del formulario") {
    // Si no se cumple la condicion...
    alert("[ERROR] El campo debe tener un valor de...");
    return false;
  } else if ("condicion que debe cumplir el último campo del formulario") {
    // Si no se cumple la condicion...
    alert("[ERROR] El campo debe tener un valor de...");
    return false;
  }
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return true;
}
