var todosOsAlunos = document.querySelectorAll(".aluno");
var tdPrimeiraNota = [];
var tdSegundaNota = [];
var mediaFinal = [];
var mediaCalculada = [];
var aluno

for (var i = 0; i < todosOsAlunos.length; i++ ) {
    aluno = todosOsAlunos[i];
    tdPrimeiraNota[i] = todosOsAlunos[i].querySelector(".info-notaum").textContent;
    tdSegundaNota[i] = todosOsAlunos[i].querySelector(".info-notadois").textContent;
    mediaFinal[i] = todosOsAlunos[i].querySelector(".info-media");

    var nota = mediaFinal[i];

    var retorno = validaNota(tdPrimeiraNota[i], tdSegundaNota[i], nota);
    
    if (retorno) {
        mediaCalculada[i] = calcularMedia(tdPrimeiraNota[i], tdSegundaNota[i], aluno);
        mediaFinal[i].textContent = mediaCalculada[i];
    } else {
        todosOsAlunos[i].classList.add("nota-invalida");
    }    
}

function calcularMedia(provaUm, provaDois, color) {
    var mediaDentroDaFuncao = 0;
    mediaDentroDaFuncao = ((parseFloat(provaUm) + parseFloat(provaDois)) / 2);

    if (mediaDentroDaFuncao < 5) {
        color.classList.add("abaixo-da-media");
    }
    return mediaDentroDaFuncao.toFixed(2);
}

function validaNota(notaUm, notaDois, local) {
    var notaEhValida = true;

    if (notaUm < 0 || notaUm > 10) {
        notaEhValida = false;
        local.textContent = "Nota Inválida"
    } else if (notaDois < 0 || notaDois > 10){
        notaEhValida = false;
        local.textContent = "Nota Inválida"
    }
    console.log(local);
    return notaEhValida;
}

