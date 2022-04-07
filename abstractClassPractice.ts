abstract class Animal {
  eats: string = "";
  name: string = "";
  constructor(eats: string, name: string) {
    this.eats = eats;
    this.name = name;
  }
  eat() {
    console.log(
      `your dog, ${this.name}, just ate the ${this.eats} they were fed`
    );
  }
  sayHi() {
    console.log(
      `You said hi to ${this.name}, and ${
        this instanceof Dog ? "their tail wagged" : "they purred"
      }`
    );
  }
}

class Dog extends Animal {
  constructor(eats: string, name: string) {
    super(eats, name);
  }
}

class Cat extends Animal {
  constructor(eats: string, name: string) {
    super(eats, name);
  }
}

const dog = new Dog("meat", "harry");
console.log(dog.eats);
console.log(dog.eat());
const fido = new Dog("carrots", "fido");
console.log(fido.eat());
console.log(fido.sayHi());
const cat = new Cat("fish", "garfield");
console.log(cat.eat());
console.log(cat.sayHi());
