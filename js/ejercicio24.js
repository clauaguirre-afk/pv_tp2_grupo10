import { actualizarSeleccion, mostrarEnConsola } from "./funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        actualizarSeleccion(this.value);
        mostrarEnConsola(this.value);
    });
});