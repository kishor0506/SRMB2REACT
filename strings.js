let a=["lokesh","kishor","srinath","tamil","surya","niranjan"];
const newarr=a.map((x,idx)=>{
    if(idx%2!=0){
        return `Dr.${x}`;
    }else{
        return `Er.${x}`;
    }
});
console.log(newarr);
var format=[];
for(let i=0;i<newarr.length;i++){
if(newarr[i].startsWith("Dr")){
    console.log(`${newarr[i]}${" san"}`);
}else{
    console.log(newarr[i]);
}
}