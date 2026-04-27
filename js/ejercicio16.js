const sumarRango = (inicio, fin) => {
    let suma = 0;
    
    if (inicio <= fin) {
        for (let i = inicio; i <= fin; i++) {
            suma += i;
        }
        return suma;
    } else {
        return "El número inicial debe ser menor o igual al final.";
    }
};

const n1 = 10;
const n2 = 8;
console.log(`La suma del rango ${n1} a ${n2} es: ${sumarRango(n1, n2)}`);