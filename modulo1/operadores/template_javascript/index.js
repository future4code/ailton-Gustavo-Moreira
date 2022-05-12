/* Exercícios de interpretação de código
1 - a false
    b false
    c true
    d boolean

2 - O comando prompt transforma tudo em String, assim não ira somar os números.
 Irá imprimir na ordem em que os números fossem digitados.

3 - transformar as variaveos em números.
let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

*/

//Exercicio 1

// const idade = prompt("Qual é a sua idade?");
// const idadeAmigo = prompt("Qual é a idade do seu melhor(a) amigo(a)");

// console.log ("Sua idade é maior do que a do seu melhor(a) amigo(a)?", idade > idadeAmigo);
// console.log ("A diferença de idade é de:", idade-idadeAmigo); 

//Exercicio 2

// let numeroPar = Number( prompt("Insira um número par"));
// console.log (numeroPar%2);
// c Quando digito um numero par, o resultado sempre será 0
// d Quando digito um numero impar, o resultado sempre será 1

//Exercicio 3

// let idade = Number( prompt("Qual a sua idade?"));
// console.log ("Sua idade em meses é:", idade*12);
// console.log ("Sua idade em dias é:", (idade*12)*30);
// console.log ("Sua idade em horas é:", ((idade*12)*30)*24);

// Exercicio 4

// let numero1 = Number( prompt("Digite um numero"));
// let numero2 = Number( prompt("Digite outro numero"));

// console.log ("O primeiro numero é maior que segundo?", numero1>numero2);
// console.log ("O primeiro numero é igual ao segundo?", numero1===numero2);
// console.log ("O primeiro numero é divisível pelo segundo?", (numero1%numero2)===0);
// console.log ("O segundo numero é divisível pelo primeiro?", (numero2%numero1)===0);

// Desafio 1

// let tempFahrenheit = 77;
// let tempKelvin = (tempFahrenheit - 32)*(5/9) + 273.15;
// console.log (tempKelvin);

// let tempCelsius = 80;
// let tempFahrenheit1 = (tempCelsius)*(9/5) + 32;
// console.log (tempFahrenheit1);

// let tempCelsius1 = 30;
// let tempFahrenheit2 = (tempCelsius1)*(9/5) + 32;
// let tempKelvin1 = (tempFahrenheit2 - 32)*(5/9) + 273.15;

// console.log (tempFahrenheit2, "e", tempKelvin1);

// let tempCelsius2 = Number( prompt("Digite uma temperatura em graus Celsius?"));
// let tempFahrenheit3 = (tempCelsius2)*(9/5) + 32;
// let tempKelvin2 = (tempFahrenheit3 - 32)*(5/9) + 273.15;

// console.log (tempFahrenheit3, "e", tempKelvin2);

// Desafio 2

// let quilowatt = 0.05;
// let consumo = 280;
// let desconto = 0.85;

// console.log (quilowatt*consumo);
// console.log ((quilowatt*consumo)*desconto);

// Desafio 3
//a
// let libra = 20;
// let quilograma = libra/2.2;
// console.log ("20lb equivalem a", quilograma, "kg");
// //b
// let onça = 10.5;
// quilograma = onça/35.2;
// console.log ("10.5 oz equivalem a", quilograma, "kg");
// //c
// let milha = 100;
// let metro = milha/0.00062;
// console.log ("100 milhas equivalem a", metro, "m");
// //d
// let pes = 50
// metro = pes/3.28;
// console.log("50 ft equivalem a", metro, "m");
// //e
// let galao = 103.56;
// let litro = galao/0.264;
// console.log("103.56gal equivalem a", litro, "l");
// //f
// let xicara = 450;
// litro = xicara/4.16667;
// console.log("450 xic equivalem a", litro, "l");
//g
// let pes = Number (prompt ("Digite um comprimento em pés"))
// metro = pes/3.28;
// console.log(pes, "equivalem a", metro, "metros");