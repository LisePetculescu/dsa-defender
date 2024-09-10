export default class SinglyLinkedList {
  head = null;

  add(data) {
    const node = new Node(data);
    //   console.log(node.data);

    node.next = this.head;
    this.head = node;
  }

  getFirst() {
    return this.head.data;
  }

  getFirstNode() {
    return this.head;
  }
l
  getNextNode(node) {
    return node.next;
  }

  dumpList() {
    let node = this.head;

    while (node != null) {
      console.log(node.data);

      node = node.next;
    }
  }
}

class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
