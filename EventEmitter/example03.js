var EventEmitter = require("events");
var util = require("util");

var Ticker = function(){
    var self = this;
    EventEmitter.call(self);
    self.start = function(){
        setInterval(function(){
	    self.emit("tick");	
	},1000);
    }

    self.on("tick",function(){
        console.log("Keep Ticking");
    });
}

util.inherits(Ticker,EventEmitter);

var ticker = new Ticker();
ticker.start();

