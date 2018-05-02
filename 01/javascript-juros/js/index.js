var todosOsValores = document.querySelectorAll(".juros");
var dinheiro = [];
var taxa = [];
var tempo = [];
var resultado = [];


for (var i = 0; i < todosOsValores.length; i++ ) {
    console.log(todosOsValores[i]);
    var valorJuros = todosOsValores[i];
    dinheiro[i] = valorJuros.querySelector(".info-dinheiro").textContent;
    taxa[i] = valorJuros.querySelector(".info-taxa").textContent;
    tempo[i] = valorJuros.querySelector(".info-tempo").textContent;
    resultado[i] = valorJuros.querySelector(".info-resultado");

    var resultadoJuros = calcularJuros(dinheiro[i], taxa[i], tempo[i]); 
    resultado[i].textContent = resultadoJuros;
}

function calcularJuros(dinheiro, taxa, tempo) {
    var calculo = dinheiro * (1 + (taxa/100 * tempo));
    return calculo.toFixed(2);
}