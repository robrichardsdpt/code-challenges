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
    expect(newNode.data === 6);
    expect(newNode.next === null);
  });

  test("Adding ListNode to .next does what you would expect", () => {
    let addedNode = new ListNode(5);
    newNode.next = addedNode;
    expect(newNode.next === addedNode);
    expect(newNode.next.data === addedNode.data);
    expect(addedNode.next === null);
  });
});

describe("testing LinkedList", () => {
  test("LinkedList findTail function finds tail of linkedList", () => {
    expect(newList.findTail().data === 0);
    expect(reversedList.findTail().data === 3);
  });

  test("LinkedList findTail function finds tail of linkedList with next value of null", () => {
    expect(newList.findTail().next === null);
    expect(reversedList.findTail().next === null);
  });

  test("LinkedList findTail function finds tail of empty linkedList", () => {
    expect(emptyList.findTail() === null);
  });

  test("LinkedList findTail function finds tail of linkedList with only one node (head)", () => {
    const node = listWithOneItem.head;
    expect(listWithOneItem.findTail() === node);
  });

  test("LinkedList reverse function sets up data the way it should for emptyList", () => {
    emptyList.reverseTheList();
    expect(emptyList.head === null);
  });

  test("LinkedList reverse function sets up data the way it should for list with one item", () => {
    const previousHead = listWithOneItem.head;
    listWithOneItem.reverseTheList();
    expect(listWithOneItem.head === previousHead);
  });

  test("LinkedList reverse function sets up data the way it should", () => {
    newList.reverseTheList();
    expect(newList.findTail().data === reversedList.head.data);
    expect(newList.head.data === 0);
    expect(reversedList.findTail().data === newList.head.data);
  });

  test("LinkedList push function number and returns appropriate value", () => {
    newList.push(-1);
    expect(newList.size === 5);
    expect(newList.findTail().data === -1);
  });

  test("LinkedList unshift function number and returns appropriate value", () => {
    newList.unshift(9);
    expect(newList.size === 6);
    expect(newList.head.data === 9);
  });
});
