

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // = [[['v1', 'v1'], ['v2', 'v2']]]
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, [k, v]);


  // this._storage[index]
  // if this._storage[index] === undefined 
    // insert empty array ('bucket')
    // storage[index][0].push([k, v]) 
  // else storage[index][0].push([k, v]) to bucket
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var value = this._storage.get(index)[1];

  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, [undefined, undefined]);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


