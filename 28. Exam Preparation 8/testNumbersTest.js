const { assert } = require('chai');
const {testNumbers} = require('./testNumbers');


describe('Test testNumbers',()=>{
    describe('Tets sumNumbers',()=>{
        it('Returns undefined with num1 === string',()=>{
            assert.equal(testNumbers.sumNumbers('sdsa',5),undefined)
        })
        it('Returns undefined with num2 === string',()=>{
            assert.equal(testNumbers.sumNumbers(5,'dsadas'),undefined)
        })
        it('Returns undefined with num2 === string',()=>{
            assert.equal(testNumbers.sumNumbers(5,'5'),undefined)
        })
        it('Returns undefined with num2&&num1 === string',()=>{
            assert.equal(testNumbers.sumNumbers(`asdsa`,'sdsa5'),undefined)
        })
        it('Returns value.toFixed(2) with num2&&num1 === number Two floating',()=>{
            let num1=5.3333
            let num2=5.4187
            assert.equal(testNumbers.sumNumbers(num1,num2),(num1+num2).toFixed(2))
        })
        it('Returns value.toFixed(2) with num2&&num1 === number Two floating',()=>{
            let num1=-5.3333
            let num2=5.4187
            assert.equal(testNumbers.sumNumbers(num1,num2),(num1+num2).toFixed(2))
        })
    })
    describe('Test function numberChecker',()=>{
        it('Should throw error when Number(input) is string',()=>{
            assert.throws(()=>testNumbers.numberChecker('dsaas'),'The input is not a number!')
        })
        it('Should throw error when Number(input) is non-empty array',()=>{
            assert.throws(()=>testNumbers.numberChecker([5,6,7]),'The input is not a number!')
        })
        it('Should throw error when Number(input) is object',()=>{
            assert.throws(()=>testNumbers.numberChecker({}),'The input is not a number!')
        })

        it('Should return odd with odd Integer',()=>{
            assert.equal(testNumbers.numberChecker(5),'The number is odd!')
        });
        it('Should return even with odd Integer',()=>{
            assert.equal(testNumbers.numberChecker(8),'The number is even!')
        });
        it('Should return odd with odd Integer',()=>{
            assert.equal(testNumbers.numberChecker(-5),'The number is odd!')
        });
        it('Should return even with odd Integer',()=>{
            assert.equal(testNumbers.numberChecker(-8),'The number is even!')
        });
        it('Should return odd with odd real',()=>{
            assert.equal(testNumbers.numberChecker(-5.552),'The number is odd!')
        });
        it('Should return even with odd real',()=>{
            assert.equal(testNumbers.numberChecker(-8.553),'The number is odd!')
        });
        it('Should return odd with odd real',()=>{
            assert.equal(testNumbers.numberChecker(5.689),'The number is odd!')
        });
        it('Should return even with odd real',()=>{
            assert.equal(testNumbers.numberChecker(11.553),'The number is odd!')
        });
    })
    describe('Average',()=>{

        it('Undefined with empty array',()=>{
            assert.isNaN(testNumbers.averageSumArray([]))
        });
        it('Undefined with string as input',()=>{
            assert.isNaN(testNumbers.averageSumArray('asdasds'))
        });
        it('Undefined with array with at least one string as input',()=>{
            assert.isNaN(testNumbers.averageSumArray(['asdasds',5,6]))
        });
        it('should calc correct average',()=>{
            assert.equal(testNumbers.averageSumArray([5,8,2]),5)
        })
        
    })
})