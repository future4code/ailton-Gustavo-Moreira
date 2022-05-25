/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * Desisto. sao 19h de domingo e ja tentei de tudo. pelo menos o exercicio foi 
 * 
 */

    console.log ("Boas vindas ao jogo de Blackjack!")
         
    const carta = comprarCarta();
    
    let cartaJogador = []
    cartaJogador.push(comprarCarta());
    cartaJogador.push(comprarCarta());
   
    let cartaMaquina = []
    cartaMaquina.push(comprarCarta());
    cartaMaquina.push(comprarCarta());

    function maoPlayer (cartas) {
       maoPlayer = 0
      for (let i = 0; i < cartas.length; i++) {
         maoPlayer += cartas[i].valor;
    }
   }
  maoPlayer (cartaJogador)
  const maoAtualizadaP = maoPlayer

   function maoPC (cartas) {
      maoPC = 0
     for (let i = 0; i < cartas.length; i++) {
        maoPC += cartas[i].valor;
   }
  }
  maoPC (cartaMaquina)
  const maoAtualizadaM = maoPC

  const cartaJogadorTexto = cartaJogador.map ((cartas) =>{
         return   cartas.texto
      })

   const cartaMaquinaTexto = cartaMaquina.map ((cartas) =>{
         return   cartas.texto
       })


   while (confirm('Suas cartas são: ' + cartaJogadorTexto + ' .A carta revelada do computador é ' + cartaMaquina[0].texto + '.' +
    '\n' + 'Deseja comprar mais uma carta?')){
      cartaJogador.push(comprarCarta());  
      
      }
   
   maoPlayer (cartaJogador)
   maoAtualizadaP = maoPlayer

   maoPC (cartaMaquina)
   maoAtualizadaM = maoPC


    console.log('Suas cartas são: ' + cartaJogadorTexto + ' pontuação ' + maoPlayer);
    console.log('As cartas do oponente são: ' + cartaMaquinaTexto + ' pontuação ' + maoPC);
    
    if (maoPlayer > maoPC) {
       console.log("Voce venceu")
    } else if (maoPlayer < maoPC){
       console.log("Voce perdeu")
    } else {
       console.log("Empatou")
    }
  
    