

export function notificacion(zona, mensaje, tipo) {

    const noti = document.querySelector('.notificacion');
    if (noti) return;

    const div = document.createElement('div');
    div.classList.add('notificacion','mt-5','font-bold','text-center','bg-red-100','border','border-red-400','text-red-700','px-4','py-3','rounded','relative');

    const error = document.createElement('span');

    error.textContent = mensaje;

    div.appendChild(error); 
    zona.appendChild(div); 


    setTimeout(() => {
        div.remove();
    }, 3000);

}