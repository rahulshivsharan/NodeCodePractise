var myUtilityObj = require("util");
var myDummyEventEmitter = require("events").EventEmitter;

var MyTicker = function(){
	var self = this;
	
	setInterval(function(){
		self.emit("tick");
	},1000);
};

myUtilityObj.inherits(MyTicker,myDummyEventEmitter);

var tickerObj = new MyTicker();

tickerObj.on("tick",function(){
	console.log("Ticked Now !!!");
});

