// Source: https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
var Node = function(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

var Tree = function(data) {
  var node = new Node(data);
  this._root = node;
}

////////////////////////////////////////////////
// -------------- DEPTH SEARCH -------------- //
////////////////////////////////////////////////

Tree.prototype.traverseDF = function(callback) {
    
  (function recurse(currentNode) {

    for (var i = 0, length = currentNode.children.length; i < length; i++) {

      recurse(currentNode.children[i])

    }

    callback(currentNode);

  })(this._root);
 
};

var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];
 

/*
 
creates this tree
 
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven
 
*/

// tree.traverseDF(function(node) {
//   console.log(node.data);
// });

/*
 
logs the following strings to the console
 
'five'
'six'
'two'
'three'
'seven'
'four'
'one'
 
*/

////////////////////////////////////////////////
// ------------- BREADTH SEARCH ------------- //
////////////////////////////////////////////////

var Queue = function() {
  this.dataStore = [];
  this.enqueue = function enqueue(element) {
    this.dataStore.push(element);
  }
  this.dequeue = function dequeue() {
    return this.dataStore.shift()
  };
  this.front = function front() {
    return this.dataStore[0];
  };
  this.back = function back() {
    return this.dataStore[this.dataStore.length - 1]
  };
};

Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue;

  queue.enqueue(this._root);

  var currentNode = queue.dequeue()

  while(currentNode) {
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      queue.enqueue(currentNode.children[i]);
    }

    callback(currentNode);
    currentNode = queue.dequeue()
  }

};

tree.traverseBF(function(node) {
  console.log(node.data)
})

////////////////////////////////////////////////
// -------------  ------------- //
////////////////////////////////////////////////




















