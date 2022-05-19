/* Exercícios de interpretação de código
1   a. ele quer saber se o numero é par
    b. numeros pares.
    c. impar
2  a. para mostrar o preço
    b. O preço da Maça é R$ 2.25
    c. o preço da Pêra é R$ 5
3   a.criando uma variavel constante que armazena um numero.
    b. se for maior que 10 Passou no teste, essa mensagem é secreta. se for -10 nao será impresso nada
    c. se tentar colocar uma palavra

*/

// Exercícios de escrita de código
// Exercicio 1

// const idade = Number (prompt ("Qual sua idade?"))
// if (idade >= 18 ){
//     console.log ("Voce pode dirigir")
// } else {
//     console.log ("Voce nao pode dirigir")
// }

// Exercicio 2
// let turno = prompt ("Que turno estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno === "M") {
//     console.log ("Bom Dia!")
// } else if (turno === "V") {
//     console.log ("Boa Tarde!")
// } else if (turno === "N") {
//     console.log ("Boa Noite!")
// } else{
//     console.log ("Turno invalido")
// }

// Exercicio 3
// let turno = prompt ("Que turno estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")
// let mensagem 
// switch (turno) {
//     case "M":
//         mensagem = "Bom Dia!"
//         break;
//     case "V":
//         mensagem = "Boa Tarde!"
//         break;
//     case "N":
//         mensagem = "Boa Noite!"
//         break;

//     default:
//         mensagem = "Turno invalido"
//         break;
// }
// console.log(mensagem)

// Exercicio 4

// const generoFilme = prompt ("Qual o genero do filme?").toLowerCase();
// const valorIngrsso = Number (prompt ("Qual o valor do ingresso?"));
// if (generoFilme === "fantasia" && valorIngrsso < 15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }
// Desafios
// Desafio 1
// const generoFilme = prompt ("Qual o genero do filme?").toLowerCase();
// const valorIngrsso = Number (prompt ("Qual o valor do ingresso?"));
// if (generoFilme === "fantasia" && valorIngrsso < 15){
//     const lanche = prompt ("Qual lanchinho voce vai querer?")
//     console.log("Bom filme!")
//     console.log(`Aproveite seu ${lanche}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// Desafio 2

const nomeCliente = prompt("Qual é o seu nome");
const tipoJogo = prompt("Qual tipo de Jogo? IN (internacional) ou DO (doméstico)");
const etapaJogo = prompt("Qual etapa do jogo? SF(semi-final), DT (decisão de 3 lugar) ou FI  (final)");
const categoria = prompt("1, 2, 3 ou 4?");
const quantidadeIngresso = Number (prompt("Quantos ingressos?"))

const publico = {
    DO: {
        nome: 'Domestico',
        valor: 1,
    },
    IN: {
        nome: 'Internacional',
        valor: 4.10,
    }
}

const ingresso = {
    SF: {
        nome: 'Semi Final',
        '1': 1320,
        '2': 880,
        '3': 550,
        '4': 220,
    },
    DT: {
        nome: 'Disputa 3 colocado',
        '1': 660,
        '2': 440,
        '3': 330,
        '4': 170,
    },
    FI: {
        nome: 'Final',
        '1': 1980,
        '2': 1320,
        '3': 880,
        '4': 330,
    }
}

const  valorDoIngresso = publico[tipoJogo].valor * ingresso[etapaJogo][categoria];
const valorFinalDoIngresso = valorDoIngresso * quantidadeIngresso;

console.log ("Nome:", nomeCliente)
console.log("Tipo do jogo:", publico[tipoJogo].nome)
console.log("Etapa do jogo:", ingresso[etapaJogo].nome)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantidadeIngresso)
// console.log (publico[tipoJogo].valor * ingresso[etapaJogo][categoria] * quantidadeIngresso);

console.log ('---Valores--- ')
console.log('Valor do ingresso:', valorDoIngresso)
console.log('Valor total:', valorFinalDoIngresso)