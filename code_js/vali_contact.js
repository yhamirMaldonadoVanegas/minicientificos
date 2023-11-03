// Expresiones regulares para validación
const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexCelular = /^\d{7,14}$/;

// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;

    const esNombreValido = regexNombre.test(nombre);
    const esEmailValido = regexEmail.test(email);
    const esCelularValido = regexCelular.test(celular);

    const btnEnviar = document.getElementById("btn_enviar");

    // Validar y mostrar/ocultar mensajes de error
    if (esNombreValido) ocultarError("error-nombre");
    else mostrarError("error-nombre");

    if (esEmailValido) ocultarError("error-email");
    else mostrarError("error-email");

    if (esCelularValido) ocultarError("error-celular");
    else mostrarError("error-celular");

    // Habilitar o deshabilitar el botón de envío según la validación
    if (esNombreValido && esEmailValido && esCelularValido && comentario !== "") {
        btnEnviar.disabled = false;  
        return true;
        
    } else {
        btnEnviar.disabled = true; 
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
inputElementNombre.addEventListener("input", () => {
    const valor = inputElementNombre.value;
    const esValido = regexNombre.test(valor);
    if (esValido) ocultarError("error-nombre");
    else mostrarError("error-nombre");
});

const inputElementEmail = document.getElementById("email");
inputElementEmail.addEventListener("input", () => {
    const valor = inputElementEmail.value;
    const esValido = regexEmail.test(valor);
    if (esValido) ocultarError("error-email");
    else mostrarError("error-email");
});

const inputElementCel = document.getElementById("celular");
inputElementCel.addEventListener("input", () => {
    const valor = inputElementCel.value;
    const esValido = regexCelular.test(valor);
    if (esValido) ocultarError("error-celular");
    else mostrarError("error-celular");
});
