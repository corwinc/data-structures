var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.methods);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function (value) {
  var node = BinarySearchTree(value);

  // Insert it into the correct location relative to the parent node
  var findInsert = function (currentNode, parentNode) {

    if (currentNode.value < parentNode.value) {
      if (parentNode.left === null) {
        parentNode.left = currentNode;
        return;
      } else {
        findInsert(currentNode, parentNode.left);
      }
    } else if (currentNode.value > parentNode.value) {
      if (parentNode.right === null) {
        parentNode.right = currentNode;
        return;
      } else {
        findInsert(currentNode, parentNode.right);
      }
    }
  };

  findInsert(node, this);
};

BinarySearchTree.methods.contains = function (value) {
  var node = this;

  var search = function (currentNode, value) {
    if (value === currentNode.value) {
      return true;
    } else if (value < currentNode.value) {
      if (currentNode.left === null) {
        return false;
      } else {
        return search(currentNode.left, value);
      }
    } else if (value > currentNode.value) {
      if (currentNode.right === null) {
        return false;
      } else {
        return search(currentNode.right, value);
      }
    }
  };

  return search(node, value);

};

BinarySearchTree.methods.depthFirstLog = function (cb, node) {
  var node = node || this;

  cb(node.value);

  if (node.left) {
    this.depthFirstLog(cb, node.left);
  }

  if (node.right) {
    this.depthFirstLog(cb, node.right);
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
