'use strict'
const R = require('request');
const Joi = require('joi');
//-- schema --

var Schema = Joi.object().keys({
	"from":Joi.string().required()
	,"to":Joi.array().min(1).unique().items(Joi.string() )
	,"text":Joi.string().required()
});
module.exports = (data,cb)=>{
	Joi.validate(data,Schema,(Jerr,Jvalue)=>{
		if(Jerr){
			cb({error:Jerr,result:0});
		}else{
			var options = {
				url : "https://api.infobip.com/sms/1/text/single"
				,headers:{
					"Authorization":`Basic ${process.env.INFOBIPKEY}`
					,"Content-Type" : "application/json"
					,"Accept" : "application/json"
				}
				,method:"POST"
				,body:data
				,json:true
			};
			R(options,(Rerror,Rincoming,Rresponse)=>{
				if(Rerror){
					cb({error:Rerror,result:0});
				}else{
					cb({error:0,result:Rresponse.messages});
				}
			});
		}
	});
}

