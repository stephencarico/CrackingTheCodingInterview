///////////////////////////////////////////////////////////////////////
//////////// ------------- STACKS AND QUEUES ------------- ////////////
///////////////////////////////////////////////////////////////////////

// //////////////////////////// //
// ------ 3.1 THREE IN ONE ----- //
// //////////////////////////// //
class TripleStack {
  constructor() {
    this._array = [];
    this._lengths = [0,0,0];
  }

  _getLength(stack) {
    return this._lengths[stack - 1];
  }

  push(stack, value) {
    let index = this._getLength(stack) * 3 + stack - 1;
    this._array[index] = value;
    this._lengths[stack - 1]++;
  }

  pop(stack) {
    let length = this._getLength(stack),
      value;
    if (length > 0) {
      let index = (length - 1) * 3 + stack - 1;
      value = this._array[index];
      this._lengths[stack - 1]--;
    }
    return value;
  }

  peek(stack) {
    let length = this._lengths[stack - 1],
      value;

    if (length > 0) {
      let index = (length - 1) * 3 + stack - 1;
      value = this._array[index];
    }
    return value;
  }

  isEmpty(stack) {
    return this._getLength(stack) === 0;
  }
}

// example:
// this._array = [0, 1, 2, 3]
// this._lengths = [2, 1, 1]


// //////////////////////////// //
// ------- 3.2 STACK MIN ------ //
// //////////////////////////// //
class MinStack {
  constructor() {
    this._stack = [];
  }

  push(value) {
    let min = this.min();
    this._stack.push({
      value: value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    });
  }

  pop() {
    if (!this.isEmpty()) {
      let item = this._stack.pop();
      return item.value;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      let item = this._stack[this._stack.length - 1];
      return item;
    }
  }

  min() {
    if (!isEmpty()) {
      let item = this._stack[this._stack.length - 1];
      return item.min;
    }
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}

// ////////////////////////////////// //
// ------- 3.3 STACK OF PLATES ------ //
// ////////////////////////////////// //
class SetOfStacks {
  constructor(maxSize) {
    if (arguments.length < 1) {
      throw new Error('maxSize argument is required')
    }
    this.stacks = [[]];
    this.max = maxSize;
  }

  push(value) {
    if (this.stacks[this.stacks.length - 1].length >= this.max) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length -1].push(value);
  }

  pop() {
    let value = this.stacks[this.stacks.length - 1].pop();
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop();
    }
    return value;
  }

  popAt(index) {
    let stack = this.stacks[index],
      value = stack.pop();
      tempStack = [];
    // move items from subsequent stacks forward to fill the gap
    if (index < this.stacks.length) {
      for (let i = index + 1; i < this.stacks.length; i++) {
        nextStack = this.stacks[i];
        // reverse next stack - we could actually use other operators
        // in Javascript like shift or reverse to do this simpler but 
        // that would be cheating
        while (nextStack.length > 0) {
          tempStack.push(nextStack.pop());
        };
        stack.push(tempStack.pop());
        while (tempStack.length > 0) {
          nextStack.push(tempStack.pop());
        }
        stack = nextStack;
      }
    }
    // drop any empty stacks at the end beyond the first one
    if (this.stacks.length > 1 && this.stacks[this.stacks.length -1].length === 0) {
      this.stacks.pop;
    } 

    return value;
  }
}

// ////////////////////////////////// //
// ------- 3.4 QUEUE VIA STACKS ------ //
// ////////////////////////////////// //
class MyQueue {
  constructor() {
    this.eStack = [];
    this.dStack = [];
  }

  enqueue(value) {
    this.eStack.push(value);
  }

  dequeue() {
    if (this.dStack.length === 0) {
      while (this.eStack.length > 0) {
        this.dStack.push(this.eStack.pop());
      }
    }
    return this.dStack.pop();
  }
}

// TESTING:
// queue = new MyQueue();

// queue.enqueue('a');
// queue.enqueue('b');
// queue.enqueue('c');
// queue.enqueue('d');

// console.log(queue.dequeue());

// ////////////////////////////////// //
// ---------- 3.5 SORT STACK --------- //
// ////////////////////////////////// //
function sortStack(stack) {
  let temp = []; 
  temp.push(stack.pop());
  while (!isEmpty(stack)) {
    let curr = stack.pop(), 
      count = 0;

    while (!isEmpty(temp) && curr < peek(temp)) {
      stack.push(temp.pop());
      count++;
    }
    temp.push(curr);
    for (let i = 0; i < count; i++) {
      temp.push(stack.pop());
    }
  }

  while (!isEmpty(temp)) {
    stack.push(temp.pop());
  }

  return stack;

}

function peek(stack) {
  return stack[stack.length - 1];
}

function isEmpty(stack) {
  return stack.length === 0;
}


// /////////////////////////////////////// //
// ---------- 3.6 ANIMAL SHELTER --------- //
// /////////////////////////////////////// //
class AnimalShelter = {
  constructor() {
    this._cats = [];
    this._dogs = [];
    this._ids = 0;
  }

  enqueueCat(name) {
    this._cats.push({
      name = name,
      id: this._ids++
    });
  };

  enqueueDog(name) {
    this._dogs.push({
      name: name,
      id: this._ids++
    })
  }

  dequeueAny() {
    let catId = this._cats.length > 0 ? this._cats[0].id : Number.POSITIVE_INFINITY,
      dogId = this._dogs.length > 0 ? this._dogs[0].id : Number.POSITIVE_INFINITY

    if (dogId !== Number.POSITIVE_INFINITY || catId !== Number.POSITIVE_INFINITY) {
      if (dogId < catId) {
        return this._dogs.shift().name;
      } else {
        return this._cats.shift().name;
      }
    }
  }

  dequeueCat() {
    return this._cats.shift().name;
  }

  dequeueDog() {
    return this._dogs.shift().name;
  }
}







































