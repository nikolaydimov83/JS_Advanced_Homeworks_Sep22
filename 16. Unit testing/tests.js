const { assert } = require("chai");
const {arraySum}=require('./index');

describe('When the first parameter is not array',()=>{
    it('should return NaN',()=>{
        
        let array=1;
        
            let a= arraySum(array)
       
            assert.equal(isNaN(a),true);
        
        
    })
})

describe('when start index is less than 0',()=>{
    it('should be considered 0',()=>{
        let array=[1,2,3,4,5];
        let a=arraySum(array,-1,4)
        assert.equal(a,15);
    })
})

