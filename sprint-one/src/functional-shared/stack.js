var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}; 
  someInstance.storage = {};
  someInstance.index = 0;

  _.extend(someInstance, stackMethods); 

  return someInstance; 
};


var stackMethods = {

  push: function(value) {
    this.storage[this.index] = value;
    this.index++;

    console.log('shared value:', value);
    console.log('shared storage:', this.storage);

  }, 
  pop: function() {
    if (this.index > 0) {
      this.index--;
    }

    var value = this.storage[this.index];
    delete value;

    console.log('value:', value);
    console.log('storage:', this.storage);

    return value;

  },
  size: function() {
    return this.index; 
  }
};




