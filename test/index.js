'use strict'
const SMS = require('../');
const Assert = require('chai').assert;

describe('Testing infobip api(SMS)',()=>{
	describe('without params',()=>{
		it('without to',()=>{
			SMS({
				from:'nami!!'
				,text:'hello'
			},(response)=>{
        			Assert.isNotNull(response.error);
			});
		});
		it('without text',()=>{
                        SMS({
				to : ["51937810936"]
                                ,from:'nami!!'
                        },(response)=>{
                                Assert.isNotNull(response.error);
                        });
		});
	});
	describe('all done',()=>{
		it('full params',()=>{
                        SMS({
				to:["51937810936"]
                                ,from:'nami!!'
                                ,text:'hello'
                        },(response)=>{
                                Assert.isNotNull(response.result[0].messageId);
                        });			
		})
	})
});
