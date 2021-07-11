//Binary Heap
//partially ordered binary tree

//Max heap: all child nodes are less than the parent node
//Min heap: all child nodes are greater than the parent node
//order of child nodes on the same level does not matter

//trees are filled from left to right until full and then a new level begins

//can be represented with tree or array structure (more frequent)

//left child: i * 2
//right child: i * 2 + 1
//parent: i / 2

//no index 0: we leave the first index as null

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1; //idx of last element of heap(just added)
      while (this.heap[idx] < heap[Math.floor(idx / 2)]) {
        //while the last item is less than the parent
        if (idx >= 1) {
          //if we haven't reached the root node
          //switching the two elements
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            //if the parent node is not the root node
            idx = Math.floor(idx / 2); //set index to the parent node (still the number we passed in)
          } else {
            break;
          }
        }
      }
    }
  }
  //you always remove the smallest node
  remove() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined && this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
  sort() {
    let tempHeap = [...this.heap];
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    this.heap = tempHeap;
    return result;
  }
}

//max heap:
class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  print() {
    console.log(this.heap);
  }
  insert(num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  remove() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (
        this.heap[i] <= this.heap[left] ||
        this.heap[i] <= this.heap[right]
      ) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined && this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
}
