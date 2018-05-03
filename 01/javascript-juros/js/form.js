var valorJuros = document.querySelector("#adicionar-juros");
valorJuros.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var dinheiro = form.dinheiro.value;
    var taxa = form.taxa.value;
    var tempo = form.tempo.value;


    console.log(form, dinheiro, taxa, tempo);

    var formTr = document.createElement("tr");
    var dinheiroTd = document.createElement("td");
    var taxaTd = document.createElement("td");
    var tempoTd = document.createElement("td");
    

    dinheiroTd.textContent = dinheiro;
    taxaTd.textContent = taxa;
    tempoTd.textContent = tempo;
    
    var realizarConta = calcularJuros(dinheiro, taxa, tempo);
    var contaTd = document.createElement("td");
    contaTd.textContent = realizarConta;

    formTr.appendChild(dinheiroTd);
    formTr.appendChild(taxaTd);
    formTr.appendChild(tempoTd);
    formTr.appendChild(contaTd);

    var tabela = document.querySelector("#tabela-juros");
    tabela.appendChild(formTr);

});

var limpar = document.querySelector("#limpar-form");
limpar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    form.reset();
}); 