// Instantiate a new graph
var Graph = function() {
  // 1 : 1,
  // 2 : 2,
  // 3 : 3, 
  // 4 : [1, 2, 3]
  // 1 : [2]
  // 2 : [1]
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = node;
  this.test = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Loop through all of graph's nodes
  for (var key in this) {
    // For current node object
    if (this[key] === node) {
      return true;
    }
  }

  // If it does not contain target, return false.
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.edges;
  for (var i = 0; i < edges.length; i++) {
    if (edges[i][0] === fromNode && edges[i][1] === toNode || edges[i][0] === toNode && edges[i][1] === fromNode) {
      return true;
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var currentEdge = [fromNode, toNode];
  this.edges.push(currentEdge);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Find value
  // Return indexOf
  // Splice that item out
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


