// a - 
// var minhaString: string = 10. não é possivel atribuir pois a variavel está tipada como string 
// b - 
// podemos tipar ela como var meuNumero: string | number 
// c - 
enum corFavorita  {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azulEscuro",
    VIOLETA = "violeta",
}
type pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: corFavorita
}

const pessoa1: pessoa = {
    nome: "Gustavo",
    idade: 34,
    corFavorita: corFavorita.VERMELHO
}

const pessoa2: pessoa = {
    nome: "Vivian",
    idade: 36,
    corFavorita: corFavorita.AZUL
}

const pessoa3: pessoa = {
    nome: "Henrique",
    idade: 12,
    corFavorita: corFavorita.AMARELO
}

console.log(pessoa3)