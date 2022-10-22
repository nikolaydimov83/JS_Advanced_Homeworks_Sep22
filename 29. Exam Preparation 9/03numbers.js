const { assert } = require('chai');
const {numberOperations} = require('./03. Number Operations_Resources');

describe('Test numberOperations',()=>{
    describe('Test powNumber(num)',()=>{
        it('Should return Nan when num is string',()=>{
            assert.isNaN(numberOperations.powNumber('sad'))
        })
        it('Should return Nan when num is object',()=>{
            assert.isNaN(numberOperations.powNumber({'sad':`sad`}))
        })
        it('Should return Nan when num is object',()=>{
            assert.equal(numberOperations.powNumber([]),0)
        })
        it('Should return 0 when num is empty string',()=>{
            assert.equal(numberOperations.powNumber(''),0)
        })
        it('Should return 0 when num is empty string',()=>{
            assert.equal(numberOperations.powNumber(5),25)
        })
        it('Should return 0 when num is empty string',()=>{
            assert.equal(numberOperations.powNumber(-5),25)
        })
        it('Should return 0 when num is empty string',()=>{
            assert.equal(numberOperations.powNumber(12.5559),12.5559*12.5559)
        })
        it('Should return 0 when num is empty string',()=>{
            assert.equal(numberOperations.powNumber(0),0)
        })
    })

    describe('numberChecker',()=>{
        it('should throw error when Nnumbe(input) is Nan',()=>{
            assert.throws(()=>numberOperations.numberChecker('dassad'),'The input is not a number!')
        })
        it('should throw error when Nnumbe(input) is Nan',()=>{
            assert.throws(()=>numberOperations.numberChecker(['dassad']),'The input is not a number!')
        })
        it('should throw error when Nnumbe(input) is Nan',()=>{
            assert.throws(()=>numberOperations.numberChecker({'dassad':'sdsa'}),'The input is not a number!')
        })
        it('Should return rigth result with num<100',()=>{
            assert.equal(numberOperations.numberChecker(50),'The number is lower than 100!')
        })
        it('Should return rigth result with num<100',()=>{
            assert.equal(numberOperations.numberChecker(-50),'The number is lower than 100!')
        })
        it('Should return rigth result with num<100',()=>{
            assert.equal(numberOperations.numberChecker(-50.559),'The number is lower than 100!')
        })
        it('Should return rigth result with num<100',()=>{
            assert.equal(numberOperations.numberChecker(50.559),'The number is lower than 100!')
        })

        it('Should return rigth result with num<100',()=>{
            assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
        })

        it('Should return rigth result with num<100',()=>{
            assert.equal(numberOperations.numberChecker(100.559),'The number is greater or equal to 100!')
        })
    })
    describe('Arrays',()=>{
        it('two equal Arrays with number',()=>{
            assert.deepEqual(numberOperations.sumArrays([1,2,3],[3,5,8]),[4,7,11])
        })
        it('two equal Arrays with numbers and strings',()=>{
            assert.deepEqual(numberOperations.sumArrays(['b',2,3],[3,5,'a']),['b3',7,'3a'])
        })
        it('two different Arrays with number',()=>{
            assert.deepEqual(numberOperations.sumArrays([1,2,3],[3,5,8,7,9]),[4,7,11,7,9])
        })
        it('two different Arrays with number',()=>{
            assert.deepEqual(numberOperations.sumArrays([1,2,3,7,9],[3,5,8]),[4,7,11,7,9])
        })
    })
})


