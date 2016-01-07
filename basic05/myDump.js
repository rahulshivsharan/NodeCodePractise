var eventEmitter = require("events").EventEmitter;
var utility = require("util");

var Ticker = function(){
	var self = this;

	setInterval(function(){
		self.emit("tick");
	},1000);
};

utility.inherits(Ticker,eventEmitter);

var ticker = new Ticker();

ticker.addListener("tick",function(){
	console.log("Ticked");
});
