const url = 'http://localhost:4000/clientes';

//Crea un nuevo cliente
export async function nuevoCliente(cliente) {
    console.log(cliente);
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

//Retorna todos los clientes de la DB
export async function clientes() {

    try {
        const consulta = await fetch(url);
        const resultado = await consulta.json();

        return resultado;
    } catch (error) {
        console.log(error);
    }
}

//Devuelve un usuario por su ID
export async function buscarCliente(id) {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');

        const consulta = await fetch(`${url}/${id}`);
        const resultado = await consulta.json();

        return resultado;
    } catch (error) {
        console.log(error);
    }
}

//Edita un cliente
export async function editarCliente(cliente) {

    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.log(error);
    }
}

//Elimina un cliente
export async function eliminarCliente(id) {
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}