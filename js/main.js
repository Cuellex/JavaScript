let costeTotal =  0;

function solicitarNochesHotel() {
    let noches = prompt("Ingresa el número de noches (3-7):");
    if (!isNaN(noches)) {
        switch(noches) {
            case "3":
                alert("El costo por 3 noches es $USD350");
                costeTotal += 200;
                break;

            case "4":
                alert("El costo por 4 noches es $USD350");
                costeTotal += 250;
                break;

            case "5":
                alert("El costo por 5 noches es $USD350");
                costeTotal += 300;
                break;

            case "6":
                alert("El costo por 6 noches es $USD350");
                costeTotal += 350;
                break;

            case "7":
                alert("El costo por 7 noches es $USD350");
                costeTotal += 400;
                break;

            default:
                alert("Número de noches inválido.");
                break;
        }
    } else {
        alert("Por favor, introduce un número válido.");
    }
}

function solicitarVuelo() {
    let ciudad = prompt("Ingresa una ciudad (Madrid, Paris, Roma, Moscu, Bs As):");
    switch(ciudad) {
        case "Madrid": // Buscar como corregir si alguien escribe con errores de ortografia
            alert("El costo del vuelo a Madrid es $USD110");
            costeTotal += 130;
            break;

        case "Paris":
            alert("El costo del vuelo a Madrid es $USD140");
            costeTotal += 130;
            break;

        case "Roma":
            alert("El costo del vuelo a Madrid es $USD100");
            costeTotal += 130;
            break;

        case "Moscu":
            alert("El costo del vuelo a Madrid es $USD125");
            costeTotal += 130;
            break;

        case "Bs As":
            alert("El costo del vuelo a Madrid es $USD90");
            costeTotal += 130;
            break;

        default:
            alert("Ciudad no disponible para vuelo.");
            break;
    }
}

function solicitarAlquilerCoche() {
    let dias = prompt("Ingresa los días de alquiler del coche (3-7):");
    if (!isNaN(dias)) {
        switch(dias) {
            case "3":
                alert("El costo del alquiler del coche por 5 días es $USD200");
                costeTotal +=  400;
                break;

            case "4":
                alert("El costo del alquiler del coche por 5 días es $USD225");
                costeTotal +=  400;
                break;

            case "5":
                alert("El costo del alquiler del coche por 5 días es $USD250");
                costeTotal +=  400;
                break;
            
            case "6":
                alert("El costo del alquiler del coche por 5 días es $USD275");
                costeTotal +=  400;
                break;

            case "7":
                alert("El costo del alquiler del coche por 5 días es $USD300");
                costeTotal +=  400;
                break;

            default:
                alert("Días de alquiler inválidos.");
                break;
        }
    } else {
        alert("Por favor, introduce un número válido.");
    }
}

function mostrarResumenYCostoTotal() {
    alert(`Tu presupuesto final es de: $${costeTotal}`);
}

function iniciarCalculo() {
    solicitarNochesHotel();
    solicitarVuelo();
    solicitarAlquilerCoche();
    mostrarResumenYCostoTotal();
}

iniciarCalculo();