enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filmes = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
    }

    function categoriaFilme (nomeFilme: string, ano: number, generoFilme: GENERO, ponto?: number) {
       if(ponto !== undefined){
        const filme: filmes = {
            nome: nomeFilme,
            anoLancamento: ano,
            genero: generoFilme,
            pontuacao: ponto
        };
        console.log(filme)
       }else {
        const filme: filmes = {
            nome: nomeFilme,
            anoLancamento: ano,
            genero: generoFilme,
        };
        console.log(filme)
       }
    }
    
    categoriaFilme("Duna", 2021, GENERO.ACAO)
    