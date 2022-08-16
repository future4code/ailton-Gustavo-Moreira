// const listaDeClientes = [
//     { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
//   ]

//   function ordenaClientes (a, b) {
//         if (a.nome < b.nome)
//         return -1;
//         if (a.nome > b.nome)
//          return 1;
//         return 0;
//     }
    
//     listaDeClientes.sort(ordenaClientes);

//   console.log(listaDeClientes.sort(ordenaClientes))

// function ordenaClientes (lista){
//     const nomeCliente = lista.map((cliente) =>{
//         return cliente.nome;
//     })
//     const nomeOrdem = nomeCliente.sort((a, b) => a.localeCompare(b));
//     console.log(nomeOrdem)
// }

// ordenaClientes(listaDeClientes)

function checaRenovacaoRG(anoAtual) {
    let idade = anoAtual
   
     if(idade <= 20 ) {
         return console.log("Passo1")
       
      }else if(idade >= 20 || idade <= 50) {
         return console.log("Passo2")
       
      }else if(idade > 50) {
         return console.log("Passo3")
       
       }else {
           return console.log("erro")
       }
   }

   checaRenovacaoRG(80)