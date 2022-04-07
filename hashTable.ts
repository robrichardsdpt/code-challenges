export class HashTable {
  hashList: [number, string][][] = [[]];

  createIndex(key: string): number {
    const index = Math.floor((key.length * key.charCodeAt(0)) % 7);
    return index;
  }
  hashKey(key: string, hashIndex: number): number {
    let stringCharCode = key
      .split("")
      .reduce((total, item) => (total += item.charCodeAt(0)), 0);
    return Math.round(
      (stringCharCode ** 2 + key.length * key.charCodeAt(0) * hashIndex) / 7
    );
  }

  set(key: string, value: string) {
    if (!key) {
      console.log("Please enter valid key");
      return;
    }
    const hashIndex = this.createIndex(key);
    const hashKey = this.hashKey(key, hashIndex);
    if (this.hashList[hashIndex]) {
      const index = this.hashList[hashIndex].findIndex((item) => {
        return item[0] === hashKey;
      });
      if (index === -1) {
        this.hashList[hashIndex].push([hashKey, value]);
        console.log(`${key} set to ${value}`);
      } else {
        console.log(`value on ${key} already exists`);
      }
    } else {
      this.hashList[hashIndex] = [];
      this.hashList[hashIndex].push([hashKey, value]);
      console.log(`${key} set to ${value}`);
    }
  }

  get(key: string) {
    if (!key) {
      console.log("Please enter valid key");
      return;
    }
    console.log(this.hashList);
    const hashIndex = this.createIndex(key);
    const hashKey = this.hashKey(key, hashIndex);
    let response = "item not found";
    if (this.hashList[hashIndex]) {
      this.hashList[hashIndex].forEach((item) => {
        if (item[0] === hashKey) response = item[1];
      });
    }
    console.log(response);
  }

  replace(key: string, value: string) {
    if (!key) {
      console.log("Please enter valid key");
      return;
    }
    console.log(this.hashList);
    const hashIndex = this.createIndex(key);
    const hashKey = this.hashKey(key, hashIndex);
    let response = "item not found";
    if (this.hashList[hashIndex]) {
      const index = this.hashList[hashIndex].findIndex(
        (item) => item[0] === hashKey
      );
      index === -1
        ? this.hashList[hashIndex].push([hashKey, value])
        : (this.hashList[hashIndex][index][1] = value);
      response = `${key} now set to ${value}`;
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
newHash.get("rac");
newHash.get("cat");
newHash.get("dog");
newHash.get("alligator");
newHash.get("");
newHash.set("", "hello");
newHash.set("human", "");
newHash.replace("dog", "bark");
newHash.replace("kid", "hi");
newHash.replace("cat", "purr");
newHash.replace("", "bark");
newHash.replace("dog", "");
