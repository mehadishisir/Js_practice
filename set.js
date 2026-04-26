// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set)
// set.add(4)
const arr = ["banana","apple","orange"]
const set = new Set(arr)
set.add("grape")
const set2 =Array.from(set)
set.add("grape")
console.log(set2)