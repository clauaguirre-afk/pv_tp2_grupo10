export function actualizarSeleccion(valor) {
    const seleccion = document.getElementById("seleccion");
    seleccion.textContent = "Seleccionado: " + valor;
}

export function mostrarEnConsola(valor) {
    console.log("Seleccionado:", valor);
}