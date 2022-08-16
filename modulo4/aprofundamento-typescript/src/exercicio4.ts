type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b - node ./build/exercicio4.js ou npm run  exercicio4.js 
// c - o processo seria diferente pelo caminho. seria node ./src/exercicio4.js
// d - "tsc && node ./build/exercicio1.js tsc && node ./build/exercicio2.js tsc && node ./build/exercicio3.js"