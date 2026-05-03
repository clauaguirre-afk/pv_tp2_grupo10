const input =document.getElementById("texto");
const resultado =document.getElementById("resultado");
input.addEventListener("input", function(){
    resultado.textContent =input.value;
    if(input.value.length > 20){
        resultado.style.backgroundColor ="lightblue";
    } else{
        resultado.style.backgroundColor ="white";
    }
});