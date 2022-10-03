import { buscarCliente, editarCliente } from "./API.js";
import { notificacion } from "./funciones.js";

document.addEventListener('DOMContentLoaded', () => {
    llenarFormulario();
    document.addEventListener('submit',verificarForm);
});

async function llenarFormulario() {

    const cliente = await buscarCliente();

    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#email');
    const tlf = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');
    
    nombre.value = cliente.nombre;
    correo.value = cliente.email;
    tlf.value = cliente.telefono;
    empresa.value = cliente.empresa;

}

async function verificarForm(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#email');
    const tlf = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');
    const zonaNoti = document.querySelector('#formulario');


    const cliente = {
        nombre: nombre.value,
        email: correo.value,
        telefono: tlf.value,
        empresa: empresa.value
    }

    if (!validacion(cliente)) return notificacion(zonaNoti,"Recuerda rellenar todos los campos...","error");

    await editarCliente(cliente);
    window.location.href = 'index.html';

}

//Verifica el form
function validacion(obj) {
    return Object.values(obj).every(input => input !== '');
} 