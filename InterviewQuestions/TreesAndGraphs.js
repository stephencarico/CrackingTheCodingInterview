///////////////////////////////////////////////////////////////////////
//////////// ------------- TREES AND GRAPHS ------------- ////////////
///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// --------------- INTERVIEW QUESTIONS ------------------ //
////////////////////////////////////////////////////////////

var BST = require('./../util/BST');
var Graph = require('./../util/Graph');
var LinkedList = require('./../util/LinkedList')
var Queue = require('./../util/Queue');
var Stack = require('./../util/Stack');
var Tree = require('./../util/Tree');

// //////////////////////////////////// //
// ------ 4.1 ROUTE BETWEEN NODES ----- //
// //////////////////////////////////// //

// concurrently implement BFS on both sides of the graph
// intention is to minimise the levels that the graph has to search

var checkRoute = function(value1, value2, graph) {
  var q1 = new Queue();
  var q2 = new Queue();
  var visited1 = {};
  var visited2 = {}; 
  // insert values into qs
  visited1[value1] = true;
  visited2[value2] = true;
  if(graph.hasNode(value1)) {
    for (var edge in graph.findEdges(value1)) {
      q1.add(edge);
    }
  }
  if(graph.hasNode(value2)) {
    for (var edge in graph.findEdges(value2)) {
      q2.add(edge);
    }
  }
  // take turns dequeueing until empty
  var nextEdge1;
  var nextEdge2;
  while (!q1.isEmpty() || !q2.isEmpty()) {
    // if has queue, return true
    if (!q1.isEmpty()) {
      nextEdge1 = q1.remove();
      if (nextEdge1 === value2) {
        return true;
      }
      if (visited1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;
        if(graph.hasNode(nextEdge1)) {
          for (var edge in graph.findEdges(nextEdge1)) {
            q1.add(edge);
          }
        }
      }
    }
    if (!q2.isEmpty()) {
      nextEdge2 = q2.remove();
      if (nextEdge2 === value1) {
        return true;
      }
      if (visited2[nextEdge2] === undefined) {
        visited2[nextEdge2] = true;
        if(graph.hasNode(nextEdge2)) {
          for (var edge in graph.findEdges(nextEdge2)) {
            q2.add(edge);
          }
        }
      }
    }
  }
  // return false
  return false;
};

/* TEST */
// var graph = new Graph();
// graph.addNode('A');
// graph.addNode('B');
// graph.addNode('C');
// graph.addNode('D');
// graph.addNode('E');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'C');

// graph.addEdge('D', 'E');


// console.log(checkRoute('A', 'C', graph), true);
// console.log(checkRoute('A', 'E', graph), false);
// console.log(checkRoute('B', 'A', graph), true);
// console.log(checkRoute('D', 'E', graph), true);

// //////////////////////////////////// //
// ---------- 4.2 MINIMAL TREE -------- //
// //////////////////////////////////// //

// Approach: divide and conquer, array and insert into tree

var insertBalanced = function(array) {
  var bst = new BST();
  var q = new Queue();
  var currArr;
  var floor = Math.floor;
  q.add(array);
  while (!q.isEmpty()) {
    currArr = q.remove();
    bst.insert(currArr[floor(currArr.length/2)]);
    if (currArr.slice(0, floor(currArr.length/2)).length > 0) {
      q.add(currArr.slice(0, floor(currArr.length/2)));
    }
    if (currArr.slice(floor(currArr.length/2) + 1).length > 0) {
      q.add(currArr.slice(floor(currArr.length/2) + 1));
    }
  }
  return bst;
};

/* TEST */
// var arr1 = [1, 2, 3, 4, 5, 6];
// var tree1 = insertBalanced(arr1);
// tree1.printLevelOrder();

// var arr2 = [1, 2, 3, 4, 5, 6, 7];
// var tree2 = insertBalanced(arr2);
// tree2.printLevelOrder();

// /////////////////////////////// //
// ------ 4.3 LIST OF DEPTHS ----- //
// /////////////////////////////// //

function listOfDepths(bst) {
  var listOfLists = [];
  var list = null;
  var newNode;
  var q = new Queue(); // {front: null, back: null}
  var nextq = new Queue(); // {front: null, back: null}
  var currNode = bst; 
  /*
    {
      value: 4,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 3,
          left: null,
          right: null
        }
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    }

  */

  q.add(currNode);
  while (!q.isEmpty()) {
    currNode = q.remove();
    newNode = new LinkedList(currNode.value);
    newNode.next = list;
    list = newNode;
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      listOfLists.push(list);
      list = null;
      q = nextq;
      nextq = new Queue();
    }
  }
  return listOfLists;
}


/* TEST */
// 1, 2, 3, 4, 5, 6, 7
// var tree = new BST(4);
// tree.insert(2);
// tree.insert(6);
// tree.insert(1);
// tree.insert(3);
// tree.insert(5);
// tree.insert(7);

// console.log(listOfDepths(tree));


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













