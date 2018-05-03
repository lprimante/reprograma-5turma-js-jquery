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

//----------------------------------------------------------Outra forma de resolver 

// var todosOsAlunos = document.querySelectorAll(".aluno");
// // console.log(todosOsAlunos);


// for (var i = 0; i < todosOsAlunos.length; i++) {
//     // console.log(todosOsAlunos[i]);

//     var aluno = todosOsAlunos[i];
//     var tdPrimeiraNota = aluno.querySelector(".info-notaum");
//     console.log(tdPrimeiraNota);
//     var primeiraNota = tdPrimeiraNota.textContent;
//     var tdSegundaNota = aluno.querySelector(".info-notadois");
//     var segundaNota = tdSegundaNota.textContent;
//     var mediaFinal = aluno.querySelector(".info-media");

//     var notaEhValida = true;

//     if (primeiraNota < 0 || primeiraNota > 10) {
//         notaEhValida = false;
//         mediaFinal.textContent = "Nota Inválida";
//     }

//     if (notaEhValida) {
//         var mediaCalculada =
//             // ((parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2);
//             calcularMedia(primeiraNota, segundaNota);
//         if (mediaCalculada < 5) {
//             // aluno.style.backgroundColor = "red";
//             aluno.classList.add("abaixo-da-media");
//         }
//         mediaFinal.textContent = mediaCalculada.toFixed(2);
//     }

// }

// function calcularMedia(provaUm, provaDois) {
//     var mediaDentroDaFuncao = 0;
//     mediaDentroDaFuncao = ((parseFloat(provaUm) + parseFloat(provaDois)) / 2);
//     return mediaDentroDaFuncao;
// }

