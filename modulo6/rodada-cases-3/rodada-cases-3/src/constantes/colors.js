export const megaSenaColor = "#6BEFA3"
export const quinaColor = "#8666EF"
export const lotoFacilColor = "#DD7AC6"
export const lotoManiaColor = "#FFAB64"
export const timeManiaColor = "#5AAD7D"
export const diaDeSorteColor = "#BFAF83"

export const backgroundColor = "#454545"

export const whiteColor = "#FFFFFF"
export const blackColor = "#000000"

export const Color = (type) => {

    switch (type) {
      case "mega-sena":
          return "#6BEFA3"
      case "quina":
          return "#8666EF"
      case "lotofácil":
          return "#DD7AC6"
      case "lotomania":
          return "#FFAB64"
      case "timemania":
          return "#5AAD7D"
      case "dia de sorte":
          return "BFAF83"
      
      default:
          return "#6BEFA3";
    }
}