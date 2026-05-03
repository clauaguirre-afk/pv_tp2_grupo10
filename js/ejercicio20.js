
import { formatearDatos } from './funciones20.js';

const boton = document.querySelector('#btnMostrar');

boton.addEventListener('click', () => {

    const nombreVal = document.querySelector('#nombre').value;
    const apellidoVal = document.querySelector('#apellido').value;
    const luVal = document.querySelector('#lu').value;

    const mensaje = formatearDatos(nombreVal, apellidoVal, luVal);

    alert(mensaje);
});