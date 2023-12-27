class Person {
  name = "Durgesh";

  constructor() {
    this.age = 23;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

// function Person() {
//   this.age = 23;
//   this.name = "Durgesh";
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p));

const course = {
  title: "Javascript the complete guide",
  rating: 5,
};

console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
);

// student.name = "durgesh";

// Object.defineProperty(student, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: false,
// });

console.log(student);

// console.log(course.__proto__);

course.printRating();
