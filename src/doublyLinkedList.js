class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    createNode(value) {
        return {
            value: value,
            next: null,
            prev: null,
        }
    }

    // Add value before head
    addHead(value) {
        // create a new node
        const node = this.createNode(value);

        // if there isn't any node, make new node head and tail.
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            // change old head prev to new node
            this.head.prev = node;
            // change new node next to old head
            node.next = this.head;
            // assing new head
            this.head = node;
        }
        this.size++;
        return node;
    }

    // Add tail
    addTail(value) {
        // create a new node
        const node = this.createNode(value);

        // if there isn't any node, make new node head and tail.
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            // set old tail's next to new node
            this.tail.next = node;
            // set new node's prev to old tail
            node.prev = this.tail;
            // assing new tail
            this.tail = node;
        }
        this.size++;
        return node;
    }

    // Add node at spesific index
    addValue(value, index) {
        // index must not exceed the size
        if (index >= this.size) {
            throw new Error("Index is out of bounds")
        }

        // if the list is empty, add head
        if (this.size === 0) return this.addHead(value);

        // create new node
        const node = this.createNode(value);

        // if a valid index
        let prevNode = null;
        let currentNode = this.head;

        // find the index node
        for(let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        // change prevNode next to new node
        prevNode.next = node;
        // change new node prev to prevNode
        node.prev = prevNode;
        // change currentNode prev to new node
        currentNode.prev = node;
        // change new node nex to currentNode
        node.next = currentNode;

        this.size++;
        return node;
    }

    // Remove head
    removeHead() {
        // check if head exist
        if (this.head) {
            // get old head
            const oldHead = this.head;
            // update head
            this.head = this.head.next;
            // update new head's prev
            this.head.prev = null;

            this.size--;
            return oldHead;
        }
        return undefined;
    }

    // Remove tail
    removeTail() {
        // check if tail exist
        if (this.tail) {
            const oldTail = this.tail;

            if (this.size === 1) {
                // if there's only one element in the list
                this.head = null;
                this.tail = null;
            } else {
                let current = this.head;

                while (current.next !== this.tail) {
                    current = current.next;
                }

                current.next = null; // remove the old tail
                this.tail = current; // update the new tail
            }
            this.size--;
            return oldTail;
        }
        return undefined;
    }

    // Remove value at the spesific index
    removeIndex(index) {
        // index must not exceed the size
        if (index >= this.size) {
            throw new Error("Index is out of bounds")
        }

        // if index = 0, just remove head
        if (index === 0) return this.removeHead();

        // if a valid index
        let prevNode = null;
        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        // the node after deleted node
        const node = currentNode.next;
        // delete selected node
        prevNode.next = node;
        node.prev = prevNode;

        this.size--;
        return currentNode;
    }

    // print values
    print() {
        let current = this.head;
        console.log("----- Print -----")

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    printReverse() {
        let current = this.tail;
        console.log("----- Print Reverse -----")

        while(current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}

const list = new DoublyLinkedList();

list.addTail(1);
list.addHead(3);
list.addTail(5);
list.addValue(6,2);
list.removeIndex(0);
list.print();
list.printReverse();