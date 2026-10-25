// // 

// console.log(typeof foo);   // লাইন ১

// function foo() {
//   return 1;
// }

// console.log(typeof bar);   // লাইন ২

// var bar = function () {
//   return 2;
// };



const counter = {
    count:0,
    increment: function (){
        setTimeout(()=>{
            this.count++;
            console.log(this.count);

        },0);
    }

}

counter.increment()