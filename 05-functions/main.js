// note: we can't able to call expression function like normalfunction in any place because hoist not supported
// const sum = add(3, 5);
let myName;
let n1;
let n2;
(() => {
     myName = "vasanth";
     n1 = 2;
     n2 = 2;
    
})();

// Function Expression
const add = function (x, y) {
    return x + y;
}

// Arrow Function
const arrow = ()=> {
    console.log('this is arrow function')
}


// Passing Arguments 
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

// Immediately Invoked Function Expression (IIFE)
(function () {
    const message = "This is an IIFE";
    console.log(message);
})();



const sum = add(n1, n2);

console.log(`Sum: ${sum}`);


greet(myName);

arrow()
