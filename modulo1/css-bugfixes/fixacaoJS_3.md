```   let media = ((ex * 1) + ((p1 * 2) / 2) + ((p2 * 3) / 3)) / 3
    let conceito = ''
    if (media >= 9){
      conceito = 'A'
    } else if (media < 9 && media >= 7.5){
      conceito = 'B'
    } else if (media < 7.5 && media >= 6){
      conceito = 'C'
    } else{
      conceito = 'D'
    }
    return conceito