/* Exercícios de interpretação de código
1   a. luping onde o i vai rodar 5 vezes. será impresso o numero 5
2   a. será impresso todos os numero do 19 em diante.
    b. sim é possivel, basta tirar o < 18  no comando if
3   a.  *
        **
        ***
        ****
*/

// Exercícios de escrita de código
// // Exercício 1

// let quantidadeBicho = +prompt("Quantos bichinhos de estimação voce tem?")
// let quantidadeAtual = 0
// let nomesBicho = []
// if (quantidadeBicho === 0){
//     console.log("Que pena! Você pode adotar um pet!")
//     } else {
//         while (quantidadeAtual < quantidadeBicho){
//             let nome = prompt ("Nome de um deles, sem repitir")
//             nomesBicho.push(nome)
//             quantidadeAtual++
//         }
// console.log(nomesBicho)
//         }

// Exercício 2

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//A 

// for (let numero of array) {
//     console.log(numero)
//   }

//B

//   for (let numero of array) {
//     console.log(numero)
//   }

//C

// let mensagemPar = [];

// for (let numero of array){
//     if (numero % 2 === 0){
//     mensagemPar.push(numero);
// }
// }
// console.log (mensagemPar)

//D

// for (let i = 0; i < array.length; i++){
//    const elemento = array[i]
//    console.log ('O elemento do índex ' + i + ' é ' + elemento)
// }

//E

// let maior = -Infinity
// let menor = Infinity
// for (let i = 0; i < array.length; i++){
//     const elemento = array[i]
//     if (elemento > maior) {
//         maior = elemento
//     } else if (elemento < menor) {
//         menor = elemento
// }
// }
  
// console.log('O maior número é ' + maior + ' e o menor é ' + menor)


// Desafios
// Desafio 1

// let numeroEscolhido = +prompt ("Escolha um número")
// alert ("Vamos brincar :)")
// let numeroChutado = +prompt ("Chute um numero")
// let tentativas = 1

// while (numeroChutado != numeroEscolhido) {
//     if (numeroChutado < numeroEscolhido){
//         alert ("O numero chutado foi " +numeroChutado)
//         console.log ("O numero chutado foi " +numeroChutado)
//         alert ("Errou. O número escolhido é maior")
//         console.log ("Errou. O número escolhido é maior")
//         tentativas++
//         numeroChutado = +prompt ("Chute um numero")
//     } else {
//         alert ("O numero chutado foi " +numeroChutado)
//         console.log ("O numero chutado foi " +numeroChutado)
//         alert ("Errou. O número escolhido é menor")
//         console.log ("Errou. O número escolhido é menor")
//         tentativas++
//         numeroChutado = +prompt ("Chute um numero")
//     }
// }
// alert ("Acertou Mizeravi!")
// console.log ("Acertou Mizeravi!")
// console.log ("O número de tentativas foi: " + tentativas)

// Desafio 2


let random = +Math.floor(Math.random() * 100 + 1)

console.log (random)

alert ("Vamos brincar :)")
let numeroChutado = +prompt ("Chute um numero")
let tentativas = 1

while (numeroChutado != random) {
    if (numeroChutado < random){
        alert ("O numero chutado foi " +numeroChutado)
        console.log ("O numero chutado foi " +numeroChutado)
        alert ("Errou. O número escolhido é maior")
        console.log ("Errou. O número escolhido é maior")
        tentativas++
        numeroChutado = +prompt ("Chute um numero")
    } else {
        alert ("O numero chutado foi " +numeroChutado)
        console.log ("O numero chutado foi " +numeroChutado)
        alert ("Errou. O número escolhido é menor")
        console.log ("Errou. O número escolhido é menor")
        tentativas++
        numeroChutado = +prompt ("Chute um numero")
    }
}


alert ("Acertou Mizeravi!")
console.log ("Acertou Mizeravi!")
console.log ("O número de tentativas foi: " + tentativas)