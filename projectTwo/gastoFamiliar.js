/* ### Sistema de gastos familiar

Crie um onjeto que possuirá 2 propriedades, ambas
do tipo array:
  * receitas: []
  * despesas: []
  
Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo

*/

let totalFamily = {
  receitas: [ 1000.00, 1700.00, 60.45 ],
  despesas: [ 101.90, 89.10, 100.00, 3000.10 ]
}
function sum(array){
  let total = 0

  for(let value of array){
    total += value
  }
  return total
}
function calculateBalance(){
  const calculateReceitas = sum(totalFamily.receitas)
  const calculateDespesas = sum(totalFamily.despesas)

  const total = calculateReceitas - calculateDespesas

  const itsOk = total >= 0

  let balanceText = 'Negativo'

  if(itsOk){
    balanceText = 'Positivo'
  }
  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

calculateBalance()