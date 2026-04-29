// Some

const numbers = [1, 2, 3, 7, 5];
const hasEvenNumber = numbers.some(num=>num%2 === 0)
console.log("Has Even Number:", hasEvenNumber);



const currentUserRoles = ["user", "editor", ];

const featureAccessRoles = ["admin", "manager"];


const hasAccess = currentUserRoles.some(role=> featureAccessRoles.includes(role))
console.log("Has Access:", hasAccess);