class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }

  changeValue(newValue) {
    this.value = newValue;
  }
}

class LinkedList {
  append(value) {}

  prepend(value) {}
}
