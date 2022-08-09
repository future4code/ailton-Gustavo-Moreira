 
const nome = process.argv[2]
const idade = Number(process.argv[3])

if (nome && idade) {
    return (
console.log ("\033[34m Olá,", nome, "! Você tem", idade, "\033[34m anos. Em sete anos você terá", idade+7)
)
}else{
    console.log ("\033[31m Esperava 2 parâmetros só recebi um")
}