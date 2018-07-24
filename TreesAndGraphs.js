///////////////////////////////////////////////////////////////////////
//////////// ------------- TREES AND GRAPHS ------------- ////////////
///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// --------------------- FOUNDATION --------------------- //
////////////////////////////////////////////////////////////

class Graph {
  constructor(val) {
   this.value = val;
   this.adjList = []; 
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
      let node = new TreeNode(value);
      if (!this.root) {
        this.root = node;
      }
      else {
        let n = this.root,
          branch;
        while (n) {
          branch = value < n.val ? 'left' : 'right';
          if (!n[branch]) {
            break;
          }
          n = n[branch];
        }
        node.parent = n;
        n[branch] = node;
      }
    }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.val = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    }
    else {
      this.head = new LinkedListNode(value, this.head);
    }
  }

  append(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    }
    else {
      this.tail = this.tail.next = new LinkedListNode(value);
    }
  }

  toArray() {
    let arr = [],
      node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}

function isBalanced(tree) {
  if (!tree || !tree.root) {
    return true;
  }

  let node = tree.root,
    cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  return cache.max - cache.min <= 1;
}

const graph = new Graph();
const tree = new Tree();

// //////////////////////////////////// //
// ------ 4.1 ROUTE BETWEEN NODES ----- //
// //////////////////////////////////// //
function isConnectedBFS(graph, source, target) {
  let discovered = new Set();
  return discovered;
}

console.log(isConnectedBFS(graph, ))

// //////////////////////////////////// //
// ---------- 4.2 MINIMAL TREE -------- //
// //////////////////////////////////// //



// /////////////////////////////// //
// ------ 4.3 LIST OF DEPTHS ----- //
// /////////////////////////////// //



// /////////////////////////////// //
// ------ 4.4 CHECK BALANCED ----- //
// /////////////////////////////// //



// ///////////////////////////// //
// ------ 4.5 VALIDATE BST ----- //
// ///////////////////////////// //



// //////////////////////////// //
// ------- 4.6 SUCCESSOR ------ //
// //////////////////////////// //



// //////////////////////////// //
// ------ 4.7 BUILD ORDER ----- //
// //////////////////////////// //



// ////////////////////////////////////// //
// ------ 4.8 FIRST COMMON ANCESTOR ----- //
// ////////////////////////////////////// //



// ////////////////////////////// //
// ------ 4.9 BST SEQUENCES ----- //
// ////////////////////////////// //



// /////////////////////////////// //
// ------ 4.10 CHECK SUBTREE ----- //
// /////////////////////////////// //



// ///////////////////////////// //
// ------ 4.11 RANDOM NODE ----- //
// ///////////////////////////// //



// //////////////////////////////// //
// ------ 4.12 PATHS WITH SUM ----- //
// //////////////////////////////// //