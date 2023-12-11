const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

// let array = [];

class Stack {
  constructor(){
    this.array = [];
  }

  push(element) {
    if (!element) return;

    if (!this.array) {
      this.array = [];
    }

    this.array[this.array.length] = element;
    return;
  }

  pop() {
    if (!this.array) return;

    const element = this.array[this.array.length - 1];
    this.array.splice(this.array.length - 1, 1);
    return element;
  }

  peek() {
    if (!this.array) return;
    return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};
