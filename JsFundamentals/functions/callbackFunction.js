// callBack Function

function sayMyMiddleName(middleName){
  console.log('antes de executar a função callback')
  middleName()
  console.log('depois de executar a callback')
}

sayMyMiddleName(
  () => {
    console.log('Jefferson Monteiro de Moura')
  }
)