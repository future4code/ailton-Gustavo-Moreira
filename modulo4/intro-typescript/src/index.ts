// exercicio 1 

// function checaTriangulo(a: number, b: number, c: number) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// console.log (checaTriangulo(1, 2, 3))

  // exercicio 2

//   function imprimeTresCoresFavoritas(): void{
//     const cor1:string  = "Preto"
//     const cor2:string  = "Vermelho"
//     const cor3:string  = "Amarelo"
//     console.log([cor1, cor2, cor3])
//  }

//  imprimeTresCoresFavoritas()

  // exercicio 3

//   function checaAnoBissexto(ano: number): boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// console.log(checaAnoBissexto(2000))

  // exercicio 4

  // function comparaDoisNumeros(num1: number, num2:number) {
  //   let maiorNumero;
  //   let menorNumero;
  
  //   if (num1 > num2) {
  //     maiorNumero = num1;
  //     menorNumero = num2;
  //   } else {
  //     maiorNumero = num2;
  //     menorNumero = num1;
  //   }
  
  //   const diferenca: number = maiorNumero - menorNumero;
  
  //   return diferenca 
  // }

  // console.log(comparaDoisNumeros(40, 53)) 

    // exercicio 5

    // function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ) {
    //   let idade: number = anoAtual - anoNascimento
    //   let tempoCarteira: number = anoAtual - anoEmissao
     
    //    if(idade <= 20 ) {
    //        return tempoCarteira >= 5 ? console.log("passou dos 5 anos precisa renovar") : console.log("ainda não passou os 5 anos")
         
    //     }else if(idade >= 20 || idade <= 50) {
    //        return tempoCarteira >= 10 ? console.log("passou dos 10 anos precisa renovar") : console.log("ainda não passou os 10 anos")
         
    //     }else if(idade > 50) {
    //        return tempoCarteira >=15 ? console.log("passou dos 15 anos precisa renovar") : console.log("ainda não passou os 15 anos")
         
    //      }else {
    //          return "error"
    //      }
    //  }
     
    //  checaRenovacaoRG(2022, 1988, 2010)

    // exercicio 6

  //   function doisNumeros (num1: number, num2: number) {
  //     let maiorNumero: number;
  //     let menorNumero: number;
    
  //     if (num1 > num2) {
  //       maiorNumero = num1;
  //       menorNumero = num2;
  //     } else {
  //       maiorNumero = num2;
  //       menorNumero = num1;
  //     }
  //     const soma = console.log("A soma é", num1 + num2);
  //     const sub =  console.log("A subtração é", num1 - num2);
  //     const multi= console.log("A multiplicação é", num1 * num2);
  //     console.log("O maior número é", maiorNumero)
  // }
  
  // doisNumeros(3, 2)

  // exercicio 7

//   function dnaTorna (dna: string) {
//   const sangue = dna.toUpperCase()
//   .replaceAll('A', 'U')
//   .replaceAll('T', 'A')
//   .replaceAll('C', 'X')
//   .replaceAll('G', 'C')
//   .replaceAll('X', 'G')
//   return sangue
// }
// console.log( dnaTorna("ATTGCTGCGCATTAACGACGCGTA") )

// exercicio 8

// function reverseString (palavra: string): string {
//   var splitString = palavra.split("")
//   var reverseArray = splitString.reverse()
//   var joinArray = reverseArray.join("")
//   return joinArray
//   }

//   console.log(reverseString("Mundo"))

  // exercicio 9

  // function aprovacao (idade: number, ensino: string, disponibilidade: number, curso: string) : boolean {
  //   const cond1 = idade >= 18 && ensino === "sim" && disponibilidade >= 40 && curso === "integral" || 
  //   idade >= 18 && ensino === "sim" && disponibilidade >= 20 && curso === "noturno";

  //   const cond2 = idade < 18 && ensino === "nao" && disponibilidade < 40 && curso === "integral" ||
  //    idade < 18 && ensino === "nao" && disponibilidade < 20 && curso === "noturno";

  //   return cond1 || cond2
  //   }
  //   console.log( aprovacao(18, "sim", 40, "integral") )

