

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Create node object
  this.node = {};
  // Set key / value pair for node on the Graph object
  this.node.value = node;
  // Give node an empty array to store neighbors
  this.node.neighbors = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Loop through all of graph's nodes
  for (var key in this) {
    // For current node object
    var currentNode = this[key];
    // If current node's value matches target node (value): return true
    if (currentNode.value === node) {
      return true;
    }
  }

  // If it does not contain target, return false.
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.node;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Find node that has the value fromNode by looping thru graph's nodes
  this[fromNode].neighbors.push(toNode);
  this[toNode].neighbors.push(fromNode);
  // Set that node's neighbor to toNode (push to neighbors array)
  // Repeat process for toNode

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


