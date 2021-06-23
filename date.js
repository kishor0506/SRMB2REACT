console.log("----today's date----");
const d=new Date;
console.log(d)
console.log("----past date----");
const tdy=new Date;
const ydy=new Date(tdy);
ydy.setDate(ydy.getDate()-1);
tdy.toDateString();
ydy.toDateString();
console.log(`current date${tdy}`)
console.log(`yesterday date${ydy}`);
