//Hash table: used to implement associative arrays or mappings of key value pairs.
//common way to implement the Map data structure or objects
//used because their time and space complexity makes them preferable

//keys are hashed and converted to indexes, then key-value pair is stored at that index

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor(storage = []) {
    this.storage = storage;
    this.capacity = 4;
    this.print = function () {
      console.log(this.storage);
    };
  }
  add(key, value) {
    let index = hash(key, this.capacity);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
  remove(key) {
    let index = hash(key, this.capacity);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index[i][0] === key]) {
          delete this.storage[index][i];
        }
      }
    }
  }

  lookup(key) {
    let index = hash(key, this.capacity);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
}
