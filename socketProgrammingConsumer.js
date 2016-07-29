var net = require("net");

var HOST = "127.0.0.1";
var PORT = "6578";

var client = new net.Socket();

client.connect(HOST,PORT,function(){
	console.log("CONNECTED[Consumer] "+HOST+":"+PORT);
	client.write("Hi Server");
});

client.on("data",function(data){	
	console.log(data.toString());
	client.destroy();
});

client.on("close",function(){
	console.log("Connection closed");
});