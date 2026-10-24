function once(fn) {
  let called = false;      // ← n-এর জায়গায় flag, শুরুতে false

  return function () {
    if(called) return;
    called = true;
     fn()
    

  };
  

}
const greet = once(()=>console.log("hello"))
greet()
greet()