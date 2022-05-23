// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b){
            if (a > b) return 1;
            if (a < b) return -1;
            return 0
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 let numPar = []
 for (let i =0; i < array.length; i++){
     if (array[i] % 2 === 0) {
        numPar.push(array[i])
     }
 } 
 return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numPar2 = []
    for (let i =0; i < array.length; i++){
        if (array[i] % 2 === 0) {
           numPar2.push(array[i]*array[i])
        }
    } 
    return numPar2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const max = Math.max(...array);
    return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const obj = {}
    let Numeromaior  = -Infinity
    let Numeromenor = Infinity
        if (num1 > num2){
            Numeromaior  = num1
            Numeromenor = num2
        } else {
            Numeromaior  = num2
            Numeromenor = num1
        }
    let maiorDivisivel = Boolean (Numeromaior % Numeromenor === 0)
    
    let subtraia = Numeromaior - Numeromenor
    obj.maiorNumero = Numeromaior
    obj.maiorDivisivelPorMenor = maiorDivisivel
    obj.diferenca = subtraia

    return obj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const PrimeiroPar= []

    for(let i = 0; PrimeiroPar.length < n; i++) {
        if(i % 2 === 0) {
            PrimeiroPar.push(i)
        }
    }
    return PrimeiroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let triangulo
    if (ladoA === ladoB && ladoA === ladoC){
        triangulo = 'Equilátero'
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        triangulo = 'Escaleno'
    } else {
        triangulo = 'Isósceles'
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
let novaArray = []
const menor = Math.min(...array);
const maior = Math.max(...array);
let segMaior = -Infinity
    for (let i =0; i < array.length; i++){
    if (array[i] > segMaior && array[i] < maior){
        segMaior = array[i]
    }
}
let segMenor = Infinity
    for (let i =0; i < array.length; i++){
    if (array[i] < segMenor && array[i] > menor){
        segMenor = array[i]
    }
}  
novaArray.push(segMaior);
novaArray.push(segMenor);

return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
       ...pessoa,
       nome: 'ANÔNIMO'
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}