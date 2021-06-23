console.log("---To check if string input is numeric---")
var val = "2345";
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("it is a number");
}
var val = "This is a string";
g = isNaN(val);
console.log(val + ' ' + g);
if (g == false) {
    console.log("it is a number");
}

console.log("--- convert a number to string ----");

let string1 = "kishor";
let strTonum = parseInt(string1);
let type = typeof (strTonum);
console.log("type of" + strTonum + " is " + type);

console.log("number to string");
let number = 1500;
number += '';
let numbertype = typeof (number);
console.log("Type of numbertype::" + numbertype);