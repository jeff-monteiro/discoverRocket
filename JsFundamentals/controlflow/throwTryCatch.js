// Throw

// Try... Catch

function sayMyName(name = ''){
  if(name === ''){
    throw new Error('Preenchimento obrigatório')
  }
  console.log('Depois do erro')
}
try {
  sayMyName()
} catch(e) {
  console.log(e)
}