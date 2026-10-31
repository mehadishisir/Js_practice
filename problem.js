// // 

// console.log(typeof foo);   // লাইন ১

// function foo() {
//   return 1;
// }

// console.log(typeof bar);   // লাইন ২

// var bar = function () {
//   return 2;
// };



// const counter = {
//     count:0,
//     increment: function (){
//         setTimeout(()=>{
//             this.count++;
//             console.log(this.count);

//         },0);
//     }

// }

// counter.increment()


// const users = [
//   { name: "Ali", age: 25, active: true },
//   { name: "Rahim", age: 17, active: false },
//   { name: "Karim", age: 30, active: true },
// ];

// const nameU = users.map(u=>u.name)
// console.log(nameU)

// const activeName = users.filter(nameU => nameU.active,nameU.name)
// console.log(activeName)


// const activeUser = activeName.map(n=>n.name)
// console.log(activeUser)



// const products = [
//   { name: "Phone", price: 500 },
//   { name: "Tab", price: 300 },
//   { name: "Laptop", price: 1000 },
// ];

// const total = products.reduce((acc, p) => acc + p.price, 0);
// console.log(total);


const users = [
  { name: "Ali", age: 25, active: true },
  { name: "Rahim", age: 17, active: false },
  { name: "Karim", age: 30, active: true },
  { name: "Fatima", age: 22, active: true },
];


const newUser = users.filter(n=>n.active && n.age>=20).map(n=>n.name)
console.log(newUser)