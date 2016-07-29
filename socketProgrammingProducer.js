var net = require("net");

var HOST = "127.0.0.1";
var PORT = "6578";


///////////////// creating socket(One way) ////////////////////////
var server = net.createServer(createSocket);
server.listen(HOST,PORT);

function createSocket(sock){

	sock.on("data",function(data){
		console.log(data.toString());
		sock.write("Hi Client");
		server.close();	
	});

	/*
	sock.on("close",function(data){
		console.log("socket closed");
	});*/
}

/*
var server = net.createServer();
server.listen(HOST,PORT);


server.on("connection",function(sock){
	
	sock.on("data",function(data){
		console.log("Data[Producer] "+data);
		sock.write("You said[Producer] '"+data+"'");
	});
	
	sock.on("close",function(){
		console.log("Data[Producer] socket closing...");
		sock.destroy();
	});	
});

server.on("close",function(data){
	console.log("Server closing....");
	server.close(function(){
		console.log("Server closing....");	
	});
});
*/
console.log("Server is listening on socket "+HOST+" : "+PORT);