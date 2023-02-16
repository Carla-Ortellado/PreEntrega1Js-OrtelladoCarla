let estadia
let alojamiento2Pax = 30000
let alojamiento4a6Pax = 40000
let alojamientoMas6pax = 60000
solicitarNombre()




function solicitarNombre(){
    let nombreIngresado = prompt ("ingrese su nombre");
    alert(
        "Hola " + nombreIngresado +   "selecciona tu estadia de acuerdo a tus preferencias"
    )
}

function seleccionDeEstadias(){
    estadia = prompt("tu estadia \n 1: alojamiento para 2pax \n 2: alojamiento de 4 a 6pax \n 3: alojamiento mas de 6pax")
    if(estadia === "1"){
        alert("seleccionaste un alojamiento para 2pax")
    }   else if (estadia === "2"){
        alert("seleccionaste un alojamiento para 4 a 6pax")
    }   else if (estadia === "3"){
        alert("seleccionaste un alojamiento para mas de 6pax")
    }
    opcion = prompt("elija una de las siguientes opciones \n 2: total de estadia \n 3: finalizar")
}

function confirmarReserva() {
    if(estadia === "1"){
        alert("seleccionaste un alojamiento para 2pax por 7 noches por un precio total de " + alojamiento2Pax * 7)
    }   else if (estadia === "2"){
        alert("seleccionaste un alojamiento para 4 a 6pax por 7 noches por un precio total de " + alojamiento4a6Pax * 7)
    }   else if (estadia === "3"){
        alert("seleccionaste un alojamiento para mas de 6pax por 7 noches por un precio total de " + alojamientoMas6pax * 7)
    }    
    
}


let opcion = prompt("seleccione segun su preferencia: \n 1: elegir estadia \n 2: realizar reserva \n 3: finalizar")


while( opcion !=="3"){
    if (opcion==="1"){
        seleccionDeEstadias()  
    }
    if (opcion==="2"){
        confirmarReserva()
        opcion ="3"  
    }
}

alert("Tu reserva quedo confirmada, que disfrutes de tu estadia!")