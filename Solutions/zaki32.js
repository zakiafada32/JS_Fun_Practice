// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b);

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((acc, current) => acc + current);

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((acc, current) => acc - current);

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, current) => acc * current);

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => Math.min(...nums);

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => Math.max(...nums);

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return nums.pop() + addRecurse(...nums);
};

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
  if (nums.length === 0) {
    return 1;
  }
  return nums.pop() * mulRecurse(...nums);
};

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
  if (nums.length === 0) {
    return Infinity;
  }
  let a = nums.pop();
  let b = minRecurse(...nums);
  return a < b ? a : b;
};

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
  if (nums.length === 0) {
    return -Infinity;
  }
  let a = nums.pop();
  let b = maxRecurse(...nums);
  return a > b ? a : b;
};

// Write a function not that takes a function and returns the negation of its result
const not = (func) => (x) => !func(x);

// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => (...nums) =>
  nums.reduce((acc, current) => func(acc, current), initial);

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  // accPartial,
  // accRecurse,
  // fill,
  // fillRecurse,
  // set,
  // identityf,
  // addf,
  // liftf,
  // pure,
  // curryb,
  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,
  // twice,
  // reverseb,
  // reverse,
  // composeuTwo,
  // composeu,
  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,
  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,
  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,
  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,
  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,
  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,
  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};
