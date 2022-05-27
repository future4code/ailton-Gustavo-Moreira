/* Exercícios de interpretação de código
1 - a. 10
       50
    b. Não iria imprimir
2 - a. A função transforma o texto em caixa baixa e se ela contem a palavra Cenoura. 
    b. i - eu gosto de cenoura true
    b. ii - cenoura é bom pra vista true
    b. iii - cenouras crescem na terra true
*/

//Exercícios de escrita de código
//Exercicio 1 a

// function imprimir () {
//     const texto = "Eu sou Gustavo, tenho 34 anos, moro em Curitiba e sou estudante."
//     console.log(texto)
// }
// imprimir()

//Exercicio 1 b

// const nome = "Gustavo"
// let idade = 34
// const cidade = "Curitiba"
// const profissao = "Estudante"

// function imprimir(){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`) 

// }
// imprimir()

//Exercicio 2 a

// let numero1 = 10
// let numero2 = 5

// function numero (num1, num2) {
//     let soma = num1 + num2
//     return soma
// }
 
// let resultado = numero (numero1, numero2)
// console.log (resultado)

//Exercicio 2 b

// let numero1 = 200
// let numero2 = 300

// function verifica (num1, num2){
//     console.log (num1>=num2)
// }

// verifica(numero1, numero2)

//Exercicio 2 c

// let n = 45584

// function verifica (num1){
//     let total = num1 % 2 === 0 ? 'Par' : 'Impar';
//     return total
// }
// let resultado = verifica (n)
// console.log (resultado)

//Exercicio 2 d

//  const msg = "Nois que voa"

//  function formatar (testo){
//      testo = testo.toUpperCase()
//      return testo
     
//  }
//   const letraMaiuscula = formatar(msg)
//   const tamanho = formatar(msg).length
//  console.log (`${tamanho} ${letraMaiuscula}`)

 //Exercicio 3 

//  let numero1 = Number (prompt("Digite um numero"));
//  let numero2 = Number (prompt("Digite outro numero"));

//  function soma (num1,num2){
//     let soma = num1 + num2
//     return soma
//  }
//  function subtração (num1,num2){
//     let subtração = num1 - num2
//     return subtração
//  }
//  function multiplicação (num1,num2){
//     let multiplicação = num1 * num2
//     return multiplicação
//  }
//  function divisão (num1,num2){
//     let divisão = num1 / num2
//     return divisão
//  }  
//  let adição = soma(numero1, numero2)
//  let menos = subtração(numero1, numero2)
//  let vezes = multiplicação(numero1, numero2)
//  let dividir = divisão(numero1, numero2)

// console.log(`Números inseridos: ${numero1} e ${numero2}`)
// console.log (`Soma: ${adição}`)
// console.log (`Diferença: ${menos}`)
// console.log (`Multiplicação: ${vezes}`)
// console.log (`Divisão: ${dividir}`)
 
//Desafio 1 

// let imprimir = texto => console.log(texto)

// let numero1 = 15
// let numero2 = 20

// let soma = (num1,num2) => num1 + num2

// imprimir (soma (numero1, numero2))

//Desafio 2

// let catetoMaior = Number (prompt("Cateto Maior"))
// let catetoMenor = Number (prompt("Cateto Menor"))

// function cateto1 (num1){
//      num1 = num1 * num1
//     return num1
// }
// let catetoA = cateto1(catetoMaior)

// function cateto2 (num2){
//      num2 = num2 * num2
//     return num2
// }
// let catetoB = cateto2(catetoMenor)

// let hip = Math.sqrt(catetoA + catetoB)

// console.log (hip)

let n = 8

function verifica (num1){
    let total = num1 % 1 === 0 && num1 % num1 === 0 ? 'Primo' : 'Não é primo';
    return total
}
let resultado = verifica (n)
console.log (resultado)