// Instantiate a new graph
var Graph = function() {
  // 1 : {value: }
  // 2 : {}
  // nodes : {1 : {value: ...}, 
  //2 : {}}
  //this.nodes = {}; 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Create node object
  this[node] = {};
  // Set key / value pair for node on the Graph object
  this[node].value = node;
  // Give node an empty array to store neighbors
  this[node].neighbors = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Loop through all of graph's nodes
  for (var key in this) {
    // For current node object
    // If current node's value matches target node (value): return true
    if (this[key].value === node) {
      return true;
    }
  }

  // If it does not contain target, return false.
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Save neighbors for node to be deleted
  var savedNeighbors = Array.prototype.slice.call(this[node].neighbors); 
  // Loop through those neighbors
  for (var i = 0; i < savedNeighbors.length; i++) {
    var currentNeighbor = savedNeighbors[i].value; 
    this.removeEdge(node, currentNeighbor); 
  }
      // Perform remove edge
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return false; 
  }

  var neighborArray = this[fromNode].neighbors;
  for (var i = 0; i < neighborArray.length; i++) {
    if (neighborArray[i].value === toNode) {
      return true; 
    } 
  }

  neighborArray = this[toNode].neighbors;
  for (var i = 0; i < neighborArray.length; i++) {
    if (neighborArray[i].value === fromNode) {
      return true; 
    } 
  }
  return false; 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Find node that has the value fromNode by looping thru graph's nodes
  this[fromNode].neighbors.push(this[toNode]);
  this[toNode].neighbors.push(this[fromNode]);
  // Set that node's neighbor to toNode (push to neighbors array)
  // Repeat process for toNode

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var neighborArray = this[fromNode].neighbors;
  for (var i = 0; i < neighborArray.length; i++) {
    if (neighborArray[i].value === toNode) {
      neighborArray.splice(i, 1); 
    } 
  }

  neighborArray = this[toNode].neighbors;
  for (var i = 0; i < neighborArray.length; i++) {
    if (neighborArray[i].value === fromNode) {
      neighborArray.splice(i, 1); 
    } 
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    var value = this[key].value; 
    cb(value); 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */