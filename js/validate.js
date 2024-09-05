// // funcion para estas declaraciones -> onsubmit="return validateForm()" novalidate
// function validateForm(){
//     let username=document.getElementById("username").value;
//     let password=document.getElementById("password").value;
//
//     // validar que los campos no esten vacios
//     // la funcion trim quita los espacios
//     if (username.trim()=== "" || password.trim()=== ""){
//         alert("Por favor, rellene todos los campos.")
//         return false;
//     }
//
//     // ejemplo de validacion adiccional: longitud minima de la contraseña
//     if (password.length < 8){
//         alert("La contraseña debe tener al menos 8 caracteres.")
//         return false;
//     }
//
//     // si todas las validaciones pasan, se puede enviar el formulario
//     return true;
// }

// funcion de flecha en javaScript (funcion vacia)
window.onload=() => {
    'use strict'; // se ejectura de forma estricta (activa) evitando posibles errores en javascript

    // selecciona el formulario que tiene la clase .needs-validation y devuelve un array(NodeList)
    let forms=document.querySelectorAll('.needs-validation');
    // recorre el array de todos los elementos del form
    Array.from(forms).forEach(form=> {
        // se crea un evento de escucha cuando se pulsa el boton submit, ejecuta la validacion
        form.addEventListener('submit',event => {

            // evento checkValidity() verifica que el formulario sea correcto (si tenemos required en el formulario, si no, no hace nada)
            if (!form.checkValidity()){
                // para la ejecucion del formulario
                event.preventDefault();
                // no se ejecuta el action
                event.stopPropagation()
            }
            //form.classList.add('was-validated');
        },false) // false significa que se ejecuta esta funcion en el momento que pulsas click
    })
}
