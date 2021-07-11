//Queues:

//Queues are FIFO structures and can be built with arrays

class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(ele) {
    this.collection.push(ele);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}
