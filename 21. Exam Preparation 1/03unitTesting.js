const { assert } = require("chai");
const {bookSelection}=require('./03code');

describe('Test bookSelection',()=>{
    describe('Test isGenreSuitable(genre, age)',()=>{
        it('Should return proper output with data for Unsuitable outcome',()=>{
            let result=bookSelection.isGenreSuitable('Horror',12);
            assert.equal(result,`Books with Horror genre are not suitable for kids at 12 age`)
        })
        it('Should return proper output with data for Unsuitable outcome',()=>{
            let result=bookSelection.isGenreSuitable('Thriller',10);
            assert.equal(result,`Books with Thriller genre are not suitable for kids at 10 age`)
        })

        it('Should return proper output with data for Suitable outcome',()=>{
            let result=bookSelection.isGenreSuitable('Thriller',13);
            assert.equal(result,`Those books are suitable`)
        })
    })
    describe('Test isItAffordable(price, budget)',()=>{
        it('Should have price number',()=>{
            assert.throws(()=>bookSelection.isItAffordable('dsds',10))
        })
        it('Should have budget number',()=>{
            assert.throws(()=>bookSelection.isItAffordable(10,'fgfghhg'))
        })

        it('Should have budget and price as number',()=>{
            assert.throws(()=>bookSelection.isItAffordable('cczxcxzczx','fgfghhg'))
        })
        it('should return proper result with valid data',()=>{
            assert.equal(bookSelection.isItAffordable(10,10),`Book bought. You have 0$ left`)
            assert.equal(bookSelection.isItAffordable(20,10),"You don't have enough money")
        })
    })
    describe('Test suitableTitles (books, wantedGenre)',()=>{
        it('books should always be array',()=>{
            assert.throws(()=>bookSelection.suitableTitles('dsfsd','Horror'),'Invalid input')
        })

        it('genre should always be string',()=>{
            assert.throws(()=>bookSelection.suitableTitles([],[]),'Invalid input')
        })
        it('both incorrect',()=>{
            assert.throws(()=>bookSelection.suitableTitles('czcxz',[]),'Invalid input')
        })
        it('correct input: Book found',()=>{

            let book1={}
            book1.genre='Crimi';
            book1.title='Balkan express';
            let book2={}
            book2.genre='Documentary';
            book2.title='Pride and prejudice'
            assert.deepEqual(bookSelection.suitableTitles([book1,book2],'Crimi'),['Balkan express'])
        })
    })
})