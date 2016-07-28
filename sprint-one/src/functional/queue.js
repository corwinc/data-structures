var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    delete storage[0];
    size--;

    for (var x in storage) {
      storage[x - 1] = storage[x];
    }

    return value;

  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};


// on dequeue: delete value
// loop thru each item in object
// reassign key
