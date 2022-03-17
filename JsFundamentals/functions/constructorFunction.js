/* 
  Function() constructor

  * expressão const name = new type(arguments);
  * criar um novo objeto
  * this keyword
*/

function Person(name, age, height){
  this.name = name
  this.age = age
  this.height = height
}
const jeff = new Person('Jeff', 27, 1.73)
const kany = new Person('Kany', 21, 1.56)
console.log(jeff)
console.log(kany)