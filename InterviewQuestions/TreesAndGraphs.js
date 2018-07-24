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

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const graph = new Graph();
const tree = new Tree();

////////////////////////////////////////////////////////////
// --------------- INTERVIEW QUESTIONS ------------------ //
////////////////////////////////////////////////////////////

// //////////////////////////////////// //
// ------ 4.1 ROUTE BETWEEN NODES ----- //
// //////////////////////////////////// //

Graph.prototype.addVertex = function(vertex) {
  this.adjList[vertex] = [];
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
}

// DEPTH FIRST SEARCH
Graph.prototype.dfs = function() {
  const nodes = Object.keys(this.adjList);
  const visited = {};

  for (var i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    this._dfsUtility(node, visited);
  }
}

Graph.prototype._dfsUtility = function(vertex, visited) {
  if(!visited[vertex]) {
    visited[vertex] = true;
    console.log(vertex, visited)
    const neighbors = this.adjList[vertex]

    for(var i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      this._dfsUtility(neighbor, visited)
    }
  }
}

// CYCLE DETECTION
Graph.prototype.detectCycle = function() {
  const graphNodes = Object.keys(this.adjList);
  const visited = {};
  const recStack = {};

  for(var i = 0; i < graphNodes.length; i++) {
    const node = graphNodes[i];

    if(this._detectCycleUtility(node, visited, recStack)) {
      return 'There is a cycle!'
    }
  }
  console.log(recStack)
  return 'There is no cycle!'
}

Graph.prototype._detectCycleUtility = function(vertex, visited, recStack) {
  if(!visited[vertex]) {
    visited[vertex] = true;
    recStack[vertex] = true;
    const nodeNeighbors = this.adjList[vertex];

    for (var i = 0; i < nodeNeighbors.length; i++) {
      const currentNode = nodeNeighbors[i];
        console.log('Parent', vertex, 'Child', currentNode)
      if(!visited[currentNode] && this._detectCycleUtility(currentNode, visited, recStack)) {
        return true
      } else if (recStack[currentNode]) {
        return true;
      }
    }
  }
  recStack[vertex] = false;
  return false;
}

// TESTING

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('D', 'E');
// graph.addEdge('C', 'E');
// graph.addEdge('A', 'D');
// graph.addEdge('A', 'C');
// graph.addEdge('E', 'B');
// graph.addEdge('D', 'B');
// graph.addEdge('D', 'A');

// graph.dfs();
// console.log(graph.detectCycle())

// //////////////////////////////////// //
// ---------- 4.2 MINIMAL TREE -------- //
// //////////////////////////////////// //
Tree.prototype.add = function(val) {
  var node = new Node(val);
  if(!this.root) {
    this.root = node
    return;
  }

  var currentNode = this.root;

  while(currentNode) {
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = node;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = node;
        break;
      } else {
      currentNode = currentNode.right;
      }
    }
  }
}

function makeBalancedTree(values) {
  let tree = new Tree();
  if (values && values.length) {
    add(tree, values, 0, values.length - 1)
  }
  return tree;
}

function add(tree, values, start, end) {
  if (start === end) {
    tree.add(values[start])
  } else if (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    tree.add(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
}

const test1 = [1, 2, 3, 4, 5]

console.log(makeBalancedTree(test1))

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













