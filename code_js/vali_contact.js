// Expresiones regulares para validación
const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexCelular = /^\d{7,14}$/;
const regexComentario = /^[a-zA-Z0-9\s.,?!¡¿(){}[\]_-]+$/;

// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const comentario = document.getElementById("comentario").value;

    const esNombreValido = regexNombre.test(nombre);
    const esEmailValido = regexEmail.test(email);
    const esCelularValido = regexCelular.test(celular);
    const esComentarioValido = regexComentario.test(comentario);

    const btnEnviar = document.getElementById("btn_enviar");

    // Validar y mostrar/ocultar mensajes de error
    if (esNombreValido) ocultarError("error-nombre");
    else mostrarError("error-nombre");

    if (esEmailValido) ocultarError("error-email");
    else mostrarError("error-email");

    if (esCelularValido) ocultarError("error-celular");
    else mostrarError("error-celular");

    if (esComentarioValido) ocultarError("error-comentario");
    else mostrarError("error-comentario");

    // Habilitar o deshabilitar el botón de envío según la validación
    if (esNombreValido && esEmailValido && esCelularValido && esComentarioValido) {
        // btnEnviar.disabled = "";
        btnEnviar.classList.remove("disabled-button");
        btnEnviar.classList.add("active-button");
        
        document.getElementById('btnEnviarWSP').setAttribute("disabled", "true");
        document.getElementById("btnEnviarWSP").style.pointerEvents = "auto";
        return true;

    } else {
        // btnEnviar.removeAttribute("disabled"); 
        btnEnviar.classList.remove("active-button");
        btnEnviar.classList.add("disabled-button");

        document.getElementById("btnEnviarWSP").removeAttribute("disabled");
        document.getElementById("btnEnviarWSP").style.pointerEvents = "none";
        return false;
    }

}

// Función para mostrar un mensaje de error
function mostrarError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "block";
}

// Función para ocultar un mensaje de error
function ocultarError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "none";
}

// Eventos para los campos de entrada

const inputElementNombre = document.getElementById("nombre");
inputElementNombre.addEventListener("input", validarFormulario);

const inputElementEmail = document.getElementById("email");
inputElementEmail.addEventListener("input", validarFormulario);

const inputElementCel = document.getElementById("celular");
inputElementCel.addEventListener("input", validarFormulario);

const inputElementComentario = document.getElementById("comentario");
inputElementComentario.addEventListener("input", validarFormulario);




// const inputElementNombre = document.getElementById("nombre");
// inputElementNombre.addEventListener("input", () => {
//     const valor = inputElementNombre.value;
//     const esValido = regexNombre.test(valor);
//     if (esValido) ocultarError("error-nombre");
//     else mostrarError("error-nombre");
// });

// const inputElementEmail = document.getElementById("email");
// inputElementEmail.addEventListener("input", () => {
//     const valor = inputElementEmail.value;
//     const esValido = regexEmail.test(valor);
//     if (esValido) ocultarError("error-email");
//     else mostrarError("error-email");
// });

// const inputElementCel = document.getElementById("celular");
// inputElementCel.addEventListener("input", () => {
//     const valor = inputElementCel.value;
//     const esValido = regexCelular.test(valor);
//     if (esValido) ocultarError("error-celular");
//     else mostrarError("error-celular");
// });