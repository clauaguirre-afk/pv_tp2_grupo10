
import { cambiarTexto } from "./funciones19.js";

const boton = document.getElementById("btnCambiar");
const parrafo = document.getElementById("texto");

const mensaje = "Estamos en la parte 2 del Trabajo Practico n°2 - Ejercicio 19";

boton.addEventListener("click", () => {
    cambiarTexto(parrafo, mensaje);
    
    console.log(`Acción ejecutada: ${mensaje}`);
});