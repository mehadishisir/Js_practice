function outer() {
    let name = "Rahim";
    
    function inner() {
        console.log(name); 
    }
    
    inner();
}
outer(); 