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

/*

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

*/

// Contar quantos caracteres tem uma palavra e quantos digitos tem um Número

/*

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(word(number).length)

*/

// Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula

/*
let number = 435.4433512
console.log(number.toFixed(2).replace(".", ","))
*/

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.

/*
let nome = "Jefferson Monteiro de Moura"
console.log(nome.toUpperCase())

let wordNew = "Programar é muito bacana!"
console.log(wordNew.toLowerCase())

*/

// Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array.
// Depois disso, transforme o array em um texto e onde eram espaços, coloque _.

let phrase = "Programar é top demais"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)




