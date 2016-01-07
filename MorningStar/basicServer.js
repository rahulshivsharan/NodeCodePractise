var 	sys = require("sys"),
    	my_HTTP = require("http"),
    	url = require('url'),
    	qs = require('querystring'),
	fs = require('fs');

var porfolioCalculation = function(portfolioNum,portfolioDate){
	var portfolioObj = new Object();
	var selectedPortfolio = portfolioNum;
	var myPortfolio = undefined,myTransactions = undefined,myHistoryDetail = undefined;
	var portfolioDate = portfolioDate;
	var securityObj = new Object(); 
	var securityPortfolioOutput = new Object(); 
	var _ = require("underscore");
	var moment = require("moment");
	try{
		securityPortfolioOutput["A"] = 0;
		securityPortfolioOutput["B"] = 0;
		securityPortfolioOutput["C"] = 0;

		if(selectedPortfolio === undefined){
			throw "Please pass the portfolio as the commandline argument";	
		}
		if(portfolioDate === undefined){
			throw "Please pass the date for portfolio as the commandline argument";
		}
		if(!moment(portfolioDate,"YYYY-MM-DD").isValid()){
			throw "Portfolio date is invalid, please pass date in format YYYY-MM-DD."
		}	
		portfolioObj["3"] = require("./Portfolios/3.json");
		portfolioObj["4"] = require("./Portfolios/4.json");

		securityObj["A"] = require("./Securities/A.json");  
		securityObj["B"] = require("./Securities/B.json");  
		securityObj["C"] = require("./Securities/C.json"); 

		myPortfolio = portfolioObj[selectedPortfolio];
		myTransactions = myPortfolio.transactions;

		_.each(myTransactions,function(txn){
			var selectedSecurity = securityObj[txn.securityId];
			var historyDetail =  _.findWhere(selectedSecurity.historyDetails,{endDate : txn.date});
			var closeDate = undefined;
			if(historyDetail !== undefined){
				if(txn.type === "buy"){
					securityPortfolioOutput[txn.securityId] +=  txn.amount / historyDetail.value;
				}else{
					securityPortfolioOutput[txn.securityId] -=  txn.amount / historyDetail.value;
				}
			}else{
				_.each(selectedSecurity.historyDetails,function(history){
					if(moment(history.endDate).isBefore(txn.date)){
						closeDate = history.endDate;
					}else{
						return false;
					}
				});

				historyDetail =  _.findWhere(selectedSecurity.historyDetails,{endDate : closeDate});
				if(historyDetail !== undefined){
					if(txn.type === "buy"){
						securityPortfolioOutput[txn.securityId] +=  txn.amount / historyDetail.value;
					}else{
						securityPortfolioOutput[txn.securityId] -=  txn.amount / historyDetail.value;
					}
				}	
			}

		});

		myHistoryDetail = _.findWhere(securityObj["A"].historyDetails,{endDate : portfolioDate});
		securityPortfolioOutput["A"] *=  myHistoryDetail.value;		
	
		myHistoryDetail = _.findWhere(securityObj["B"].historyDetails,{endDate : portfolioDate});
		securityPortfolioOutput["B"] *=  myHistoryDetail.value;		
	
		myHistoryDetail = _.findWhere(securityObj["C"].historyDetails,{endDate : portfolioDate});
		securityPortfolioOutput["C"] *=  myHistoryDetail.value;	
		securityPortfolioOutput["total"] = (securityPortfolioOutput["C"]+securityPortfolioOutput["A"]+securityPortfolioOutput["B"]).toFixed(2);
		
		sys.puts("Security A = "+securityPortfolioOutput["A"].toFixed(2));		
		sys.puts("Security B = "+securityPortfolioOutput["B"].toFixed(2));		
		sys.puts("Security C = "+securityPortfolioOutput["C"].toFixed(2));		
		sys.puts("Total = "+(securityPortfolioOutput["C"]+securityPortfolioOutput["A"]+securityPortfolioOutput["B"]).toFixed(2));		
	}catch(e){
		console.log(e);
	}

	return securityPortfolioOutput;
};


my_HTTP.createServer(function(request,response){
	sys.puts("I got kicked");
        var body = "",portfolioNum = undefined,portfolioDate = undefined,portfolioOutput = undefined;
        if(request.method === 'POST'){
		request.on('data', function (data) {
            		body += data;
            		// Too much POST data, kill the connection!
            		if (body.length > 1e6){
                		request.connection.destroy();
			}
        	});
		request.on('end', function () {
            		var post = qs.parse(body);
			for(var prop in post){
				JSON.parse(prop,function(k,v){
					if(k === "portfolioNum"){
						portfolioNum = v;
					}else if(k === "portfolioDate"){
						portfolioDate = v;
					}else{
						return false;;
					}
				});
			}
				
			sys.puts("portfolioNum = "+ portfolioNum);
			sys.puts("portfolioDate = "+portfolioDate);
			portfolioOutput = porfolioCalculation(portfolioNum,portfolioDate);	
    			
			response.writeHeader(200, {"Content-Type": "application/json"});
    			//response.write(""+portfolioOutput);
    			response.end(JSON.stringify(portfolioOutput));
        	});
	}else{

		fs.readFile('./index.html',function (err, data){
        		response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        		response.write(data);
        		response.end();
    		});
	} 
	/*
    	response.writeHeader(200, {"Content-Type": "text/plain"});
    	response.write("Hello World");
    	response.end();
	*/	
}).listen(8045);
sys.puts("Server is running on port 8045"); 
