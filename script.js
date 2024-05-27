//Seleccionar elementos del DOM

//Selecciona el primer elemento de la etiqueta button
const boton = document.querySelector('button');

//Seleccionar el parrafo
const color = document.getElementById('color');

//Funcion que maneje el proceso de generar un color hexadecimal aleatorio
function generarColorHexAleatorio() {
    //16 posibles opciones para los digitos
    let digitos = '0123456789ABCDEF';

    //Definir variable para guardar el color que vamos generando
    let color = '#';


    //Generamos un indice aleatorio
    for (let i = 0; i < 6; i++){
        //Como queremos entero ocupamos floor
        //Ponemos 16 porque son 16 caracteres
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio]
    }
    return color;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    //Actualizar texto
    color.textContent = colorAleatorio;
    //Actualizar color de fondo
    document.body.style.backgroundColor = colorAleatorio;
})