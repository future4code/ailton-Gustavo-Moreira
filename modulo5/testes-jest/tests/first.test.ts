//Numero par
const numeroPar = (number: any) =>{
    const resto = Number(number%2);
    if(resto === 0){
        return true
    } else {
        return false
    }
}
// Letra Maiuscula
const letraMaiuscula = (string: string) => {
	return string.toUpperCase()
}
//arry de string
const arrayDeString = (string: string)=> {
    return string.split("")
}
//transformar string em number
const transfomaParaNumber = (string:string) =>{
    return Number(string)
}
//quantidade de3 letras
const quantidadeDeLetras = (string:string) =>{
    return string.length
}
//numero aleatório
const numeroAleatorio = () =>{
    const resultado = Math.floor(Math.random() * (10 - 1 +1)) + 1
    return resultado
}
//Media numeros
const mediaDosNumeros = (lista: number[]) =>{
    let TotalSoma = 0
    for(let n of lista){
        TotalSoma +=n
    }
    const media = Math.ceil(TotalSoma/lista.length)
    return media
}
const lista = [10, 25, 9, 8]
//idade atual
const idade = (number: number) =>{
    const anoAtual = new Date().getFullYear()
    const anoNascimento = number
    const idade = anoAtual-anoNascimento
    return idade
}
//formatar data
const formataData = (data: string) =>{
    const novaData = new Date(data)
    const formata = novaData.toLocaleDateString()
    return formata
}
