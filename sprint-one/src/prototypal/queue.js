var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function () {
  var value = this.storage[0];
  delete value;

  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }

  if (this.length > 0) {
    this.length--;
  }

  return value;
};

queueMethods.size = function () {
  return this.length;
};


