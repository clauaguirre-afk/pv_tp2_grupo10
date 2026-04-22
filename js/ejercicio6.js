const edades = [15,45,25,30,20,63,10,55];
let suma = 0;
/*si no se va amodificar ningun elemento del arreglo usar const*/
for(let i=0; i < edades.length; i++){
    console.log(`edad en la posicion ${i}: ${edades[i]}`);
    suma += edades[i];
}
const promedio = suma / edades.length;
console.log(`el promedio general de edades es: ${promedio}`)