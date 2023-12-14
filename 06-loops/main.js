const myFamily = [
    { id: 1, name: 'Dad', age: 49 },
    { id: 2, name: 'Mom', age: 45 },
    { id: 3, name: 'Brother', age: 18 },
    { id: 4, name: 'Me', age: 21 }
]

// Using a for loop
// console.log('Using for loop:')
// for (let i = 0; i < myFamily.length ;i++) {
//     console.log(`${myFamily[i].name} is ${myFamily[i].age} years old`)
// }



// Using forEach method
// console.log('Using forEach:')
// myFamily.forEach(item => {
//     // console.log(item)
//     console.log(`${item.name} is ${item.age} years old`)
// })

// Using for...of loop
// console.log('Using for...of loop:')
// for (const item of myFamily) {
//     console.log(`${item.name} is ${item.age} years old`)
// }

// Using map method
// console.log('Using map method:')
// myFamily.map(item => {
//     console.log(`${item.name} is ${item.age} years old`)
// })

// Using for...in loop (not recommended for arrays)
// console.log('Using for...in loop:')
// for (const index in myFamily) {
//     console.log(`${myFamily[index].name} is ${myFamily[index].age} years old`)
// }

// Using do...while loop
// console.log('Using do...while loop:')
// let doWhileIndex = 0
// do {
//     console.log(myFamily[doWhileIndex])
//     doWhileIndex++
// } while (doWhileIndex < myFamily.length)

// Using while loop
console.log('Using while loop:')
let whileIndex = 0
while (whileIndex < myFamily.length) {
    console.log(myFamily[whileIndex])
    whileIndex++
}