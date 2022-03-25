import { LinkedList, ListNode } from "../linkedList";

let newNode = new ListNode(6);

let emptyList = new LinkedList();

let listWithOneItem = new LinkedList();
listWithOneItem.push(1);

let newList = new LinkedList();
newList.push(3);
newList.push(2);
newList.push(1);
newList.push(0);

let reversedList = new LinkedList();
reversedList.push(0);
reversedList.push(1);
reversedList.push(2);
reversedList.push(3);

describe("testing ListNode", () => {
  test("ListNode is as expected after creation", () => {
    expect(newNode.data).toBe(6);
    expect(newNode.next).toBe(null);
  });

  test("Adding ListNode to .next does what you would expect", () => {
    let addedNode = new ListNode(5);
    newNode.next = addedNode;
    expect(newNode.next).toBe(addedNode);
    expect(newNode.next.data).toBe(addedNode.data);
    expect(addedNode.next).toBe(null);
  });
});

describe("testing LinkedList", () => {
  test("LinkedList findTail function finds tail of linkedList", () => {
    expect(newList.findTail().data).toBe(0);
    expect(reversedList.findTail().data).toBe(3);
  });

  test("LinkedList findTail function finds tail of linkedList with next value of null", () => {
    expect(newList.findTail().next).toBe(null);
    expect(reversedList.findTail().next).toBe(null);
  });

  test("LinkedList findTail function finds tail of empty linkedList", () => {
    expect(emptyList.findTail()).toBe(null);
  });

  test("LinkedList findTail function finds tail of linkedList with only one node (head)", () => {
    const node = listWithOneItem.head;
    expect(listWithOneItem.findTail()).toBe(node);
  });

  test("LinkedList reverse function sets up data the way it should for emptyList", () => {
    emptyList.reverseTheList();
    expect(emptyList.head).toBe(null);
  });

  test("LinkedList reverse function sets up data the way it should for list with one item", () => {
    const previousHead = listWithOneItem.head;
    listWithOneItem.reverseTheList();
    expect(listWithOneItem.head).toBe(previousHead);
  });

  test("LinkedList reverse function sets up data the way it should", () => {
    newList.reverseTheList();
    expect(newList.findTail().data).toBe(3);
    expect(newList.head.data).toBe(0);
  });

  test("LinkedList push function number and returns appropriate value", () => {
    newList.push(-1);
    expect(newList.size).toBe(5);
    expect(newList.findTail().data).toBe(-1);
  });

  test("LinkedList unshift function number and returns appropriate value", () => {
    newList.unshift(9);
    expect(newList.size).toBe(6);
    expect(newList.head.data).toBe(9);
  });

  test("LinkedList shift function number and returns appropriate value", () => {
    const newHeadForList = newList.head.next.data;
    newList.shift();
    expect(newList.size).toBe(5);
    expect(newList.head.data).toBe(newHeadForList);
  });

  test("LinkedList shift function number on empty list and returns appropriate value", () => {
    emptyList.shift();
    expect(emptyList.size).toBe(0);
    expect(emptyList.head).toBe(null);
  });

  test("LinkedList shift function number on list with one value and returns appropriate value", () => {
    expect(emptyList.size).toBe(0);

    emptyList.push(5);
    expect(emptyList.size).toBe(1);
    emptyList.shift();
    expect(emptyList.size).toBe(0);
    expect(emptyList.head).toBe(null);
  });

  test("removeFirstValue removes the appropriate value", () => {
    expect(newList.removeFirstValue(2)).toBe(
      "removed node with 2 and reduced list to 4 nodes"
    );
    expect(newList.size).toBe(4);
  });

  test("removeFirstValue prompts the user if the empty list is empty", () => {
    expect(emptyList.removeFirstValue(2)).toBe("nothing to remove");
    expect(emptyList.size).toBe(0);
  });

  test("removeFirstValue prompts the user if the value was not found and not removed", () => {
    expect(newList.removeFirstValue(21)).toBe("No values found or removed");
    expect(newList.size).toBe(4);
  });

  test("removeFirstValue prompts the user if the value was the head and removed", () => {
    emptyList.push(5);
    expect(emptyList.removeFirstValue(5)).toBe(
      "removed head node and size is now 0"
    );
    expect(emptyList.size).toBe(0);
  });
});
