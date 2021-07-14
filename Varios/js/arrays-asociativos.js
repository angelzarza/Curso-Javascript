// Arrays asociativos en Javascript

// var modulos = new Array();

// modulos.titulos = new Array();
// modulos.titulos['rss'] = "Lector RSS";
// modulos.titulos['email'] = "Gestor de email";
// modulos.titulos['agenda'] = "Agenda";

// Otra forma de hacerlos

// modulos.titulos = new Array();
// modulos.titulos.rss = "Lector RSS";
// modulos.titulos.email = "Gestor de email";
// modulos.titulos.agenda = "Agenda";

// Arrays asociativos en JSON

var modulos = new Array();
modulos.titulos = {
  rss: "Lector RSS",
  email: "Gestor de email",
  agenda: "Agenda",
};

console.log(modulos);

// Objetos y arrays combinados

var objeto = {
    "propiedad1": valor_simple_1,
    "propiedad2": valor_simple_2,
    "propiedad3": [array1_valor1, array1_valor2],
    "propiedad4": { "propiedad anidada": valor },
    "metodo1": nombre_funcion_externa,
    "metodo2": function() { ejemplo },
    "metodo3": function() { ejemplo },
    "metodo4": function() { ejemplo }
};
