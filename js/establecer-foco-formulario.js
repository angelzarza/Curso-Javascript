// Debemos asignar automáticamente el foco al primer elemento del formulario cuando se
// carga la página.

document.getElementById("primero").focus();

// Otro metodo sin definir ID
// if (document.forms.length > 0) {
//   for (var i = 0; i < document.forms[0].elements.length; i++) {
//     var campo = document.forms[0].elements[i];
//     if (campo.type != "hidden") {
//       campo.focus();
//       break;
//     }
//   }
// }
