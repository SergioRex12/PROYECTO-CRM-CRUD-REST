import { nuevoCliente } from "./API.js";
import { notificacion } from "./funciones.js";


document.addEventListener('DOMContentLoaded',() => {
    document.addEventListener('submit',verificarFormulario);
});


function verificarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre');
    const corrreo = document.querySelector('#email');
    const tlf = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');
    const zonaNoti = document.querySelector('#formulario');
    

    const cliente = {
        nombre: nombre.value,
        email: corrreo.value,
        telefono: tlf.value,
        empresa: empresa.value
    }

    if (!validacion(cliente)) return notificacion(zonaNoti,"Recuerda rellenar todos los campos...","error");

    nuevoCliente(cliente);

}

//Verifica el form
function validacion(obj) {
    return Object.values(obj).every(input => input !== '');
} 