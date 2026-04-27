// sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// const sortedNumbers = numbers.sort((a,b)=>a-b)
// console.log("Sorted Numbers:", sortedNumbers);
// console.log("Original Numbers:", numbers);

const sortedFruits = fruits.sort((a,b)=>a.localeCompare(b))
console.log("Sorted Fruits:", sortedFruits);
console.log("Original Fruits:", fruits);