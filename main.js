const inputEdad = document.getElementById('edad');
const btnEnviar = document.getElementById('btnEnviar');
const btnVerificar = document.getElementById('btnVerificar');
let elementosOcultos = document.querySelectorAll('.hidden');
const cuadroError = document.getElementById('cajaError');
const parrafoError = document.getElementById('parrafoError');

const EstaRangoEdad =  edad =>  (edad > 14 && edad < 76) ? true : false;

let respuestas = []
let objetoEncuesta =  {
    edad: 0,
    comida: '',

}

btnVerificar.addEventListener('click', ()=> {
    if(inputEdad.value) {
        if(EstaRangoEdad(inputEdad.value)){
            elementosOcultos.forEach(element => {
                element.classList.toggle('hidden');
                element.classList.toggle('flex');
            });
            btnVerificar.classList.toggle('hidden');
        }
        else {
            console.log('hola')
            cuadroError.classList.toggle('hidden');
            cuadroError.classList.toggle('inline-block');
            parrafoError.textContent = 'Lo sentimos, esta encuesta está disponible solo para personas entre 15 y 75 años. Agradecemos tu interés y te invitamos a participar en el futuro cuando cumplas con los requisitos.'
        }  
    }
    
})