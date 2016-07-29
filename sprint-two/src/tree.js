var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
  this.children.push(child);  // fix me

};

treeMethods.contains = function(target) {
  // Check current node for match
  if (this.value === target) {
    return true;
  }

  // Loop through children to see if their value matches target
  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      if (child.contains(target)) {
        return true; 
      }

    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
