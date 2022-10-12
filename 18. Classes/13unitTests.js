const { assert } = require("chai");
const { StringBuilder } = require("./13stringBuilder");


describe('Test StringBuilder Class',()=>{
    //Test constructor
    describe('Test constructor',()=>{
        it('Could be constructed by passing a string',()=>{
            let a=new StringBuilder('ABC')
            assert.sameOrderedMembers(a._stringArray,['A','B','C']);
            
        });
        it('Could be constructed by passing an emty value',()=>{
            let a=new StringBuilder()
            assert.sameOrderedMembers(a._stringArray,[]);
            
        });
        it('Could be constructed by passing ``',()=>{
            let a=new StringBuilder('');
            assert.sameOrderedMembers(a._stringArray,[]);
            
        });
        it('Must throw error with non string',()=>{
            //let a=new StringBuilder(3);
            assert.throws(()=>new StringBuilder(3),TypeError,'Argument must be a string');
            
        });
        
    });
    describe('Test functions',()=>{
       let stringBuilder
       
        it('append should work',()=>{
            let stringBuilder=new StringBuilder('ABC')
            stringBuilder.append('abc')
            assert.sameOrderedMembers(stringBuilder._stringArray,Array.from("ABCabc"));
        });

        it('prepend should work',()=>{
            let stringBuilder=new StringBuilder('ABC')
            stringBuilder.prepend('abc')
            assert.sameOrderedMembers(stringBuilder._stringArray,Array.from("abcABC"));
        })

        it('insertAt should work',()=>{
            let stringBuilder=new StringBuilder('ABC')
            stringBuilder.insertAt('XY',1)
            assert.sameOrderedMembers(stringBuilder._stringArray,Array.from("AXYBC"));
        })

        it('remove should work',()=>{
            let stringBuilder=new StringBuilder('ABCDEF')
            stringBuilder.remove(1,2)
            assert.sameOrderedMembers(stringBuilder._stringArray,Array.from("ADEF"));
        })

        it('_vrfyParam should work',()=>{
            let string=2
           
            assert.throws(()=>StringBuilder._vrfyParam(string),TypeError,'Argument must be a string')
        })

        it('toString should work',()=>{
            
            let string=(new StringBuilder('ABCD')).toString()
            assert.equal(string,'ABCD')
        })

        
    })
})



