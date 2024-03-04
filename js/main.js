/* Clases, variables, arrays */

class Libro{
    constructor(titulo, autor, genero, alquilado){
        this.titulo     = titulo;
        this.autor      = autor;
        this.genero     = genero;
        this.alquilado  = alquilado;
    }
}

let estanteria = [];

estanteria.push(new Libro("El Señor de los Anillos",    "J.R.R. Tolkien",               "Fantasía",     "No"));
estanteria.push(new Libro("El Código da Vinci",         "Dan Brown",                    "Misterio",     "Si"));
estanteria.push(new Libro("Crepusculo",                 "Stephenie Meyer",              "Romantica",    "Si"));
estanteria.push(new Libro("El principito",              "Antonie de Saint-Exupéry",     "Poésia",       "No"));
estanteria.push(new Libro("Harry Potter",               "J.K. Rowling",                 "Fantasía",     "Si"));
estanteria.push(new Libro("1984",                       "George Orwell",                "Distopía",     "No"));

/* Funciones */

function buscarLibroPorTitulo(titulo){
    for (var i = 0; i < estanteria.length; i++) {
        if(estanteria[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            return estanteria[i];
        }
    }
    return null;
}
    
function filtrarLibrosPorGenero(genero) {
    var librosFiltrados = [];
    for (var i = 0; i < estanteria.length; i++) {
        if(estanteria[i].genero.toLowerCase() === genero.toLowerCase()) {
            librosFiltrados.push(estanteria[i]);
        }
    }
    return librosFiltrados;
}


function filtrarLibrosPorAutor(autor) {
    var librosEncontrados = [];
    for (var i = 0; i < estanteria.length; i++) {
        if (estanteria[i].autor.toLowerCase() === autor.toLowerCase()) {
            librosEncontrados.push(estanteria[i]);
        }
    }
    return librosEncontrados;
}


function eleccion() {   /* Punto a revisar: al introduccir una opcion no valida aparecen todos los mensajes pero el bucle del switch case se termina sin poder poner otra vez los valores*/
    let opcion = prompt("Elija la forma en que quiera buscar su libro:\n Buscar por titulo (1) \n Buscar por genero (2) \n Buscar por autor (3)");
    switch(opcion) {
        case "1": 
            var libroBuscado = buscarLibroPorTitulo(prompt("Escriba el nombre del libro:"));
            console.log("Libros encontrados:", libroBuscado);
        break;

        case "2":
            var librosPorGenero = filtrarLibrosPorGenero(prompt("Escriba el genero del libro:"));
            console.log("Libros encontrados", librosPorGenero);
        break;

        case "3":
            var librosPorAutor = filtrarLibrosPorAutor(prompt("Escriba el nombre del autor del libro:"));
            console.log("Libros encontrados:", librosPorAutor);
        break;

        default:
            console.log("Opción invalida.")
            seguir = confirm("Por favor elegir una de las opciones indicadas.");
        break;

    }        
}


eleccion()

 

/* 
let costeTotal =  0;
let confirmacion = 0;

function solicitarNochesHotel() {
    let noches = prompt("Ingresa el número de noches (3-7):");
    if (!isNaN(noches)) {
        switch(noches) {
            case "3":
                console.table("El costo por 3 noches es $USD200");
                costeTotal += 200;
                viaje["nocheHotel"] = 250
                break;

            case "4":
                console.log("El costo por 4 noches es $USD250");
                costeTotal += 250;
                viaje["nocheHotel"] = 250
                break;

            case "5":
                console.log("El costo por 5 noches es $USD300");
                costeTotal += 300;
                viaje["nocheHotel"] = 250
                break;

            case "6":
                console.log("El costo por 6 noches es $USD350");
                costeTotal += 350;
                viaje["nocheHotel"] = 250
                break;

            case "7":
                console.log("El costo por 7 noches es $USD400");
                costeTotal += 400;
                viaje["nocheHotel"] = 250
                break;

            default:
                console.log("Número de noches inválido. Por favor, introduce un número válido.");
                noches = false;
                break;

        }
        
    }
}

function solicitarVuelo() {
    let ciudad = prompt("Ingresa una ciudad (Madrid, Paris, Roma, Moscu, Bs As):");
    switch(ciudad) {
        case "Madrid": // Buscar como corregir si alguien escribe con errores de ortografia
            console.log("El costo del vuelo a Madrid es $USD110");
            costeTotal += 110;
            break;

        case "Paris":
            console.log("El costo del vuelo a Paris es $USD140");
            costeTotal += 140;
            break;

        case "Roma":
            console.log("El costo del vuelo a Roma es $USD100");
            costeTotal += 100;
            break;

        case "Moscu":
            console.log("El costo del vuelo a Moscu es $USD125");
            costeTotal += 125;
            break;

        case "Bs As":
            console.log("El costo del vuelo a Buenos Aires es $USD90");
            costeTotal += 90;
            break;

        default:
            console.log("Ciudad no disponible para vuelo. Elegir una opción valida");
            ciudad = false;
            break;
    }
}

function solicitarAlquilerCoche() {
    let dias = prompt("Ingresa los días de alquiler del coche (3-7):");
    if (!isNaN(dias)) {
        switch(dias) {
            case "3":
                console.log("El costo del alquiler del coche por 3 días es $USD200");
                costeTotal += 200;
                break;

            case "4":
                console.log("El costo del alquiler del coche por 4 días es $USD225");
                costeTotal += 225;
                break;

            case "5":
                console.log("El costo del alquiler del coche por 5 días es $USD250");
                costeTotal += 250;
                break;
            
            case "6":
                console.log("El costo del alquiler del coche por 6 días es $USD275");
                costeTotal += 275;
                break;

            case "7":
                console.log("El costo del alquiler del coche por 7 días es $USD300");
                costeTotal += 300;
                break;

            default:
                console.log("Días de alquiler inválidos. Por favor, introduce un número válido.");
                dias = false;
                break;
        }
    }
}

function mostrarResumenYCostoTotal() {
    console.log(`Tu presupuesto final es de: $${costeTotal}.`);
}

function confirmacionDeGastos(){
    let confirmar = prompt("¿Quiere hacer alguna modificación? (Si/No)");
        switch(confirmar){
            case 'No':
                confirmacion = 0;
            break;

            case 'Si':
                confirmacion = 1;
            break;

            default:
            console.log("Opción no disponible.");
            break;
        }
    
    
}

function iniciarCalculo() {
    confirmacion = 1;
    while(confirmacion == 1){
        solicitarNochesHotel();
        solicitarVuelo();
        solicitarAlquilerCoche();
        mostrarResumenYCostoTotal();
        confirmacionDeGastos(); 
        costeTotal = 0;
    }
}

iniciarCalculo(); */
