////////////////////////////////////////////////////////////
// ---------------------- STACKS ------------------------//
////////////////////////////////////////////////////////////

var Stack = function() {
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.isEmpty = function() {
  if (this.count === 0) {
    return true;
  }
  return false;
}

Stack.prototype.peek = function() {
  return this.storage[this.count - 1]
}

Stack.prototype.size = function() {
  return this.count;
}

Stack.prototype.swap = function() {
  var temp_element = this.storage[this.count - 1];
  this.storage[this.count - 1] = this.storage[this.count - 2];
  this.storage[this.count - 2] = temp_element;
}

// ---------------------- TESTING --------------------- //
var dishes = new Stack();
dishes.push('a')
dishes.push('b')
dishes.push('c')
dishes.push('d')
// console.log(dishes)
// console.log('-----------After methods:----------')
// dishes.swap();
// dishes.pop();
// console.log(dishes)
// console.log(dishes.isEmpty())
// console.log(dishes.peek())
// console.log(dishes.size())


////////////////////////////////////////////////////////////
// ---------------------- QUEUES ------------------------//
////////////////////////////////////////////////////////////

var Queue = function() {
  this.count = 0;
  this.storage = {};
  this.lowestCount = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count ++;
}

Queue.prototype.dequeue = function() {
  var result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
}

Queue.prototype.peek = function() {
  return this.storage[this.lowestCount];
}

Queue.prototype.isEmpty = function() {
  if (this.count === this.lowestCount) {
    return true;
  }
  return false;
}

Queue.prototype.size = function() {
  return this.count - this.lowestCount;
}

// ---------------------- TESTING --------------------- //
movie_line = new Queue();
movie_line.enqueue('Bob');
movie_line.enqueue('Amy');
movie_line.enqueue('Pam');
movie_line.enqueue('Dan');
movie_line.enqueue('Jim');
console.log(movie_line)
console.log(`Is the line empty? ${movie_line.isEmpty()}`)
console.log(`Who's first in line? ${movie_line.peek()}`)
console.log(`How big is the line? ${movie_line.size()}`)
console.log('-----------After methods:----------')
movie_line.dequeue();
movie_line.dequeue();
movie_line.dequeue();
console.log(movie_line);
console.log(`Is the line empty now? ${movie_line.isEmpty()}`)
console.log(`Who's first in line now? ${movie_line.peek()}`)
console.log(`How big is the line now? ${movie_line.size()}`)















































