const calcularMayor = (numero1, numero2) => {

    if (numero1 === numero2) {
        return `Los números ingresados son iguales: ${numero1}.`;
    } else if (numero1 > numero2) {
        return `El primer número (${numero1}) es mayor que el segundo (${numero2}).`;
    } else {
        return `El segundo número (${numero2}) es mayor que el primero (${numero1}).`;
    }
};

const n1 = 55;
const n2 = 25;
console.log(calcularMayor(n1, n2));