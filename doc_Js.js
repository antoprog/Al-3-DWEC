


function validacion() {
    console.log("validando los datos del formulario...")
    if (texto.value.trim() == "") {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe de estar relleno');
        return false;
    }
    
    // Utilizamos este if para cercionarnos que tiene un "@" dentro de el texto, sino dará error.
   if (email.value.match(/bu{@}/)==null){
        alert('[ERROR]--Email incorrecto');
        return false;
   }
  
   //Realizamos un if donde verificamos que pone numeros del 0 al 9, para mas tarde
   //realizar un if donde pedimos que ponga 9 numeros para garantizar que introduce un numero movil.

  if(tel.value.match(/(0-9)+/)==null){
    alert('[EROOR]--Los caracteres introducidos son erróneos, solo acepta numeros del 0 al 9.')

    }else if (tel.value.match(/\w{9}/)==null){
        alert('[ERROR]--Teléfono incorrecto');
        return false;

    }
}
window.onload = function(){
    formulario.onsubmit = validacion;

}