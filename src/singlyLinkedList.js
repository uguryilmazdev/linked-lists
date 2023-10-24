class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  createNode(value) {
    return {
      value: value,
      next: null,
    }
  }

  // Add value after tail
  addTail(value) {
    // create a new node
    const newNode = this.createNode(value);

    // if there isn't any element
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // add this node after tail
      this.tail = newNode; // update current tail
    }
    this.size++;
    return newNode;
  }

  // Add value before head
  addHead(value) {
    // create a new node
    const newNode = this.createNode(value);

    // if there isn't any element
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // assign new node's next
      this.head = newNode; // update current head
    }
    this.size++;
    return newNode;
  }

  // Add value at spesific index
  addValue(value, index) {
    // index must not exceed the size
    if (index >= this.size) {
      throw new Error("Index is out of bounds")
    }

    // if index = 0, just add a new head
    if (index === 0) return this.addHead(value);

    // create a new node
    const newNode = this.createNode(value);

    // if a valid index
    let previousNode = null;
    let currentNode = this.head;

    // find index node
    for (let i = 0; i < index; i++) {
      previousNode =currentNode;
      currentNode =currentNode.next;
    }

    newNode.next = currentNode;  // insert newNode  before current one
    previousNode.next = newNode; // reassign previous node's next

    this.size++;

    return newNode;
  }

  // Remove tail
  removeTail() {
    // if there is a tail
    if (this.tail) {
      const tailNode = this.tail;

      // search for the node before tail
      let current = this.head;

      while (current.next != tailNode) {
        current = current.next;
      }

      const beforeTail = current; // the node before tail
      this.tail = beforeTail;    // update the tail
      this.tail.next = null;    // delete the old tail

      this.size--;

      return tailNode;
    }
    return undefined;
  }

  // Remove head
  removeHead() {

    if (this.head) {
      const oldHead = this.head;
      this.head = this.head.next;
      this.size--;
      return oldHead
    }
    return undefined
  }

  // Remove value at spesific index
  removeIndex(index) {
    // index must not exceed the size
    if (index >= this.size) {
      throw new Error("Index is out of bounds")
    }

    // if index = 0, just remove head
    if (index === 0) return this.removeHead();

    // if a valid index
    let previousNode = null;
    let currentNode = this.head;

    // find index node
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;

    this.size--;

    return currentNode;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  printLength() {
    console.log(this.size);
  }
}

// example
/* const linked = new LinkedList();
linked.addTail("node1");
linked.addTail("node2");
linked.addTail("node4");
linked.printLength();
linked.print();
linked.addValue("node3",2);
linked.addTail("node5");
linked.addHead("node0");
linked.printLength();
linked.print();
linked.removeTail();
linked.printLength();
linked.print();
linked.removeHead();
linked.printLength();
linked.print();
linked.addValue("nodeExtra",2);
linked.printLength();
linked.print();
linked.removeIndex(3);
linked.printLength();
linked.print(); */
