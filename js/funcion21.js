export function cambiar(){
    let pais = document.getElementById("Paises");
    let capital = document.getElementById("Capitales");

    capital.selectedIndex = pais.selectedIndex;

    console.log( "Pais Seleccionado: "+ pais.value);
    console.log("Capital Seleccionado: "+ capital.value);
}