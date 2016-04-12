var buffer = new Buffer("Hello World, Rahul Shivsharan");
console.log(buffer.toString());

var myArray = (buffer.toString()).split(" ");

for(var x=0; x < myArray.length; x++){
    console.log(" "+myArray[x]);
}
