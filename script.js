//NOME
let nomeAluno = prompt("Por favor, digite o nome do aluno:")
while(nomeAluno.length < 5){
    alert("Nome inválido! \n Deve conter pelo menos 5 caracteres.")
    nomeAluno = prompt("Digite novamente o nome do aluno:")}

//PRESENÇA
let presenca = parseFloat(prompt("Digite a presença do aluno:"))
while(presenca <= 0 || presenca > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    presenca = parseFloat(prompt("Digite novamente a presença do aluno:"))}

//MATÉRIA E NOTA
let materia1 = prompt("Digite a 1a materia")
let nota1 = parseFloat(prompt("Qual a nota?"))
while(nota1 <= 0 || nota1 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota1 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia2 = prompt("Digite a 2a materia")
let nota2 = parseFloat(prompt("Qual a nota?"))
 while(nota2 <= 0 || nota2 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota2 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia3 = prompt("Digite a 3a materia")
let nota3 = parseFloat(prompt("Qual a nota?"))
 while(nota3 <= 0 || nota3 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota3 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia4 = prompt("Digite a 4a materia")
let nota4 = parseFloat(prompt("Qual a nota?"))
 while(nota4 <= 0 || nota4 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota4 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia5 = prompt("Digite a 5a materia")
let nota5 = parseFloat(prompt("Qual a nota?"))
 while(nota5 <= 0 || nota5 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota5 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia6 = prompt("Digite a 6a materia")
let nota6 = parseFloat(prompt("Qual a nota?"))
 while(nota6 <= 0 || nota6 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota6 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia7 = prompt("Digite a 7a materia")
let nota7 = parseFloat(prompt("Qual a nota?"))
 while(nota7 <= 0 || nota7 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota7 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia8 = prompt("Digite a 8a materia")
let nota8 = parseFloat(prompt("Qual a nota?"))
 while(nota8 <= 0 || nota8 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota8 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia9 = prompt("Digite a 9a materia")
let nota9 = parseFloat(prompt("Qual a nota?"))
 while(nota9 <= 0 || nota9 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota9 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

let materia10 = prompt("Digite a 10a materia")
let nota10 = parseFloat(prompt("Qual a nota?"))
 while(nota10 <= 0 || nota10 > 10){
    alert("Valor inválido! \n Digite um valor maior que 0 até 10. ")
    nota10 = parseFloat(prompt("Digite novamente a nota do aluno:"))
}

//SOMA
let somaNota = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10)

//MÉDIA
let mediaNota = (somaNota / 10)


//MENSAGEM FINAL
if (mediaNota >= 8 && presenca >= 6){
    alert(`A nota do(a) aluno(a) ${nomeAluno} é de ${mediaNota} e sua presença de ${presenca}: Aluno aprovado!`)
}
else{
    alert(`A nota do(a) aluno(a) ${nomeAluno} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`)
}
