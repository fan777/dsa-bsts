class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root
    while (true) {
      if (val < current.val) {
        if (current.left !== null)
          current = current.left
        else {
          current.left = new Node(val);
          break;
        }
      } else if (val > current.val) {
        if (current.right !== null)
          current = current.right
        else {
          current.right = new Node(val);
          break;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }
    if (val < current.val) {
      if (current.left !== null)
        return this.insertRecursively(val, current.left)
      else {
        current.left = new Node(val)
        return this
      }
    } else if (val > current.val) {
      if (current.right !== null)
        return this.insertRecursively(val, current.right)
      else {
        current.right = new Node(val)
        return this
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    while (current) {
      if (current.val === val) return current;
      if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;
    if (val < current.val) {
      if (current.left === null) return undefined
      else return this.findRecursively(val, current.left)
    } else if (val > current.val) {
      if (current.right === null) return undefined
      else return this.findRecursively(val, current.right)
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodes = []
    let current = this.root

    function helper(node) {
      nodes.push(node.val);
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
    }

    helper(current);
    return nodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodes = []
    let current = this.root

    function helper(node) {
      if (node.left) helper(node.left)
      nodes.push(node.val);
      if (node.right) helper(node.right)
    }

    helper(current);
    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodes = []
    let current = this.root

    function helper(node) {
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
      nodes.push(node.val);
    }

    helper(current);
    return nodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = []
    let retArray = []
    let current = this.root

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      retArray.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return retArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
