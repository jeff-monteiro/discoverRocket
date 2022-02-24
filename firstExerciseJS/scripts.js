// let weight

// console.log(typeof weight)

/*
let nome = 'Jefferson Monteiro'
let age = 27
let stars = 5.2
let isSubscribed = true
*/



const student = {
  name: 'Jefferson Monteiro',
  age: 27,
  stars: 5.2,
  weight: 61.1,
  isSubscribed: true
}

// console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight} kg.`)


let students = []

students = [
  student
]

const student2 = {
  name: 'Estevão',
  age: 2,
  stars: 9.1,
  weight: 8.6,
  isSubscribed: true
}
students[1] = student2
console.log(students[1])

