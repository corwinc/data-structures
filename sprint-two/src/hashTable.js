

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // = [[['v1', 'v1'], ['v2', 'v2']]]
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  

  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]]; 
    //this._storage[index][0].push([k, v]); 
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (k === this._storage[index][i][0]) {
        this._storage[index][i][1] = v; 
      } else {
        this._storage[index].push([k, v]); 
      }
    }
  }

  // this._storage.set(index, [k, v]);

  // this._storage[index].push([k, v]); 

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  for (var i = 0; i < this._storage[index].length; i++) {

    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1]; 
    }
  }
  
  // var value = this._storage.get(index)[1];




  // return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1); 
    }
  }
  

  this._storage.set(index, [undefined, undefined]);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


