class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
  findTail() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }
  push(value) {
    let newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return this.size;
    }
    let current = this.findTail();
    current.next = newNode;
    this.size++;
    return this.size;
  }
  pop() {
    if (this.head === null) return this.size;

    if (this.head.next === null) {
      this.size--;
      this.head = null;
      return this.size;
    }

    let previousNode;
    let current = this.head;
    while (current.next !== null) {
      previousNode = current;
      current = current.next;
    }
    previousNode.next = null;
    current = undefined;
    this.size--;
    return this.size;
  }

  unshift(value) {
    let newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this.size;
  }

  shift() {
    if (this.head === null) {
      return this.size;
    }

    if (this.head.next === null) {
      this.head = null;
      this.size--;
      return this.size;
    }
    let previousHead = this.head;
    this.head = this.head.next;
    previousHead = null;
    this.size--;
    return this.size;
  }
  removeFirstValue(value) {
    if (this.head === null) {
      return "nothing to remove";
    }
    if (this.head.data === value) {
      return this.shift();
    }
    let previousNode;
    let current = this.head;

    while (current) {
      if (current.data === value) {
        previousNode.next = current.next;
        current = null;
        this.size--;
        return `removed node with ${value} and reduced list to ${this.size} nodes`;
      }
      previousNode = current;
      current = current.next;
    }
    return "No values found or removed";
  }

  traverseToIndex(number) {
    if (number === 0) {
      return this.head;
    }
    if (number > this.size - 1) {
      return `number is larger than the indexes of list:  Please enter value between 0 and ${
        this.size - 1
      }`;
    }

    let current = this.head;
    let itemCounter = 0;
    while (itemCounter !== number) {
      current = current.next;
      itemCounter++;
    }
    return current;
  }

  reverseTheList() {
    if (this.head === null || this.head.next === null) {
      return this;
    }
    const previousHeadNode = this.head;
    while (previousHeadNode.next !== null) {
      let currentNode = previousHeadNode.next;
      previousHeadNode.next = currentNode.next;
      this.unshift(currentNode.data);
      currentNode = null;
      this.size--;
    }
    return this;
  }
}

let list = new LinkedList();
list.push(3);
list.push(2);
list.push(1);
list.push(0);
