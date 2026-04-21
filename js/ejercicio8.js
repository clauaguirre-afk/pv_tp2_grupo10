const notas = [10,5,3,6,7,8,9,4,3,7]
let suma = 0;
let cont = 0;

for (let i=0; i<notas.length; i++){
    console.log(`${i+1}- Nota: ${notas[i]}`);
    suma += notas[i];
}
console.log("APROBADO/DESAPROBADO: ")
for (let i=0; i<notas.length; i++){
    if (notas[i] >= 6){
        console.log(`${notas[i]} (Aprobada)`);
        cont++;
    } else{
        console.log(`${notas[i]} (Desaprobada)`);
    }
}
const promedio = suma / notas.length;
console.log(`El promedio general de notas es: ${promedio}`);
console.log(`La cantidad de notas aprobadas es: ${cont}`);

