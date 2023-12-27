// class Person {
//   name = "Durgesh";

//   constructor() {
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//   }
// }

function Person() {
  this.age = 23;
  this.name = "Durgesh";
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);
console.log(Person);
