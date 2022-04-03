/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico
para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

Eu posso fazer essa funcionalidade utilizando if...else

*/
function gabarito(nota){
  let notaFinal = ''

  switch(nota){
    case nota>=90 && nota === 100:
      console.log('A')
      break
    case nota>=80 && nota <= 89:
      console.log('B')
      break
    case nota >=70 && nota <= 79:
      console.log('C')
      break
    case nota >=60 && nota <= 69:
      console.log('D')
      break
    case nota < 60 && nota <= 0:
      console.log('F')
      break
    default:
      console.log('Nota ão atribuída para o aluno nesse período!')  
  }
  return notaFinal;
}
gabarito()
