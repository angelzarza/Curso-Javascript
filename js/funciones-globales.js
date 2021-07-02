var C; //Variable global,
C = 0;
function suma(A, B) {
  C = A + B;
  return C;
}
function resta(A, B) {
  return C + A - B;
}

document.write("Sumamos dos valores: ");
document.write(suma(2,3));
document.write('<BR>');  //Salto de línea
document.write("Restamos dos valores: ");
document.write(resta(10,20));