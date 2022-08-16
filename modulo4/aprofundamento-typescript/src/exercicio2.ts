const amostraDeIdades  = {
    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros : number[]) => {
        const numerosOrdenados = numeros.sort(
            (a: number, b: number) => a - b
        )
        let soma = 0
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas: {maior:number, menor:number, media:number} = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
}

console.log(amostraDeIdades)

// a - 
// entrada - numeros ; saída - estatisticas.