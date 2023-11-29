# functions (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: functions expressions


```javascript
// Function Expression
const add = function (x, y) {
    return x + y;
}

// Returning a Function
function multiplier(factor) {
    return function (x) {
        return x * factor;
    }
}

// Passing Arguments and Receiving Parameters
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

// Immediately Invoked Function Expression (IIFE)
(function () {
    const message = "This is an IIFE";
    console.log(message);
})();

// Example usage:
const sum = add(3, 5);
console.log(`Sum: ${sum}`);

const double = multiplier(2);
console.log(`Double of 4: ${double(4)}`);

greet("Vasanth");

```

### Live link -> 
[Demo Link](https://vk2401.github.io/Cyberdude-JavaScript-Challenges/05-functions/index.html)


## References:

[![functions code review](https://i.ytimg.com/vi/-_8fbcy-TKY/maxresdefault.jpg)](http://www.youtube.com/watch?v=-_8fbcy-TKY "functions code review Cyberdude youtube Live")
