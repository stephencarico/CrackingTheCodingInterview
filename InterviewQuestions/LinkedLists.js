///////////////////////////////////////////////////////////////////////
////////////// ------------- LINKED LISTS ------------- //////////////
///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// --------------------- FOUNDATION --------------------- //
////////////////////////////////////////////////////////////
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

LinkedList.prototype.add = function(element) {
  let node = new Node(element);
  if (this.head === null) {
    this.head = node;
  } else {
    let currentNode = this.head;

    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node;
  }

  this.length++;
};

LinkedList.prototype.display = function() {
  currentNode = this.head;

  while(currentNode) {
    console.log(currentNode.element);
    currentNode = currentNode.next;
  }
}

LinkedList.prototype.size = function() {
  return this.length;
}

LinkedList.prototype.elementAt = function(index) {
  let currentNode = this.head;
  let count = 0;
  while (count < index) {
    count++;
    currentNode = currentNode.next;
  };
  return currentNode;
}

var list = new LinkedList()

////////////////////////////////////////////////////////////
// --------------- INTERVIEW QUESTIONS ------------------ //
////////////////////////////////////////////////////////////


// //////////////////////////// //
// ------ 2.1 REMOVE DUPS ----- //
// //////////////////////////// //
LinkedList.prototype.removeDuplicates = function() {
  let check = {};
  let currentNode = this.head;
  let previousNode;

  while(currentNode) {
    if (!check[currentNode.element]) {
      check[currentNode.element] = true; 
      previousNode = currentNode;     
    } else {
      previousNode.next = currentNode.next;
      this.length--;
    }
    currentNode = currentNode.next;
  }
}

// list.removeDuplicates()
// list.display()

// /////////////////////////////////// //
// ------ 2.1 RETURN KTH TO LAST ----- //
// /////////////////////////////////// //
LinkedList.prototype.returnKthToLast = function(k) {
  let currentNode = this.head;
  let kthcheck = this.head;

  if(k === 0) {
    k = 1;
  }

  if(!this.head) {
    return 0;
  }

  for(let i = 0; i < k; i++) {
    kthcheck = kthcheck.next;
  }

  while(kthcheck) {
    currentNode = currentNode.next;
    kthcheck = kthcheck.next;
  }

  return currentNode;
}

// TESTING //
// list.add('a')
// list.add('b')
// list.add('c')
// list.add('d')
// list.add('e')

// list.display()
// console.log(list.returnKthToLsst(3))

// //////////////////////////////////// //
// ------ 2.3 DELETE MIDDLE NODES ----- //
// //////////////////////////////////// //

// WARNING: INCORRECT - ONLY GIVEN VALUE OF NODE.
LinkedList.prototype.deleteMiddleNodes = function(index) {
  if(index === 0 || this.length < 3 || this.length === 0) {
    throw new Error("insufficient list")
  } 

  let currentNode = this.head;

  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  if (currentNode.next === null || currentNode.next.next === null) {
    throw new Error("insufficient parameters")
  }

  currentNode.next = currentNode.next.next
}

// TESTING
// list.add('0')
// list.add('1')
// list.add('2')
// list.add('3')
// list.add('4')
// list.deleteMiddleNodes(3)
// list.display()


// ////////////////////////////////// //
// ---------- 2.4 PARTITION --------- //
// ////////////////////////////////// //
// https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/master/src/chapter2/ch2-q4.js
LinkedList.prototype.partition = function(x) {
  let leftList = new LinkedList();
  let rightList = new LinkedList();

  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.element < x) {
      leftList.add(currentNode.element);
    } else {
      rightList.add(currentNode.element);
    }
    currentNode = currentNode.next;
  }

  let leftNode = leftList.head;

  while(leftNode.next) {
    leftNode = leftNode.next
    console.log(leftNode)
  }

  leftNode.next = rightList.head;
  return leftList;
}

// list.add('3');
// list.add('5');
// list.add('8');
// list.add('5');
// list.add('10');
// list.add('2');
// list.add('1');
// list.partition(5).display()

// ////////////////////////////////// //
// ---------- 2.5 SUM LISTS --------- //
// ////////////////////////////////// //



// /////////////////////////////////// //
// ---------- 2.6 PALINDROME --------- //
// /////////////////////////////////// //
// SOLUTION ONE:
// LinkedList.prototype.isPalindrome = function() {
//   let currentNode = this.head;
//   let stack = [];

//   while (currentNode) {
//     stack.push(currentNode.element);
//     currentNode = currentNode.next;
//   }

//   currentNode = this.head;
//   let len = Math.floor(stack.length / 2)

//   for (let i = 0; i < len; i++) {
//     let check = stack.pop()
//     if (check === currentNode.element) {
//       currentNode = currentNode.next;
//     } else {
//       return false;
//     }
//   }

//   console.log(stack)
//   return true;
// }

// SOLUTION TWO:
LinkedList.prototype.isPalindrome = function() {
  let slow = this.head;
  let fast = this.head;

  let stack = [];

  while (fast !== null && fast.next !== null) {
    stack.push(slow.element);
    slow = slow.next;
    fast = fast.next.next;
  }

  while (slow !== null) {
    let pop = stack.pop();

    if (pop !== slow.element) {
      return false;
    }

    slow = slow.next;
  }

  console.log(stack)
  return true;
}

// console.log(list.isPalindrome())


// ///////////////////////////////////// //
// ---------- 2.7 INTERSECTION --------- //
// ///////////////////////////////////// //



// //////////////////////////////////////// //
// ---------- 2.8 LOOP DETECTION  --------- //
// //////////////////////////////////////// //
