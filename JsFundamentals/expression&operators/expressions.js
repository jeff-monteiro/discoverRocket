/* Expressions & Operators

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

/*

let number = 1

// Operador binário
console.log(number + 1)
// Operador unário
console.log(++number)
// Operador ternário
console.log(false ? 'alo' : 'nothing')

*/

/*

    new

    *left-hand-side expression
    *Criar um novo objeto

*/

let date = new Date('2022-03-26')
console.log(date)

let name = new String('Jeff')
name.surName = 'Monteiro'
let age = new Number(26)
console.log(name, age)
console.log(name.surName)

/*
    Operadores unários
    typeof
    delete

*/

console.log(typeof age)

const person = {
    name: "Moura",
    age: 26,
}
delete person.name
console.log(person)

let totalTwo = 2 + 3 * 5
console.log(totalTwo)
//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

