export class HashTable {
  hashList: string[][][] = [[]];

  createHash(key: string): number {
    return key.charCodeAt(0);
  }

  set(key: string, value: string) {
    console.log(this.hashList);
    const hashIndex = this.createHash(key);
    console.log(hashIndex);
    if (this.hashList[hashIndex]) {
      const index = this.hashList[hashIndex].findIndex((item) => {
        return item[0] === key;
      });
      if (index === -1) {
        this.hashList[hashIndex].push([key, value]);
        console.log(`${key} set to ${value}`);
      } else {
        console.log(`value on ${key} already exists`);
      }
    } else {
      this.hashList[hashIndex] = [];
      this.hashList[hashIndex].push([key, value]);
      console.log(`${key} set to ${value}`);
    }
  }

  get(key: string) {
    const hashIndex = this.createHash(key);
    let response = "item not found";
    if (this.hashList[hashIndex]) {
      this.hashList[hashIndex].forEach((item) => {
        if (item[0] === key) response = item[1];
      });
    }
    console.log(response);
  }
}

const newHash = new HashTable();
newHash.set("dog", "woof");
newHash.set("cat", "meow");
newHash.set("cat", "woof");
newHash.set("car", "honk");
newHash.set("bird", "chirp");
newHash.get("bird");
newHash.get("car");
newHash.get("cat");
newHash.get("dog");
newHash.get("aligator");
