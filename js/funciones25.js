const colores = [
    { nombre: "Naranja", valor: "#f4a261" },
    { nombre: "Verde", valor: "#2a9d8f" },
    { nombre: "Rojo", valor: "#c74040" },
    { nombre: "Celeste", valor: "#84dcff" },
    { nombre: "Amarillo", valor: "#e9c46a" }
];

let index = 0;

export const obtenerSiguienteColor = () => {
    const color = colores[index];
    index++;
    if (index >= colores.length) index = 0;
    return color;
};

export const cambiarFondo = (color) => {
    document.body.style.backgroundColor = color.valor;
};

export const mostrarEnConsola = (color) => {
    console.log("Color cambiado a:", color.nombre);
};
