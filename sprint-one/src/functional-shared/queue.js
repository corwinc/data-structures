var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.length] = value; 
    this.length++;
  },

  dequeue: function () {
    
    var value = this.storage[0]; 
    delete value; 

    if (this.length > 0) {
      this.length--;
    }

    for (var x in this.storage) {
      this.storage[x - 1] = this.storage[x]; 
    }

    return value; 
    
  },

  size: function () {
    return this.length;
  }
};


