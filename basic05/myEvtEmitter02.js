var myUtilityObj = require("util");
var myDummyEventEmitter = require("events").EventEmitter;

var MyTicker = function(){
	(function(self){		
		setInterval(function(){
			self.emit("tick");
		},1000);
	})(this);
};

myUtilityObj.inherits(MyTicker,myDummyEventEmitter);

var tickerObj = new MyTicker();

tickerObj.on("tick",function(){
	console.log("Ticked Now[XX] !!!");
});
