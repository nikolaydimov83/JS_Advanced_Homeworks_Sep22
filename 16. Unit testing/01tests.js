const { assert } = require("chai");
const {solve}=require('./01requestValidator');

describe('check URI input',()=>{
    it('Throw Error if non-alphanumeric uri is given. * is valid character',()=>{
        let object={
            method:'POST',
            uri:'www.abv.bg*' 
        }
        assert.throws(solve(object),'Invalid request header: Invalid URI');
    })
})