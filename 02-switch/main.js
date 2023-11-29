// let fruit = "Apple";
let fruit = prompt('Fruit name?')
fruit.toLowerCase()
switch (fruit) {
    case "Banana":
        console.log("It's a banana.");
        break;
    case "Apple":
        console.log("It's an apple.");
        break;
    case "Orange":
        console.log("It's an orange.");
        break;
    default:
        console.log(`${fruit}..., It's something else.`);
}