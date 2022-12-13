class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    // create node
    const newNode = new Node(value);

    // check if has zero element
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // add node after tail
      this.tail = newNode; // update current linkedlist tail
    }
    this.lengt += 1;
    return newNode;
  }

  prepend(value) {
    // create note
    const newNode = new Node(value);

    // check if has zero element
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // update new node's next
      this.head = newNode; // update current linkedlist head
    }
    this.length += 1;
    return newNode;
  }
}
