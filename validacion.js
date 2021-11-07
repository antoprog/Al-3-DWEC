function validacion() {
    console.log("validando los datos del formulario...");


    /*-----------------VALIDAR CAMPOS VACIOS-----------------------------------------------------------------*/
    if (nombre.value.trim()=="") {
        alert('[EROOR]--No ha introducido un nombre...')
        return false;
    }
    if (direccion.value.trim()=="") {
        alert('[EROOR]--No ha introducido una dirección...')
        return false;
    } 
    if (telefono.value.trim()=="") {
        alert('[EROOR]--No ha introducido un telefono...')
        return false;
    } 
    if (email.value.trim()=="") {
        alert('[EROOR]--No ha introducido un email...')
        return false;
    } 

    //comrpobamos que haya algun radio button seleccionado. (tamaño pizza)
    let selected = false;
    let radioTamano = document.getElementsByName("tamano");
    radioTamano.forEach(element => {
        if(element.checked){
            selected=true;
        }
    });
    if (!selected){
        alert('[EROOR]--Tiene que seleccionar un tamaño para la pizza...')
        return false
    }

    //Para la comprobacion de los ingredientes se comprueba que ninguna de las casillas esté seleccionada
    if (!pepperoni.checked && !bacon.checked && !piña.checked && !seisquesos.checked) {
        //Sale un alert en caso de no seleccionar ningun ingrediente
        alert('[ERROR] Debe de elegir un ingrediente');
        return false;
   } 


    /*----------------------VALIDAR CARACTERISTICAS DE LOS CAMPOS-------------------------------------------------*/
    if (nombre.value.trim().match(/^[A-Z]/)==null) {
        alert('[ERROR]--El nombre debe de empezar por mayusculas...')
        return false;
    }

    //Realizamos un if donde verificamos que pone numeros del 0 al 9, para mas tarde
    //realizar un if donde pedimos que ponga 9 numeros para garantizar que introduce un numero movil.
    if(telefono.value.match(/[0-9]+/)==null){
        alert('[ERROR]--Los caracteres introducidos son erróneos, solo acepta numeros del 0 al 9.')
        return false;

    }else if (telefono.value.trim().match(/\w{9}/)==null){
            alert('[ERROR]--Teléfono incorrecto');
            return false;
    }

    // Utilizamos este if con una expresion regular que comprueba que el formato del email sea correcto.
    if (email.value.match( /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)==null){
        alert('[ERROR]--Email incorrecto');
        return false;
    }


    /*----------------------CALCULAR PRECIO-------------------------------------------------*/
    let ingredientesSeleccionados=0;
    document.getElementsByName("ingrediente").forEach(element => {
        if(element.checked){
            ingredientesSeleccionados++;
        }
    }); 
    let precioTotal = parseInt(document.querySelector('input[name="tamano"]:checked').value) + ingredientesSeleccionados;
    
    
    alert("PRECIO TOTAL: " + precioTotal);
    return true;
}

window.onload = function(){
    formulario.onsubmit = validacion;//si la funcion validacion me retorna true, mando la 
                                    //información
}