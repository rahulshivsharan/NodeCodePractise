var buff1 = new Buffer("Hello World, Nigga");
console.log(buff1.length);
console.log(buff1[3]);

var buff2 = new Buffer("ABCDEFGH");
for(var x = 0; x < buff2.length;x++){
	console.log("CHAR : "+buff2[x].toString());
} 

console.log("\n");

var buff3 = new Buffer("ABCDEFGH");
for(var x = 0; x < buff3.length;x++){
	console.log("CHAR["+x+"] : "+buff2.slice(x,(x+1)));
}

var buff4 = new Buffer("ABCDEFGHIJKLMNOPQRSTUVWZYZ");
var targetStart = 0;
var sourceStart = 21;
var sourceEnd = 26;
var buff5 = new Buffer(11);
buff4.copy(buff5,targetStart,sourceStart,sourceEnd);
console.log(buff5.toString()); 
