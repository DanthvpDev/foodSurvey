const inputEdad = document.getElementById('edad');
const btnEnviar = document.getElementById('btnEnviar');
const btnVerificar = document.getElementById('btnVerificar');
let elementosOcultos = document.querySelectorAll('.hidden');
const cuadroError = document.getElementById('cajaError');
const parrafoError = document.getElementById('parrafoError');
const icon = document.getElementById('errorIcon');
const checkboxes = document.querySelectorAll('[type="radio"]');


const EstaRangoEdad = edad => (edad > 14 && edad < 76) ? true : false;

let respuestas = [];
let edadUsuario = 0;


function Limpiar() {
    checkboxes.forEach(element => {
        element.checked = false;
    });
    edad.value = '';
}


btnEnviar.addEventListener('click', ()=> {
    
    cuadroError.classList.remove('bg-red-500');
    cuadroError.classList.remove('bg-[#42c392]');
    icon.classList.remove('fa-triangle-exclamation');
    cuadroError.classList.remove('errorAnimation')


    const respuestasCheckbox = document.querySelectorAll('input:checked');
    const respuestaEncuesta = {
        edad: 0,
        comida: '',
        bebida: '',
        cine: null
    };
    respuestasCheckbox.forEach(element => {
        switch(element.getAttribute('name').toLowerCase()){
            case 'bebida':
                respuestaEncuesta.bebida = element.value;
                break;
            case 'cine':    
                element.value.toLowerCase() == 'si' ? respuestaEncuesta.cine = true : respuestaEncuesta.cine = false;
                break;
            case 'comida':
                respuestaEncuesta.comida = element.value;
                break;
        }
    });
    if(respuestaEncuesta.comida != '' && respuestaEncuesta.bebida != '' && respuestaEncuesta.edad <= 15 && respuestaEncuesta.cine != null && respuestaEncuesta.edad == 0){
        respuestaEncuesta.edad = edadUsuario;
        respuestas.push(respuestaEncuesta);
        Limpiar();

        elementosOcultos.forEach(element => {
            element.classList.toggle('hidden');
            element.classList.toggle('flex');
        });
        btnVerificar.classList.toggle('hidden');
        edadUsuario = inputEdad.value;
        MostrarMensaje('Gracias por participar', 'bg-[#42c392]', 'fa-check');
    }
    else {
        MostrarMensaje('Todos los campos deben estar llenos. Asegúrate de que respondiste todas las preguntas.', 'bg-red-500', 'fa-triangle-exclamation')
    }
})




//? Verificación de edad y manejo de errores al ingresar la edad
btnVerificar.addEventListener('click', () => {
    if (inputEdad.value) {
        if (EstaRangoEdad(inputEdad.value)) {
            elementosOcultos.forEach(element => {
                element.classList.toggle('hidden');
                element.classList.toggle('flex');
            });
            btnVerificar.classList.toggle('hidden');
            edadUsuario = inputEdad.value;
            return;
        }

    }
    
    MostrarMensaje('Lo sentimos, esta encuesta está disponible solo para personas entre 15 y 75 años. Agradecemos tu interés y te invitamos a participar en el futuro cuando cumplas con los requisitos.', 'bg-red-500', 'fa-triangle-exclamation')
})

function MostrarMensaje(mensaje, color, claseIcono) {
    void cuadroError.offsetWidth;
    cuadroError.classList.toggle('block');
    cuadroError.classList.toggle(`${color}`);
    cuadroError.classList.toggle('errorAnimation')
    icon.classList.toggle(`${claseIcono}`);
    parrafoError.textContent = `${mensaje}`;
}