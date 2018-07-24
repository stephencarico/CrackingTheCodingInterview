// SOURCES //
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
// https://khan4019.github.io/front-end-Interview-Questions/bst.html

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}

// TO BE COMPLETED
BinarySearchTree.prototype.remove = function(val) {

}

var bst = new BinarySearchTree();
bst.push(3)
bst.push(2)
bst.push(4)
bst.push(1)
bst.push(5)

function dfs(node) {
  if(node) {
    console.log(node.value)
    dfs(node.left);
    dfs(node.right);
  }
}

function inorder(node) {
  // visits the left branch, then the current node, and finally, the right branch.
  if(node) {
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  }
}

function preorder(node) {
  // visits the current node before its child nodes
  if (node) {
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
  }
}

function postorder(node) {
  // visits the current node after its child nodes
  if(node) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
  }
}

console.log('*** DEPTH FIRST TRAVERSAL ***')
console.log('IN-ORDER FIRST SEARCH')
inorder(bst.root)
console.log('PRE-ORDER FIRST SEARCH')
preorder(bst.root)
console.log('POST-ORDER FIRST SEARCH')
postorder(bst.root)

