// Nan - not a number
var x = 100
var y = "Apple";
var z = x / y;
console.log(z);

// Infinity or -Infinity
var myNumber = 2 
var txt = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
txt = txt + myNumber;
console.log(txt);

// Number methods and properties
var a = 123;
var b = a.toString();
console.log(b); 

var aa = 9.656;
var bb = aa.toFixed(0);
var c = aa.toFixed(2);
var cc = aa.toFixed(4);
console.log(bb);
console.log(c);
console.log(cc);

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("10.33"));
console.log(Number("10,33"));

console.log(parseInt("9"));
console.log(parseInt("9.33"));
console.log(parseInt("9 11 13"));
console.log(parseInt("9 years"));
console.log(parseInt(" years 9"));

// Arrays
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars[2]);
cars[1] = "Opel";
console.log(cars);
console.log(cars.length); 
