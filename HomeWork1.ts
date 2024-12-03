// 1.1. ES6 - Methods (examples, explanations).

// ES5 had only var variable - ES6 introduced let and const

let a = 10;
const b = 20;

// Arrow functions : ES5 require the function keywoard, ES6 introduced arrow functions

// ES5
var aa = function(x, y) {
    return x * y;
 }
 
 // ES6
 const bb = (x, y) => x * y;

 // Template literals : ES5 used concatenation with +, ES6 introduced literals which allow string interpolation

 // ES5
// var message1 = 'Hello ' + name + '!';

// ES6 (Template literal)
// const message2 = `Hello ${name}!`;




// 1.2 Difference between var, let, and const.

// -------------- Let and const allows you to declare a variable with block scope, var doesn't (global scope)
var x = 10; 

if (true) { 
    let y = 20;
    let z = 30; 
//  console.log(y); -- 20
//  console.log(z); -- 30
} 
//  console.log(x);  -- 10




// -------------- Let and const cannot be Redeclared, var can be
let x1 = 10;

//  console.log(x1); -- 10
if (true) {
    let x1 = 20;
//  console.log(x1); -- 20
}
//  console.log(x1); -- 10




// -------------- Let and var can be reassign, const can't 
const y1 = 123;
// y1 = 122; -- compile error




// 1.3. Spread operator.

// -------------- Used to expand arrays or object
const array1 = [10, 20, 30, 40, 50];
const array2 = [...array1, 80, 90];
//  console.log(array2); -- [10, 20, 30, 40, 50, 80, 90]

// -------------- Can help when calling functions
const array3 = [10, 80, 90, 20, 30, 40, 50];
let maxVal = Math.max(...array3);
//  console.log(maxVal); -- 90




// 1.4. Objects: How to iterate over an object, deep copy.

// -------------- Iterate over an object
const objects = { a: 1, b: 2, c: 3 };
for (let key in objects) {
//    console.log(`${key}: ${objects[key]}`);  -- a: 1, b: 2, c: 3
}
// -------------- Deep Copy  !!!!!!!!!
const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj)); // Breaks references but can't handle functions/special objects   




// 1.5. Arrays - accessor, iteration, and mutator methods (which they are, how to use them).

// -------------- Accessor methods : includes(), indexOf(), join(), toString(), slice()
const array5 = [10, 20, 30];
// console.log(array5.indexOf(10)); -- 0
// console.log(array5.indexOf(20)); -- 1

const array6 = ['cat', 'dog', 'cow'];
// console.log(array6.includes('cat')); -- true

// -------------- Iteration methods : forEach(), map(), flatMap(), filter(), reduce(), reduceRight()
// console.log(array5.map(val => val + 2)); -- [12, 22, 32]

// -------------- Mutator Methods: push(), pop(), shift, sort(), splice()
array5.push(10) 
// console.log(array5); -- [10, 20, 30, 10]




// 1.6. Promises. Callback.

// -------------- Callbacks
// A callback is a function passed as an argument to another function.

function calculateSum(a, b, callback) {
    const sum = a + b;
    callback(sum); 
}
  
function printResult(result) {
    console.log("The sum is:", result);
}
  
// calculateSum(5, 7, printResult); -- 12

// -------------- Promises
// A Promise contains both the producing code and calls to the consuming code
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
 //     myResolve(); // when successful
 //     myReject();  // when error
});
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
);




// 1.7. Async. Await.
// -------------- Async
// The keyword async before a function makes the function return a promise:

function display(result)
{
    console.log("The value is:", result);
}

async function func() {
    return "InternshipFullStack";
}
func().then(
    function(value) {display(value);},
);





// -------------- Await
// Can only be used in an async function 
// Makes the function pause the execution and wait for a resolved promise before it continues
async function* func1() {
    yield "Hello";
    yield "World";
    yield "!";
}
  
function display1(value) {
    console.log("The value is:", value);
}
  
async function displayValues() {
    for await (const value of func1()) {
        display1(value);
    }
}

// displayValues();


// 1.8. Closures.
// A closure function is a function that "remembers" the variables from its environment, even after the outer function has finished executing

function outerFunc() {
    let var1 = 0;

    function innerFunc() {
         var1++;
         console.log(var1);
    }

    return innerFunc();
}


const etc = outerFunc();

// 1.9. useState. useRef.
/* 1. useState Hook

The useState hook is used to add state to a functional component. It returns an array with two elements:

    The current state value.
    A function that allows you to update that state.

const [state, setState] = useState(initialValue);

    state: Holds the current value of the state.
    setState: A function that updates the state with a new value.
    initialValue: The initial state value when the component is first rendered.

2. useRef Hook

The useRef hook is used to persist values across renders without triggering re-renders. It is commonly used for:

    Accessing DOM elements directly.
    Storing mutable values that don’t need to trigger re-renders.

Basic Syntax:

const ref = useRef(initialValue);

    ref.current: A mutable object that holds the value across renders.
*/
