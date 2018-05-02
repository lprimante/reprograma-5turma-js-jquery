var adicionarAluno = document.querySelector("#adicionar-aluno");
adicionarAluno.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var notaum = form.notaum.value;
    var notadois = form.notadois.value;

    var alunoTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var notaumTd = document.createElement("td");
    var notadoisTd = document.createElement("td");
    var mediaTd = document.createElement("td");

    nomeTd.textContent = nome;
    notaumTd.textContent = notaum;
    notadoisTd.textContent = notadois;
    
    var retorno = validaNota(notaum, notadois, mediaTd);
        if (retorno) {
            mediaCalculada = calcularMedia(notaum, notadois, alunoTr);
            mediaTd.textContent = mediaCalculada;
        } else {
            alunoTr.classList.add("nota-invalida");
        } 

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaumTd);
    alunoTr.appendChild(notadoisTd);
    alunoTr.appendChild(mediaTd);

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    form.reset();
});