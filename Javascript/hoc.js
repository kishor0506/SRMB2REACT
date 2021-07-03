const a=(val)=>val*val;
const b=(data,fn)=>{
    let c=data*20
    return fn(c);
}
let d=b(10,a)
console.log(d);