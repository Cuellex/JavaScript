/* Clases, variables, arrays */

const btnSearch = document.querySelector("#btnSearch"),
    inputIngreso = document.querySelector("#ingreso"),
    contenedor = document.querySelector("#contenedor");
const inputUser = document.querySelector("#user");

class añadirLibro{
    constructor(titulo, autor, genero, disponibilidad){
        this.titulo         = titulo;
        this.autor          = autor;
        this.genero         = genero;
        this.disponibilidad = disponibilidad;
        this.img            = img;
    }
}

let estanteria = [
    {id: 1, titulo:"El Señor de los Anillos",   autor:"J.R.R. Tolkien",             genero:"Fantasía",  disponibilidad:"No disponible",  img:"el-señor-de-los-anillos.webp"},
    {id: 2, titulo:"El Código da Vinci",        autor:"Dan Brown",                  genero:"Misterio",  disponibilidad:"Disponible",     img:"el-codigo-da-vinci.webp"},
    {id: 3, titulo:"Crepusculo",                autor:"Stephenie Meyer",            genero:"Romantica", disponibilidad:"Disponible",     img:"crepusculo.webp"},
    {id: 4, titulo:"El principito",             autor:"Antonie de Saint-Exupéry",   genero:"Poésia",    disponibilidad:"No disponible",  img:"el-principito.webp"},
    {id: 5, titulo:"Harry Potter",              autor:"J.K. Rowling",               genero:"Fantasía",  disponibilidad:"No disponible",  img:"harry-potter.webp"},
    {id: 6, titulo:"1984",                      autor:"George Orwell",              genero:"Distopía",  disponibilidad:"Disponible",     img:"1984.webp"}
]


/* Funciones */

//Función de busqueda
document.getElementById("botonBuscar").addEventListener("click", function(){
    let filtro = document.getElementById("busqueda").value.toLocaleLowerCase();
    let libros = document.getElementsByClassName("card");

    for (let i = 0; i < libros.length; i++) {
        let titulo = libros[i].querySelector("h3").innerText.toLowerCase();
        if (titulo.includes(filtro)) {
            libros[i].style.display = "block"; // Muestra las tarjetas que coincidan
        } else {
            libros[i].style.display = "none"; // Oculta las tarjetas que no coincidan
        }
    }
})

//función de retención con clave (storage)
document.addEventListener("DOMContentLoaded", function() {
    let estadoGuardado = localStorage.getItem("estadoLibros");
    if (estadoGuardado) {
        document.getElementById("contenedor").innerHTML = estadoGuardado;
    }

    // Agregar evento de clic al botón de búsqueda
    document.getElementById("botonBuscar").addEventListener("click", function() {
        let filtro = document.getElementById("busqueda").value.toLowerCase();
        let libros = document.getElementsByClassName("card");

        for (let i = 0; i < libros.length; i++) {
            let titulo = libros[i].querySelector("h3").innerText.toLowerCase();
            if (titulo.includes(filtro)) {
                libros[i].style.display = "block"; // Mostrar libros que coincidan
            } else {
                libros[i].style.display = "none"; // Ocultar libros que no coincidan
            }
        }

        // Guardar el estado actual en el almacenamiento local
        localStorage.setItem("estadoLibros", document.getElementById("contenedor").innerHTML);
    });
});

//creador de libros/cartas
 function crearCartas(arr){ /* Añadir una breve descripción o sinopsis del libro */
    contenedor.innerHTML = "";
    let html;   
    for (const el of arr) {     
        html = `<div class="card">
                    <hr>
                    <div><img src="./img/${el.img}" alt="${el.titulo}"></div>
                    <div>
                        <h3>${el.titulo}</h3>
                        <p>Genero: ${el.genero}</p>
                        <p>Estado: ${el.disponibilidad}</p>
                        <button class="btn-sucess card-act" id="${el.id}">Seleccionar</button>
                    </div>
                </div>`;
        contenedor.innerHTML = contenedor.innerHTML + html;
    }
}

crearCartas(estanteria)

/* ------- COSAS A CORREGIR -------

    • En el storage hay que cabiar lo que se guarda. Tiene que guardarse el div del libro que se elige.

    • Cambiar el nombre del botón "Agregar" por "Seleccionar", esto para poder poner una funcion de agregar libro de ser necesario.

    • Agregarle una funcion a Agregar/Seleccionar.
*/

/*
function buscarLibroPorTitulo(titulo){
    for (let i = 0; i < estanteria.length; i++) {
        if(estanteria[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            return estanteria[i];
        }
    }
    return null;
}
    
function filtrarLibrosPorGenero(genero) {
    let librosFiltrados = [];
    for (let i = 0; i < estanteria.length; i++) {
        if(estanteria[i].genero.toLowerCase() === genero.toLowerCase()) {
            librosFiltrados.push(estanteria[i]);
        }
    }
    return librosFiltrados;
}

function filtrarLibrosPorAutor(autor) {
    let librosEncontrados = [];
    for (let i = 0; i < estanteria.length; i++) {
        if (estanteria[i].autor.toLowerCase() === autor.toLowerCase()) {
            librosEncontrados.push(estanteria[i]);
        }
    }
    return librosEncontrados;
}*/

/*
    function eleccion() {   Punto a revisar: al introduccir una opcion no valida aparecen todos los mensajes pero el bucle del switch case se termina sin poder poner otra vez los valores
    let opcion = prompt("Elija la forma en que quiera buscar su libro:\n Buscar por titulo (1) \n Buscar por genero (2) \n Buscar por autor (3) \n Buscar por disponibilidad (4)");
    switch(opcion) {
        case "1": 
            let libroBuscado = buscarLibroPorTitulo(prompt("Escriba el nombre del libro:"));
            console.log("Libros encontrados:", libroBuscado);
        break;
        
        case "2":
            let librosPorGenero = filtrarLibrosPorGenero(prompt("Escriba el genero del libro:"));
            console.log("Libros encontrados", librosPorGenero);
        break;

        case "3":
            let librosPorAutor = filtrarLibrosPorAutor(prompt("Escriba el nombre del autor del libro:"));
            console.log("Libros encontrados:", librosPorAutor);
        break;

        case "4":
            let librosDisponibles = prompt("Escriba lo que busca (Disponible/No disponible)");
            const buscado = estanteria.filter((el) =>{
                return el.alquilado.toLowerCase() === librosDisponibles.toLowerCase()}
            )
            console.log(buscado)

        break;

        default:
            console.log("Opción invalida.")
            seguir = confirm("Por favor elegir una de las opciones indicadas.");
        break;

    }        
}*/

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
