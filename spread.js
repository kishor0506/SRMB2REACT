function sum(val,...data){
    let res=0;
    for(let i=0;i<data.length;i++){
        res=res+data[i];
    }
    res+=val;
    return res;
}
console.log(sum(10,20,30,60,50));

console.log("-----spread using object-----------");
let emp1={
    id:123,
    name:"kishor",
    dept:"ccx"
}
let emp2={
    id:231,
    name:"srinath",
    dept:"hr"
}
let emp3={
    id:654,
    name:"loki",
    dept:"BA"
}



let employee={emp1,...emp2,...emp3};
console.log(employee);
let location={
    loc:"RMZ millennium park",
    ...employee
}
console.log(location);