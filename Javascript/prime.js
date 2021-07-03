let num=[18,22,38,49,5,61,75,81,19,10,12,13,45,89,7815,45]
let prime=num.filter(x=>{
    for (let i=2;i<num.length;i++){
        if(x%i==0)return false;
    }return x!==1;
});
console.log("number="+num);
console.log(`${"prime number="}${prime}`);