// for...in

let person = {
  name: 'Jefferson',
  age: 26,
  height: 1.73,
  weight: 61.0
}
for(let infos in person){
  console.log(infos)
  console.log(person[infos])
}