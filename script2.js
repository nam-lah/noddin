
script1 = require('./script1.js')

a = script1.thisNumber;
b = 5;

setTimeout(() =>{
	console.log( a * b );
},
	1500);
