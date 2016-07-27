var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
    console.log("enqueue:", value);
    console.log("enqueue storage:", storage);
  };

  someInstance.dequeue = function() {
    // get array of keys in storage
    // var keys = Object.keys(storage);
    // store first item in queue @ key 0
    var value = storage[0];
    delete storage[0];
    size--;

    for (var x in storage) {
      storage[x - 1] = storage[x];
    }
    console.log("dequeue:", value);
    console.log("dequeue storage:", storage);

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
