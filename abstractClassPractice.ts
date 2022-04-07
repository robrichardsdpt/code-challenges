abstract class Animal {
  eats: string = "";
  constructor(eats: string) {
    this.eats = eats;
  }
  eat() {
    console.log(`your dog just ate the ${this.eats} they were fed`);
  }
}

class Dog extends Animal {
  constructor(eats: string) {
    super(eats);
  }
}

const dog = new Dog("meat");
console.log(dog.eats);
console.log(dog.eat());
const fido = new Dog("carrots");
console.log(fido.eat());
