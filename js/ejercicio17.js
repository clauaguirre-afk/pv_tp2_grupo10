const contarLetraA = (texto) => {
    let contador = 0;
    const textoMinuscula = texto.toLowerCase();

    for (let i = 0; i < textoMinuscula.length; i++) {
        if (textoMinuscula[i] === 'a') {
            contador++;
        }
    }
    return contador;
};


const frase = "Estamos cursando Programación Visual en la Facultad de Ingenieria UNJU";
const cantidad = contarLetraA(frase);

console.log(`En la frase: "${frase}", la letra 'a' aparece ${cantidad} veces.`);