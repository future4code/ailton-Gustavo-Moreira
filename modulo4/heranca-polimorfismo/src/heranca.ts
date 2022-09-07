class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public getIntroduceYourself(): string {
         return `Olá, meu nome é ${this.name}. Bom dia!`
      }

  }

  const user1 = new User("001", "primeiro@gmail.com", "Gustavo", "1234")
//   console.log(user1)
//   console.log(user1.getId())
//   console.log(user1.getEmail())
//   console.log(user1.getName())

  //--------------------------------------------------------------------------------------

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const customer1 = new Customer("001", "primeiro@gmail.com", "Gustavo", "1234", "1234-3216-546")
//   console.log(customer1)
  console.log(customer1.getIntroduceYourself())
