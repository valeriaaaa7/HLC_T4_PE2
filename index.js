function examen(){
    document.getElementById('botonMostrar').addEventListener('click', () => {
        })
}

function eliminarNota(){
    botonEliminar.classList.remove('oculto');
}

const botonEliminar=document.createElement('button');
botonEliminar.classList.add('oculto');
botonEliminar.classList.add('estiloBoton');
botonEliminar.textContent='Eliminar todas las notas';
botonEliminar.addEventListener('click', eliminarNota);
document.body.appendChild(botonEliminar);