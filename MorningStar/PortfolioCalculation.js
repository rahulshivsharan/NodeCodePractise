var portfolioObj = new Object();
var selectedPortfolio = process.argv[2];
var myPortfolio = undefined,myTransactions = undefined,myHistoryDetail = undefined;
var portfolioDate = process.argv[3];
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

	console.log("Security A = "+securityPortfolioOutput["A"].toFixed(2));		
	console.log("Security B = "+securityPortfolioOutput["B"].toFixed(2));		
	console.log("Security C = "+securityPortfolioOutput["C"].toFixed(2));		
	console.log("Total = "+(securityPortfolioOutput["C"]+securityPortfolioOutput["A"]+securityPortfolioOutput["B"]).toFixed(2));		
}catch(e){
	console.log(e);
}


 
