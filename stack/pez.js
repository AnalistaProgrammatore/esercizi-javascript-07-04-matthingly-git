function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

let startingDispenser = new Stack();
let pezs = new Stack();
let finalDispenser = new Stack();

startingDispenser.push("Giallo")
startingDispenser.push("Rosso")
startingDispenser.push("Bianco")
startingDispenser.push("Giallo")
startingDispenser.push("Rosso")
startingDispenser.push("Giallo")
startingDispenser.push("Rosso")
startingDispenser.push("Bianco")
startingDispenser.push("Giallo")
startingDispenser.push("Giallo")
startingDispenser.push("Bianco")
startingDispenser.push("Giallo")

console.log(startingDispenser.dataStore)

while (startingDispenser.top > 0) {
  if (startingDispenser.peek() == "Giallo") {
    startingDispenser.pop()
  } else {
    pezs.push(startingDispenser.pop())
  }
}

console.log(pezs.dataStore)

while (pezs.top > 0) {
  finalDispenser.push(pezs.pop())
}

console.log(finalDispenser.dataStore)