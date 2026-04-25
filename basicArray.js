
const firstArray=[]
const secoundArray=[]
for(i=0;i<=5000;i++){
    if (i<2500){
        firstArray.push(i)
    }
    secoundArray.push(i)
}
console.log(firstArray.length)
console.log(secoundArray.length)
console.time("map1")
const firstUser=firstArray.map((num)=>{
    return num*2
})
console.timeEnd("map1")
console.time("map2")
const secondUser=secoundArray.map((num)=>{
    return num*2
})
console.timeEnd("map2")

