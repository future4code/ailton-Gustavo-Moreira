export type conta = {
    nome: string,
    cpf: number,
    nascimento: string,
    saldo: number,
    transacoes?: extrato []
}

export type extrato  = {
    valor: number,
    data: string,
    descrição: string
}

export const usuarios: conta[] = [
{nome: "Gustavo", cpf:12345678911, nascimento: "05/01/1988", saldo: 20, transacoes: [{valor: 10, data: "10/08/2022", descrição: "mercado"}]},
{nome: "João", cpf:12345678912, nascimento: "25/11/1998", saldo: 30, transacoes: [{valor: 5, data: "11/07/2022", descrição: "farmacia"}]},
{nome: "Maria", cpf:22345678912, nascimento: "20/03/2000", saldo: 10, transacoes: [{valor: 7, data: "10/07/2022", descrição: "ifood"}]},
{nome: "Vivian", cpf:22345678812, nascimento: "22/04/1985", saldo: 0, transacoes: []},
{nome: "Henrique", cpf:32345678811, nascimento: "15/08/2002", saldo: 0, transacoes: []}
]


