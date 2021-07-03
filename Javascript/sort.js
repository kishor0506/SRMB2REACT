const student=[];
student[0]={id:"001",name:"kishor",marks:50,address:"sholingnallur",pincode:"600100"};
student[1]={id:"002",name:"Arun",marks:55,address:"velacherry",pincode:"600096"};
student[2]={id:"003",name:"loki",marks:45,address:"kolathur",pincode:"600069"};
student[3]={id:"004",name:"srinath",marks:65,address:"k.k nagar",pincode:"600114"};
student[4]={id:"005",name:"tamil",marks:25,address:"chennai",pincode:"600123"};
student[5]={id:"006",name:"surya",marks:35,address:"bangalore",pincode:"600215"};
console.log(student);

student.sort((a,b)=>{
    let sa=a.name.toLowerCase();
    let sb=b.name.toLowerCase();
    if(sa<sb){
        return -1
    }
    if(sa>sb){
        return 1
    }
    else{
        return 0
    }
});
student.forEach((e)=>{
console.log(`NAME:${e.name} ID:${e.id} Marks:${e.marks} Address:${e.address} Pincode:${e.pincode}`)
});
console.log("----------sort based on address------------");
student.sort((a, b) => {
    let sa = a.address.toLowerCase();
    let sb = b.address.toLowerCase();

    if (sa < sb) {
        return -1;
    }
    if (sa > sb) {
        return 1;
    }
    return 0;
});
student.forEach((e) => {
    console.log(`NAME: ${e.name}  id: ${e.id} Mark: ${e.marks} address: ${e.address}`);
});

let result = student.filter(citysort =>citysort.address == "chennai" && citysort.address== "banglore");
        console.log(result);
// const z = student.filter(
//     (a) => (a.address != "chennai") & (a.address != "bangalore")
//   );


let addmarks=student.map((a)=>{
    return`${ a.marks+20}`
});
console.log(addmarks)
//console.log(`NAME: ${addmarks.name}  id: ${addmarks.id} Mark: ${addmarks.marks} address: ${addmarks.address}`);