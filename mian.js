
Function.prototype.myCall = function(thisArg, ...args) {
  const context = thisArg || globalThis; 

  const fnSymbol = Symbol();

  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);

  delete context[fnSymbol];

  return result;
}


const user1 = {
  name: "Alice",
  greet: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const user2 = { name: "Bob" };

user1.greet.myCall(user2);
