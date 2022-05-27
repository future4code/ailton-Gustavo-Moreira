ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
ˋˋˋ
ˋˋˋ
const salarioFixo = 2000
ˋˋˋ
ˋˋˋ
let salarioVariavel = qtdeCarrosVendidos * 100;
ˋˋˋ
ˋˋˋ
let comicao = valorTotalVendas * 0.05;
ˋˋˋ
ˋˋˋ
const salario = salarioFixo + salarioVariavel + comicao
ˋˋˋ
ˋˋˋ
  return salario
ˋˋˋ
ˋˋˋ
}
ˋˋˋ