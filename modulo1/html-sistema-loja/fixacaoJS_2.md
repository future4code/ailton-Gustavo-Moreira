```
function calculaPrecoTotal(quantidade) {
  let maca = 0;
  if (quantidade > 11){
    maca = 1;
  } else {
    maca = 1.30
  }
  let total = maca * quantidade
  return total
}
```