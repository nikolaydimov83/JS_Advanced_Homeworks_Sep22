const {assert}=require('chai');
const {lookupChar}=require('./03charAtIndex');

describe('string input is not a string',()=>{
    it('should return undefined',()=>{
        let string=9;
        let index=0;
        assert.isUndefined(lookupChar(string,index),true)
    })
})

describe('index input is not an integer',()=>{
    it('should return undefined',()=>{
        let string='aaaa';
        let index=9.59;
        assert.isUndefined(lookupChar(string,index),true);

        let index1='sadasdsad';
        assert.isUndefined(lookupChar(string,index1),true);

        let index2=['sadasdsad',1,true];
        assert.isUndefined(lookupChar(string,index2),true);

    })
})

describe('index input ',()=>{
    it('should be greater than 0 and less than string.length',()=>{
        let index=-1;
        let string='aaaaaa';
        assert.equal(lookupChar(string,index),'Incorrect index');

        let index3=8;
        assert.equal(lookupChar(string,index3),'Incorrect index');

    })
})