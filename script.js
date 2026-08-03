function corrigirQuiz(){

let pontos = 0;

const respostas = {

q1:"b",
q2:"b",
q3:"a",
q4:"b",
q5:"b",
q6:"a",
q7:"b"

};

for(let pergunta in respostas){

let resposta = document.querySelector('input[name="'+pergunta+'"]:checked');

if(resposta){

if(resposta.value == respostas[pergunta]){

pontos++;

}

}

}

let mensagem="";

if(pontos==7){

mensagem="Parabéns! Você acertou todas as perguntas!";

}else if(pontos>=5){

mensagem="Muito bem! Você conhece bastante sobre inclusão.";

}else if(pontos>=3){

mensagem="Bom resultado! Continue aprendendo sobre respeito às diferenças.";

}else{

mensagem="Continue estudando sobre inclusão e respeito às diferenças.";

}

document.getElementById("resultado").innerHTML=
"Você acertou "+pontos+" de 7 perguntas.<br>"+mensagem;

}