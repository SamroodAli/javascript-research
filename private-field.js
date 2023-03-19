class Person {
  #age; // adding a # makes it private. this is only accessible in this class
  // and not accessible in the inheriting classes

  constructor(age) {
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
}

const person = new Person(10);

// console.log(person.#age); // will throw an error
console.log(person.age); // this will work

class Child extends Person {
  constructor(age) {
    super(age);
    // console.log(this.#age); // won't work as it is a private field in the parent
  }
}

const child = new Child(20);

console.log(child.age);
