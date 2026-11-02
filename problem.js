// 



setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B")).then(() => console.log("C"));

console.log("D");