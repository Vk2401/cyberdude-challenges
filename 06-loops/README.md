# Loops (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Loops expressions


```javascript
// Define an array of objects
const myArray = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
    { id: 4, name: 'Alice', age: 28 }
  ];
  
  // 1. Using a for loop
  console.log('Using for loop:');
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
  
  // 2. Using forEach method
  console.log('\nUsing forEach:');
  myArray.forEach(item => {
    console.log(item);
  });
  
  // 3. Using for...of loop
  console.log('\nUsing for...of loop:');
  for (const item of myArray) {
    console.log(item);
  }
  
  // 4. Using map method
  console.log('\nUsing map method:');
  myArray.map(item => {
    console.log(item);
  });
  
  // 5. Using for...in loop (not recommended for arrays)
  console.log('\nUsing for...in loop:');
  for (const index in myArray) {
    console.log(myArray[index]);
  }
  
  // Using do...while loop
console.log('Using do...while loop:');
let doWhileIndex = 0;
do {
  console.log(myArray[doWhileIndex]);
  doWhileIndex++;
} while (doWhileIndex < myArray.length);

// Using while loop
console.log('\nUsing while loop:');
let whileIndex = 0;
while (whileIndex < myArray.length) {
  console.log(myArray[whileIndex]);
  whileIndex++;
}
```

### Live link -> 
[Demo Link](https://vk2401.github.io/Cyberdude-JavaScript-Challenges/06-Loops/index.html)


## References:

[![Loops code review](https://i.ytimg.com/vi/XmZKIXmVOCA/maxresdefault.jpg)](http://www.youtube.com/watch?v=XmZKIXmVOCA "Loops code review Cyberdude youtube Live")
