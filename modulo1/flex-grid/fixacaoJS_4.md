```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let quantidade = 0;
    for (const numero of arrayDeNumeros){
      if (numero === numeroEscolhido){
        quantidade ++
      }
    }
    if (quantidade === 0){
      return "Número não encontrado"
    }else{
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
}
}
