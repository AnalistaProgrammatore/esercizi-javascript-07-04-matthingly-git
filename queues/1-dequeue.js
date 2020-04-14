function Dequeue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.enqueueStart = enqueueStart;
  this.dequeue = dequeue;
  this.dequeueEnd = dequeueEnd;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count
}

function enqueue(element) {
  this.dataStore.push(element);
}

function enqueueStart(element) {
  this.dataStore.unshift(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function dequeueEnd() {
  return this.dataStore.pop();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  }
  else {
    return false;
  }
}

function count() {
  return this.dataStore.length;
}

var queue = new Dequeue();

queue.enqueue("Matteo")
queue.enqueue("Marco")
queue.enqueue("Luca")
console.log(queue.toString())
queue.enqueueStart("Giovanni")
console.log(queue.toString())

queue.dequeue()
console.log(queue.toString())
queue.dequeueEnd()
console.log(queue.toString())