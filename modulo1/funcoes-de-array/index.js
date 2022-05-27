/* Exercícios de interpretação de código
1   a. vai ser impresso todos os conetudos dentro da array em fomra de array
2   a. cai ser impresso somente os nomes dentro da array
3   a. vai imprimir a array sem o nome da Chijo
*/

// Exercícios de escrita de código
// Exercício 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomePet = pets.map((item,) =>{
//      return item.nome
//  })
//  console.log(nomePet)

// const racaPet = pets.filter((item, index, array) =>{
//      return item.raca === 'Salsicha'
// })
// console.log(racaPet)

// const mensagem = pets.filter((item, index, array) =>{
//     if (item.raca === 'Poodle'){
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
//     }
// })

// // Exercício 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const nomeItem = produtos.map((item, index, array) =>{
//         return item.nome
//  })
// //  console.log(nomeItem)

//  const desconto = produtos.map((item, index, array) =>{
//     return {nome: item.nome,
//             preco: item.preco * 0.95,
//     }
//  })
// //  console.log(desconto)

// const bebidas = produtos.filter((item, index, array) =>{
//     return item.categoria === 'Bebidas'
// })
// // console.log(bebidas)

// const ype = produtos.filter ((item, index, array) =>{
//     return item.nome.includes("Ypê") 
// })
// // console.log(ype)

// const frase = produtos.filter ((item, index, array) =>{
//     return item.nome.includes("Ypê")
// }).map((item) =>{
//     console.log(`Compre ${item.nome} por ${item.preco}`)
// })

// Desafios
// Desafio 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//  const nomeOrdemAlfabetica = pokemons.map((item, index, array)=>{
//     return item.nome
//  })
// //  console.log (nomeOrdemAlfabetica.sort())

const tipoPokemon = pokemons.map ((item, index, array) =>{
    return item.tipo
})
// console.log(tipoPokemon)

const tipoSemRepeticao = new Set ();

tipoPokemon.forEach((item) =>{
    tipoSemRepeticao.add(item);
})
console.log(tipoSemRepeticao)