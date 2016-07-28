var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create node
    var node = Node(value);
    // Check if tail exists (if LinkedList exists)
    if (list.tail === null) {
      // Create head & tail references
      list.head = node;
      list.tail = node;
      // Add node to list
      list.node = node;

    } else {
      // Store current tail as prevNode
      var prevNode = list.tail;
      // Reassign tail to new node
      list.tail = node;
      // Reassign reference of prevNode to new node
      prevNode.next = node;
      // Add node to list
      list.node = node;
    }
  };

  list.removeHead = function() {
    var value = list.head.value; 
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return value; 
  };

  list.contains = function(target) {
    for (var key in list) {
      if (target === list[key].value) {
        return true; 
      }
    }
    return false; 
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
