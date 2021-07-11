//Stacks

//functions: push, pop, peek, length (or size)

//example of something you've already done

let letters = [];
let word = 'racecar'
let rword = ''

//put letters into the stack
for (let i = 0; i < word.length; i++){
    letters.push(word[i])
}

//pop off the stack in reverse order (Stacks are LIFO)
for (let i = 0; i < word.length; i++){
    rword += letters.pop()
}

if (rword === word) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`)
}


//using a class: this implementation uses an object, but an array is a common
//method

class Stack {
    constructor() {
        this.storage = {}
        this.count = 0;
    }
    //adds a value onto the end of the stack
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    //removes and returns the element at the end of the stack
    pop() {
        if (this.count === 0) return undefined;
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }
    //returns the number of elements in the stack
    size() {
        return this.count;
    }
    //returns the value at the end of the stack
    peek() {
        return this.storage[this.count - 1];
    }

}