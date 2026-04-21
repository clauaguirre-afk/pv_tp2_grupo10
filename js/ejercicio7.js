const nombres = ["Micaela", "Juan", "Mauricio", "Ariadna", "José", "Laura", "Luciana"];
let nombreMasLargo = [];

for(let i=0;i<nombres.length;i++){
    console.log(`${i+1}- Nombre ingresado: ${nombres[i]}`);
    if (nombres[i].length > nombreMasLargo.length) {
      nombreMasLargo = nombres[i];
    }
}
console.log(`El nombre más largo es: ${nombreMasLargo}`);
