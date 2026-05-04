import { obtenerSiguienteColor, cambiarFondo, mostrarEnConsola } from "./funciones25.js";

const boton = document.getElementById("btnColor");

boton.addEventListener("click", () => {
    const color = obtenerSiguienteColor();
    cambiarFondo(color);
    mostrarEnConsola(color);
});
