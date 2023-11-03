const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const celular = document.querySelector('#celular');
const comentario = document.querySelector('#comentario');
const enviarDatos = document.querySelector('#botonEnviar');

var mensaje;

function enviar(){
    mensaje = `https://api.whatsapp.com/send?phone=51928958214&text= ${"Nombre:" + nombre.value}%20${"Correo:" + email.value}%20${"Celular:" + celular.value}%20${"Comentario:" + comentario.value}`;
    enviarDatos.href = mensaje;
}