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
    

    if (nombre.value.length < 1) return notificacion(zonaNoti, "Nombre icorrecto...", "error");
    if (corrreo.value.length < 1) return notificacion(zonaNoti, "Correo incorrecto...", "error");
    if (tlf.value.length < 1) return notificacion(zonaNoti, "Teléfono incorrecto...", "error");
    if (empresa.value.length < 1) return notificacion(zonaNoti, "Empresa incorrecta...", "error");

    const cliente = {
        nombre: nombre.value,
        correo: corrreo.value,
        tlf: tlf.value,
        empresa: empresa.value
    }

    console.log(cliente);

}