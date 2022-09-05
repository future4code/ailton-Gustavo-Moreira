//1 - a) Ele é o responsável para iniciar a classe. Tem que passar parametros. 
//b) Foi impresso 1 vez. 
//c) Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this)


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[];
  
    constructor( cpf: string, name: string, age: number, transactions: Transaction[]) {
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions
    }
  
  }


  class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date  = date
    }
  }

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
        console.log("Chamando o construtor da classe Bank")
        this.accounts = accounts;
    }
  
  }

  const transaction1 = new Transaction ("Mercado", 20, "05-09-2022")
  const transaction2 = new Transaction ("Farmacia", 10, "04-09-2022")
  const transaction3 = new Transaction ("Mercado", 40, "05-09-2022")
  const transaction4 = new Transaction ("Farmacia", 30, "04-09-2022")
  
  const transactionUser1:Transaction[] = [transaction1, transaction2]
  const transactionUser2:Transaction[] = [transaction3, transaction4]

  const user1 = new UserAccount ("352.632.778-57", "Gustavo", 34, transactionUser1)
  const user2 = new UserAccount ("334.008.008-99", "Vivian", 37, transactionUser2)
  
  const accountsLabenu: UserAccount[] = [user1, user2]

  console.log(accountsLabenu)