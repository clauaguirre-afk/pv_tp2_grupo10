const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");
input.addEventListener("input", function() {
    resultado.textContent = input.value;
})