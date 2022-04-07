export class HashTable {
  hashList: [number, string][][] = [[]];

  createIndex(key: string): number {
    const index = Math.floor((key.length * key.charCodeAt(0)) % 7);
    return index;
  }
  hashKey(key: string, hashIndex: number): number {
    let stringCharCode = 0;
    key.split("").forEach((item) => (stringCharCode += item.charCodeAt(0)));
    return Math.floor(
      (stringCharCode ** 2 + key.length * key.charCodeAt(0) * hashIndex) / 7
    );
  }

  set(key: string, value: string) {
    console.log(this.hashList);
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
