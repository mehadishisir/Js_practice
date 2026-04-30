// Some

const numbers = [1, 2, 3, 7, 5];
const hasEvenNumber = numbers.some(num=>num%2 === 0)
// console.log("Has Even Number:", hasEvenNumber);



const currentUserRoles = ["user", "editor", ];

const featureAccessRoles = ["admin", "manager"];


const hasAccess = currentUserRoles.some(role=> featureAccessRoles.includes(role))
// console.log("Has Access:", hasAccess);

// array.from

const range = (start,stop,step)=>Array.from({length:Math.ceil((stop-start)/step)},(_,i)=>start+i*step)
console.log("Range from 0 to 10 with step 2:", range(1,10,2));
