/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    
*/
 /* That property permit I can reach
 a lot of levels in prototype of the
 Javascript
 */
    
 /*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

// Manipulando Strings e Números

// Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos
// digitos tem um Número

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(word(number).length)

// Transformar um número quebrado com 2 casas decimais e 
// trocar ponto por virgula

let number = 435321897.4433512
console.log(number.toFixed(2))
console.log(number.replace(".", ","))


