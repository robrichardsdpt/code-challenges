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
}

class Dog extends Animal {
  constructor(eats: string, name: string) {
    super(eats, name);
  }
}

const dog = new Dog("meat", "harry");
console.log(dog.eats);
console.log(dog.eat());
const fido = new Dog("carrots", "fido");
console.log(fido.eat());
