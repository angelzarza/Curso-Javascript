// Rellenar un campo obligatorio.
// Seleccionar el valor de una lista desplegable.
// Comprobar que la dirección de email indicada sea correcta.
// Comprobar que la fecha introducida sea lógica.
// Comprobar que se haya introducido un número donde se requiere, etc.

// function validacion() {
//   if ("condicion que debe cumplir el primer campo del formulario") {
//     // Si no se cumple la condicion...
//     alert("[ERROR] El campo debe tener un valor de...");
//     return false;
//   } else if ("condicion que debe cumplir el segundo campo del formulario") {
//     // Si no se cumple la condicion...
//     alert("[ERROR] El campo debe tener un valor de...");
//     return false;
//   } else if ("condicion que debe cumplir el último campo del formulario") {
//     // Si no se cumple la condicion...
//     alert("[ERROR] El campo debe tener un valor de...");
//     return false;
//   }
//   // Si el script ha llegado a este punto, todas las condiciones
//   // se han cumplido, por lo que se devuelve el valor true
//   return true;
// }

// Campo de texto obligatorio
// Esta expresion regular comprueba que no se introduzcan espacios en blanco (/^\s+$/.test(valor))
function validacion() {
  valor = document.getElementById("campo").value;
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    return false;
  }
}

// Campo de texto con valores numéricos
function validacion() {
  valor = document.getElementById("campo").value;
  if (isNaN(valor)) {
    return false;
  }
}

// Opción de una lista seleccionada
function validacion() {
  indice = document.getElementById("opciones").selectedIndex;
  if (indice == null || indice == 0) {
    return false;
  }
}
{
  /* <form action="" method="" id="" name="" onsubmit="return validacion()">
<select id="opciones" name="opciones">
  <option value="">- Selecciona un valor -</option>
  <option value="1">Primer valor</option>
  <option value="2">Segundo valor</option>
  <option value="3">Tercer valor</option>
</select>
</form> */
}

// Dirección de email
function validacion() {
  valor = document.getElementById("campo").value;
  if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) {
    return false;
  }
}

// Fecha
function validacion() {
  var ano = document.getElementById("ano").value;
  var mes = document.getElementById("mes").value;
  var dia = document.getElementById("dia").value;
  valor = new Date(ano, mes, dia);
  if (!isNaN(valor)) {
    return false;
  }
}

// Número de DNI o NIE
function validacion() {
  valor = document.getElementById("campo").value;
  var letrasDNI = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  // Comprobamos que tenga formato correcto
  if (!/^[X-Z0-9]{1}[0-9]{7}[A-Z]$/.test(valor)) {
    return false;
  }
  // Comprobamos caracter inicial
  if (/^[XYZ]{1}/.test(valor)) {
    var pos =
      str_replace(["X", "Y", "Z"], ["0", "1", "2"], valor).substring(0, 8) % 23;
    if (valor.charAt(8) != letrasDNI.substring(pos, pos + 1)) {
      return false;
    }
  } else if (valor.charAt(8) != letrasDNI[valor.substring(0, 8) % 23]) {
    return false;
  }
}

// Número de teléfono
function validacion() {
  valor = document.getElementById("campo").value;
  if (!/^[89]\d{8}$/.test(valor) && !/^[6]\d{8}$/.test(valor)) {
    return false;
  }
}

// Checkbox seleccionado
function validacion() {
  elemento = document.getElementById("campo");
  if (!elemento.checked) {
    return false;
  }
}

// Todos los checkbox seleccionado
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

// Radiobutton seleccionado
function validacion() {
  opciones = document.getElementsByName("opciones");
  var seleccionado = false;
  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionado = true;
      break;
    }
  }
  if (!seleccionado) {
    return false;
  }
}
