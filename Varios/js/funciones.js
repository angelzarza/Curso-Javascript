function Hora(){
    var hoy =new Date()
    document.write(hoy.getHours(),":",hoy.getMinutes())
    }
document.write("Hora actual: ");
Hora()

function suma(A,B){
    var C;
    C = A + B;
    return C;
    }

document.write('<BR>');  //Salto de línea
document.write(" // Llamada a la función Suma con argumentos es: ");
document.write(suma(2,3));

function mayor(A,B){
    if (A >= B) {
        document.write(" // A es mayor que B: ");
        return "True";
    }
    else {
        document.write(" // A es menor que B: ");
        return "False";
    }
}

document.write('<BR>');  //Salto de línea
document.write(mayor(5,7));
