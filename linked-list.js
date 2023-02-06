/** Node: node for a singularly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    // condition if list is empty
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;


    /* condition if list is not empty */
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const tail = this[this.length - 1];
    this.tail = this[this.length - 2];
    return tail;
  }

  /** shift(): return & remove first item. */

  shift() {
    const head = this.head;
    this.head = this.head.next;
    // this.head.next = this[1];
    this.length--;
    return head;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let position = 0;

    let current = this.head;

    while (position !== idx) { // [1,2,3]
      // console.log(current.val);
      current = current.next;
      position++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
