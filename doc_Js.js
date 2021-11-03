
// añadimos una función email para que el correo lleve una "@" dentro del campo y contestaremos con un mensaje si el correo es erróneo.
function email(){
    var email = document.getElementsById("email").value;
    console.log(email);
    

}
// Añadimos una función al teléfono para que al menos lleve 9 números.
function telefono(){
    var tel = document.getElementsById("tel").value;
    console.log(tel)
}

function validacion() {
    console.log("validando los datos del formulario...")
    if (texto.value.trim() == "") {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe de estar relleno');
        return false;
    }
   


}
window.onload = function(){
    formulario.onsubmit = validacion;

}