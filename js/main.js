/* Clases, variables, arrays */

const btnSearch = document.querySelector("#btnSearch"),
    inputIngreso = document.querySelector("#ingreso"),
    contenedor = document.querySelector("#contenedor");


class añadirLibro{
    constructor(titulo, autor, genero, disponibilidad){
        this.titulo         = titulo;
        this.autor          = autor;
        this.genero         = genero;
        this.disponibilidad = disponibilidad;
        this.img            = img;
    }
}

let estanteriaDB = []

const API_URL = "./db/db.json";

// Funciones 

//Se traen desde una fuente externa o API la información
const getData = async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    estanteriaDB = data
    crearCartas(estanteriaDB)
}
getData(API_URL);

//creador de libros/cartas
function crearCartas(arr){
    contenedor.innerHTML = "";
    let html;   
    for (const el of arr) {     //Revisar como poner uno al lado del otro y desactivar de antemano el "display: block;"
        html = `<div class="card"> 
                    <div class="info">
                        <img class="portada" src="img/${el.img}" alt="${el.titulo}">
                        <h3>${el.titulo}</h3>
                        <p>Genero: ${el.genero}</p>
                        <p>Estado: ${el.disponibilidad}</p>
                        <div class="boton">
                            <button class="btn-sucess card-act" id="${el.id}">Agregar</button>
                        <div>
                    </div>
                </div>`;
        contenedor.innerHTML = contenedor.innerHTML + html;
}

// Evento para los botones (Agregar)    
const botones = document.querySelectorAll('.btn-sucess');
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const idSeleccionado = this.id; // Accede al ID del libro desde el botón
        const libroSeleccionado = estanteriaDB.find(libro => libro.id === parseInt(idSeleccionado));  // Busca el libro en la estantería por su ID
        const tituloDelLibro = libroSeleccionado.titulo;
        console.log('Título del libro:', tituloDelLibro);
        console.log('Botón clickeado con ID:', idSeleccionado);
        const libroParaGuardar = {  // Crea un objeto con el nombre y el ID del libro
            id: idSeleccionado,
            titulo: libroSeleccionado.titulo
        }

        const libroJSON = JSON.stringify(libroParaGuardar); // Convierte el objeto a formato JSON
        localStorage.setItem(`libro_${idSeleccionado}`, libroJSON); // Guarda el JSON en el localStorage
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "¡Agregado con exito!"
        });
        });
    });
}

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

/* 
let estanteria = [
    {id: 1, titulo:"El Señor de los Anillos", autor:"J.R.R. Tolkien", genero:"Fantasía", disponibilidad:"No disponible", img:"el-señor-de-los-anillos.webp"},
    {id: 2, titulo:"El Código da Vinci", autor:"Dan Brown", genero:"Misterio", disponibilidad:"Disponible", img:"el-codigo-da-vinci.webp"},
    {id: 3, titulo:"Crepusculo", autor:"Stephenie Meyer", genero:"Romantica", disponibilidad:"Disponible", img:"crepusculo.webp"},
    {id: 4, titulo:"El principito", autor:"Antonie de Saint-Exupéry", genero:"Poésia", disponibilidad:"No disponible", img:"el-principito.webp"},
    {id: 5, titulo:"Harry Potter y la piedra filosofal", autor:"J.K. Rowling", genero:"Fantasía", disponibilidad:"No disponible", img:"harry-potter.webp"},
    {id: 6, titulo:"1984", autor:"George Orwell", genero:"Distopía", disponibilidad:"Disponible", img:"1984.webp"}
]

fetch()
.then(Response => Response.json())
.then(data => {
    console.log(data);
    estanteriaDB = data
    crearCartas(estanteriaDB)
})

*/