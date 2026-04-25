
const firstArray=[]
const secoundArray=[]
for(i=0;i<=5000;i++){
    if (i<2500){
        firstArray.push(i)
    }
    secoundArray.push(i)
}
console.time("firstArray.length")
console.timeEnd("firstArray.length")

console.time("secoundArray.length")
console.timeEnd("secoundArray.length")