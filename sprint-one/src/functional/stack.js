var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; 

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; 
    size++; 

    console.log('value:', value);
    console.log('value:', storage);
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--; 
    }

    var value = storage[size]; 
    delete storage[size]; 
    

    console.log('value:', value);
    console.log('storage:', storage);
    return value; 
  };

  someInstance.size = function() {
    return size; 
  };

  return someInstance;
};
