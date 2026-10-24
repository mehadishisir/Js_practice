function outer() {
    let name = "Rahim";
    
    function inner() {
        console.log(name); 
    }
    
    console.log(inner());
}
console.log(outer()); 