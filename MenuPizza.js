function invoice() {
    
var regExNombre = /^[A-Z]/;
if(nombre.value.match(regExNombre))
    {
    return true;
    }
else{
    alert("El nombre debe empezar por una mayuscula");
    return false;
    }
}

// Para selecionar tamaño y precio basado en tamaño.
var tamaño = document.querySelector('input[name="tamaño"]:checked').value; console.log("tamaño="+tamaño);
var tamañoPrecio = 0;
if (tamaño === "Regular") {
    tamañoPrecio = 10;
};
if (tamaño === "Mediana") {
    tamañoPrecio = 15;
};
if (tamaño === "Familiar") {
    tamañoPrecio = 20;
};
if (tamaño === "Extra-Grande") {
    tamañoPrecio = 25;
}; console.log("tamañoPrecio="+tamañoPrecio);

// Para selecionar salso a coste 0.
var salsa = document.querySelector('input[name="salsa"]:checked').value; console.log("salsa="+salsa);

// Para selecionar tipos de carne, estableciendo un precio de 2 por cada una selecionada.
var carnePrecio = 0
var carne = document.getElementsByName("carne");
var carneSelect = [];
var carneDisplay = "";
for (var i = 0; i < carne.length; i++) {
    if (carne[i].checked) {
        carneSelect.push(carne[i].value);
    };		
}; console.log("carneSelect="+carneSelect);
if (carneSelect.length === 1) {
    carneDisplay = carneSelect[0];
} else if (carneSelect.length > 1) {
    for (i=0; i < carneSelect.length; i++) {
            carneDisplay += carneSelect[i];
            if (i < (carneSelect.length-1)) {
                carneDisplay += ", ";
            };
    };
};		
carnePrecio = carneSelect.length * 2; console.log("carnePrecio="+carnePrecio);
if (carneSelect.length === 0) {
    carneDisplay = "Sin carne";
}

// Para selecionar otro ingredientes, estableciendo un precio de 2 por cada una selecionada.
var otrosPrecio = 0;
var otros = document.getElementsByName("otros");
var otrosSelect = [];
var otrosDisplay = "";
for (var i = 0; i<otros.length; i++) {
    if (otros[i].checked) {
        otrosSelect.push(otros[i].value);
    };
}; console.log("otrosSelect="+otrosSelect);
if (otrosSelect.length > 4) {
    otrosPrice = 2;
}; console.log("otrosPrecio="+otrosPrecio);
if (otrosSelect.length === 1) {
    otrosDisplay = otrosSelect[0];
} else if (otrosSelect.length > 1) {
    for (i=0; i < otrosSelect.length; i++) {
        otrosDisplay += otrosSelect[i];
        if (i < (otrosSelect.length - 1)) {
            otrosDisplay += ", ";
        };
    };
};
if (otrosSelect.length === 0) {
    otrosDisplay = "Sin otros ingredientes";
}

// Para calcular precio total.
var totalPrice = (otrosPrecio + carnePrecio + tamañoPrecio); console.log("totalPrice="+totalPrice);

// Para meter los valores de la factura en la tabla.
$("#tamaño").html(tamaño+" Pizza");
$("#tamañoprecio").html(" €"+tamañoPrecio+".00");

$("#salsa").html(salsa+" Salsa");
$("#salsaprecio").html("+0.00");

$("#carne").html(carneDisplay);
$("#carneprecio").html("+"+carnePrecio+".00");

$("#otros").html(otrosDisplay);
$("#otrosprecio").html("+"+otrosPrecio+".00");

$("#totalprice").html(" €"+totalPrice+".00");

};

    
