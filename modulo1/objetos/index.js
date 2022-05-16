/*Exercícios de interpretação de código
1 a. Matheus Nachtergaele
     Virginia Cavendish
    canal: Canal Brasil, horario: 19h
2 a. Juca 3 SRD
     Juba 3 SRD
     Jubo 3 SRD
  b. clona
3 a. falso. indefinido
  b. deu indefinido, pois não tem nenhum valor atribuido 
*/

// Exercícios de escrita de código
// Exercício 1 

const pessoa = {
    nome: "Gustavo",
    apelido: ["Mario", "Mariots", "Mariotinho"],
}

function imprime (obj){
    const pessoa1 = obj;
    const novaPessoa = {
        ...obj,
        apelido: ["Mariotis", "Mariotones", "Maroto"]
        }
    console.log (`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelido[0]}, ${pessoa1.apelido[1]} ou ${pessoa1.apelido[2]}`); 
    console.log (`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelido[0]}, ${novaPessoa.apelido[1]} ou ${novaPessoa.apelido[2]}`)
    }
    imprime (pessoa)
  
// Exercício 2

const objeto1 = {
  nome: "João",
  idade: 20,
  profissão: "Estudante",
}

const objeto2 = {
  nome: "Antonio",
  idade: 40,
  profissão: "Professor",
}

function info (Obj) {
  const array = Obj;

  console.log (`["${array.nome}", ${array.nome.length}, ${array.idade}, "${array.profissão}", ${array.profissão.length}]`);
  return array
}
info (objeto1)
info (objeto2)

// Exercício 3
const carrinho = [];

const fruta1 = {
  nome: "Banana",
  dispo: true,
}
const fruta2 ={
  nome: "Morango",
  dispo: true,
}
const fruta3 ={
  nome: "Maça",
  dispo: true,
}

function adicionar (fruta) {
  carrinho.push(fruta);
  return carrinho
}

adicionar (fruta1)
adicionar (fruta2)
adicionar (fruta3)
console.log(carrinho)

// Desafios
//Desafio 1
const nome = prompt ("Digite seu nome");
const idade = prompt ("Digite sua idade");
const prof = prompt ("Digite sua profissão");

function dados (nome, idade, prof){
  const dadoPessoal = {

  }
  dadoPessoal.nome = nome
  dadoPessoal.idade = idade
  dadoPessoal.profissão = prof
  console.log (dadoPessoal)
  
}
dados (nome, idade, prof)

// Desafio 2

const filme1 ={
  ano_lancamento: 2022,
  nome: "A volta dos que não foram"
}
const filme2 ={
  ano_lancamento: 2022,
  nome: "A ida dos que nao partiram"
}
function infoFilme (filme1, filme2){
  const resultadoAntes = filme1.ano_lancamento < filme2.ano_lancamento
  const resultadoIgual = filme1.ano_lancamento === filme2.ano_lancamento

  console.log (`O ${filme1.nome} foi lançado antes do ${filme2.nome}?`, resultadoAntes)
  console.log (`O ${filme1.nome} foi lançado no mesmo ano do ${filme2.nome}?`, resultadoIgual)  
  return infoFilme
}
infoFilme(filme1, filme2)

// Desafio 3

function controleEstoque (fruta) {
  fruta.dispo = !fruta.dispo
}
controleEstoque (fruta1)
controleEstoque (fruta2)
