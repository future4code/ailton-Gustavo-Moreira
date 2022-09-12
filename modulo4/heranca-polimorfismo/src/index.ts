
export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    
    calculateBill(): number;
  }

  const client1: Client = {
    name: "Gustavo",
    registrationNumber: 1,
    consumedEnergy: 2,

    calculateBill: () => {
        return 1.5
    }
  }

//   console.log(client1)
//   console.log(client1.calculateBill())

//-----------------------------------------------------------------------

// export abstract class Place {
//     constructor(protected cep: string) {}
  
//       public getCep(): string {
//           return this.cep;
//     }
//   }

export class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }


  const place1 = new Place("03639-040")

  
