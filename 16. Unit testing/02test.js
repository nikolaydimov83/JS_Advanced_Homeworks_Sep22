const {assert}=require('chai');
let {isOddOrEven}=require('./02oddEven');

describe('isOddOrEven recieves non-string input',()=>{
    it('should return `undefined`',()=>{
        let input=7
        assert.isUndefined(isOddOrEven(input),true);
    })
});

describe('Recieves string input with odd length',()=>{
    it('should return `odd`',()=>{
        let input='aaa'
        assert.equal(isOddOrEven(input),'odd');
    })
});

describe('Recieves string input with even length',()=>{
    it('should return `even`',()=>{
        let input='aaaa'
        assert.equal(isOddOrEven(input),'even');
    })
});

describe('Recieves multiple strings as input with even and odd lengths',()=>{
    it('should return `even`',()=>{
        let input='aaaa'
        assert.equal(isOddOrEven(input),'even');

        let input1='aaa';
        assert.equal(isOddOrEven(input1),'odd');

        let input2='aaaaa';
        assert.equal(isOddOrEven(input1),'odd');

        let input3='aaaaaa';
        assert.equal(isOddOrEven(input1),'even');
    })
});