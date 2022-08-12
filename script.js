//NOME 

let nomeAluno = prompt("Por favor, digite o nome do aluno(a):" )

if(nomeAluno.length < 5){
    alert("Nome inválido! Deve conter pelo menos 5 caracteres.")
    nomeAluno=prompt("Digite novamente o nome do aluno:")
}

//MATÉRIA, NOTA E PRESENÇA
let materia1 = prompt("Digite a materia: ");

let nota1 = parseFloat(prompt(`Qual a nota de ${materia1}?`));
if(nota1 < 0 || nota1 > 10){
    alert("Valor inválido! \n Digite um valor de 0 até 10. ")
    nota1 = parseFloat(prompt(`Digite novamente a nota do em ${materia1}:`))
};

let presenca1 = parseFloat(prompt(`Qual a presença em ${materia1}?`));
if(presenca1 < 0 || presenca1 > 10){
    alert("Valor inválido! \n Digite um valor de 0 até 10. ")
    presenca1 = parseFloat(prompt(`Digite novamente a presença em ${materia1}:`))
};


let materia2 = prompt("Digite a materia: ");

let nota2 = parseFloat(prompt(`Qual a nota de ${materia2}?`));
if(nota2 < 0 || nota2 > 10){
    alert("Valor inválido! \n Digite um valor de 0 até 10. ")
    nota2 = parseFloat(prompt(`Digite novamente a nota do em ${materia2}:`))
};

let presenca2 = parseFloat(prompt(`Qual a presença em ${materia2}?`));
if(presenca2 < 0 || presenca2 > 10){
    alert("Valor inválido! \n Digite um valor de 0 até 10. ")
    presenca2 = parseFloat(prompt(`Digite novamente a presença em ${materia2}:`))
};


let materia3 = prompt("Digite a materia: ");

let nota3 = parseFloat(prompt(`Qual a nota de ${materia3}?`));
if(nota3 < 0 || nota3 > 10){
    alert("Valor inválido! \n Digite um valor de 0 até 10. ")
    nota3 = parseFloat(prompt(`Digite novamente a nota do em ${materia3}:`))
};

let presenca3 = parseFloat(prompt(`Qual a presença em ${materia3}?`));
if(presenca3 < 0 || presenca3 > 10){
    alert("Valor inválido! \n Digite um valor de 0 até 10. ")
    presenca3 = parseFloat(prompt(`Digite novamente a presença em ${materia3}:`))
};

//SOMA
let somaNota = (nota1 + nota2 + nota3);
let somaPresenca = ( presenca1 + presenca2 + presenca3);

//MÉDIA
let mediaNota = (somaNota / 3);
let mediaPresença = (somaPresenca / 3);


//MENSAGEM FINAL
if (mediaNota >= 8 && mediaPresença >= 6 ){
    alert(`A nota do aluno(a) ${nomeAluno} é de ${mediaNota} e sua presença de ${mediaPresença} : Aluno aprovado!`)
}
else {
    alert(`A nota do aluno(a) ${nomeAluno} é de ${mediaNota} e sua presença de ${mediaPresença} : Aluno reprovado!`)
}
