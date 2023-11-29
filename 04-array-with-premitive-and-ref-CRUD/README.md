# Array CRUD Both datatype (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Array CRUD Both datatype(Primitive and Reference)


```javascript
// simple Array CRUD Both datatype(Primitive and Reference) practice

 let primitiveFruits = ["Apple", "Banana", "Orange", "Mango"]

console.log("Initial Primitive Fruits Array:", primitiveFruits)

// CRUD Operations on Primitive Array

// Create: Adding a new fruit
primitiveFruits.push("Grapes")

// Read: Displaying the fruits
console.log("Fruits:", primitiveFruits)

// Update: Modifying a fruit
let indexToUpdate = primitiveFruits.indexOf("Banana")
if (indexToUpdate !== -1) {
    primitiveFruits[indexToUpdate] = "Cherry"
}

// Displaying the updated primitive array
console.log("Updated Primitive Fruits Array:", primitiveFruits)

// Delete: Removing a fruit
let fruitToRemove = "Orange"
primitiveFruits = primitiveFruits.filter((fruit)=>{
    if(fruit.name !== fruitToRemove){
        return fruit
    }})

// Displaying the final primitive array
console.log("Final Primitive Fruits Array:", primitiveFruits)


// Reference array representing fruit objects
let referenceFruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" },
    { name: "Mango", color: "Yellow" }
]

// Displaying the original reference array
console.log("Original Reference Fruits Array:", referenceFruits)

// CRUD Operations on Reference Array

// Create: Adding a new fruit object
referenceFruits.push({ name: "Grapes", color: "Purple" })


// Update: Modifying a fruit object
let fruitIndexToUpdate = referenceFruits.findIndex(
    (fruit)=>{
    if(fruit.name === "Banana"){
        return fruit
    }
}
)
if (fruitIndexToUpdate !== -1) {
    referenceFruits[fruitIndexToUpdate].color = "Orange Yellow"
}

// Displaying the updated reference array
console.log("Updated Reference Fruits Array:", referenceFruits)

// Delete: Removing a fruit object
let fruitObjectToRemove = referenceFruits.find((fruit)=>{
    if(fruit.name === "Mango"){
        return fruit
    }
})
console.log(fruitObjectToRemove)
if (fruitObjectToRemove) {
    referenceFruits = referenceFruits.filter((fruit)=>{
        if(fruit !== fruitObjectToRemove){
        return fruit
    }

    })
}

// Displaying the final reference array
console.log("Final Reference Fruits Array:", referenceFruits);

```

### Live link -> 
[Demo Link](https://vk2401.github.io/Cyberdude-JavaScript-Challenges/04-array-with-premitive-and-ref-CRUD/index.html)


## References:

[![Array CRUD Both datatype(Primitive and Reference) code review](https://i.ytimg.com/vi/-_8fbcy-TKY/maxresdefault.jpg)](http://www.youtube.com/watch?v=-_8fbcy-TKY "Array CRUD Both datatype(Primitive and Reference) code review Cyberdude youtube Live")
