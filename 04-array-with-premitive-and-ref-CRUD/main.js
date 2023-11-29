// let primitiveFruits = ["Apple", "Banana", "Orange", "Mango"]

// console.log("Initial Primitive Fruits Array:", primitiveFruits)



// CRUD Operations on Primitive Array

// Create: Adding a new fruit
// primitiveFruits.push("Grapes")

// Read: Displaying the fruits
// console.log("After push Fruits:", primitiveFruits)

// Update: Modifying a fruit
// let indexToUpdate = primitiveFruits.indexOf("Banana")
// if (indexToUpdate !== -1) {
//     primitiveFruits[indexToUpdate] = "Cherry"
// }

// Displaying the updated primitive array
// console.log("Updated Primitive Fruits Array:", primitiveFruits)

// Delete: Removing a fruit
// let fruitToRemove = "Orange"
// primitiveFruits = primitiveFruits.filter((fruit)=>{
    
//     if(fruit !== fruitToRemove){
//         return fruit
//     }})

// Displaying the final primitive array
// console.log("Final Primitive Fruits Array:", primitiveFruits)




// ------------------------------------------------------------------------------------------------------------------------------------------




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
// referenceFruits.push({ name: "Grapes", color: "Purple" })
// console.log(referenceFruits)


// Update: Modifying a fruit object
// let fruitIndexToUpdate = referenceFruits.findIndex(
//     (fruit)=>{
//     if(fruit.name === "Banana"){
//         return fruit
//     }
// }
// )
// if (fruitIndexToUpdate !== -1) {
//     referenceFruits[fruitIndexToUpdate].color = "blue"
// }

// Displaying the updated reference array
// console.log("Updated Reference Fruits Array:", referenceFruits)

// Delete: Removing a fruit object
let fruitObjectToRemove = referenceFruits.find((fruit)=>{
    if(fruit.name === "Mango"){
        return fruit
    }
})
// console.log("remove item",fruitObjectToRemove)
if (fruitObjectToRemove) {
    referenceFruits = referenceFruits.filter((fruit)=>{
        // console.log(fruit)
        if(fruit !== fruitObjectToRemove){
        return fruit
    }

    })
}

// Displaying the final reference array
console.log("Final Reference Fruits Array:", referenceFruits);
