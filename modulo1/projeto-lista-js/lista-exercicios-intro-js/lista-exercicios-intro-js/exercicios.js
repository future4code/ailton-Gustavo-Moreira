// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number (prompt ("Digite a altura de um retangulo"))
  const largura = Number (prompt ("Digite a largura de um retangulo"))
  let area = altura * largura

  console.log (area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number (prompt ("Qual é o ano atual?"))
  const anoNascimento = Number (prompt ("Qual é o seu ano de nascimento?"))
  let idade = anoAtual - anoNascimento

  console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  calculaIMC = peso/(altura*altura)
  return calculaIMC

  console.log (calculaIMC())
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("Qual é seu nome?")
  const idade = prompt ("Qual é sua idade?")
  const email = prompt ("Qual é seu email?")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt ("Primeira cor favorita")
  const cor2 = prompt ("Segunda cor favorita")
  const cor3 = prompt ("Terceira cor favorita")
  const corfavorita = [cor1, cor2, cor3]
console.log (corfavorita)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  calculaIngressosEspetaculo = custo/valorIngresso
  return calculaIngressosEspetaculo

  console.log (calculaIngressosEspetaculo())
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  checaStringsMesmoTamanho = string1.length === string2.length
  return checaStringsMesmoTamanho

  console.log (checaStringsMesmoTamanho())
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    array = array[0]
    return array
  console.log (retornaPrimeiroElemento())
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  array = array[array.length -1]
  return array
console.log (retornaUltimoElemento())
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  const valorDaUltimaPosicao = array[array.length -1]
  array[array.length -1] = array[0]
  array[0] = valorDaUltimaPosicao
  return array
  console.log (trocaPrimeiroEUltimo)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}