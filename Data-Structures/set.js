//Set

//sets are similar to arrays, but have no duplicate values and have no particular order
//Can use the built in Set() object in JS, but this is how to make your own.

class mySet {
  constructor() {
    this.collection = [];
  }
  //returns boolean of whether or not a set contains an element
  has(ele) {
    return collection.indexOf(ele) !== -1;
  }
  //returns all values in the set
  values() {
    return this.collection;
  }

  //adds an element to the set and returns true if successful
  add(ele) {
    if (!this.has(ele)) {
      this.collection.push(ele);
      return true;
    }
    return false;
  }
  //removes element from set and returns true if successful
  remove(ele) {
    if (this.has(ele)) {
      index = this.collection.indexOf(ele);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  //returns the number of elements in the set
  size() {
    return this.collection.length;
  }
  //returns the union of two sets
  union(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e)
    })
    return unionSet;
  }

  //returns the intersection of two sets as a new set
  intersection(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  //returns the differences of the two sets as a new set
  difference(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }
  //tests if set is a subset of another set and returns boolean
  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every((val) => {
      return otherSet.has(val);
    });
  }
}
