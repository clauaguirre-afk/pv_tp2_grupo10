const edades = [10,40,25,45,56,48,50,15];
let suma = 0;
/*si no se va amodificar ningun elemento del arreglo usar const*/
for(let i=0; i < edades.length; i++){
    console.log(`edad en la posicion ${i}: ${edades[i]}`);
    suma += edades[i];
}
const promedio = suma / edades.length;
console.log(`el promedio general de edades es: ${promedio}`)