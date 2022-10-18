const { assert } = require('chai');
const {library} = require('./library');

describe('Test library class',()=>{
    describe('Test calcPriceOfBook(nameOfBook, year)',()=>{
        it('Should throw error with incorrect input',()=>{
            assert.throws(()=>library.calcPriceOfBook([],'dsaasas'),"Invalid input");
        });
        it('Should throw error with incorrect input',()=>{
            assert.throws(()=>library.calcPriceOfBook('sdasdsa','dsaasas'),"Invalid input");
        });
        it('Should throw error with incorrect input',()=>{
            assert.throws(()=>library.calcPriceOfBook('sdasdsa',1983.554),"Invalid input");
        });
       /* it('Should throw error with incorrect input',()=>{
            assert.throws(()=>library.calcPriceOfBook('sdasdsa',-1),"Invalid input");
        });*/
        it('Should throw error with incorrect input',()=>{
            assert.throws(()=>library.calcPriceOfBook([],1980),"Invalid input");
        });
        it('Should throw error with incorrect input',()=>{
            assert.throws(()=>library.calcPriceOfBook(1980,1980),"Invalid input");
        });
        it ('Should return correct data with correct input',()=>{
            let tot=10
            assert.equal(library.calcPriceOfBook('The man',1980),`Price of The man is ${tot.toFixed(2)}`)
        });

        it ('Should return correct data with correct input',()=>{
            let tot=20
            assert.equal(library.calcPriceOfBook('The man',1981),`Price of The man is ${tot.toFixed(2)}`);
        });
        it ('Should return correct data with correct input',()=>{
            let tot=20
            assert.equal(library.calcPriceOfBook('The man',1982),`Price of The man is ${tot.toFixed(2)}`);
        });
        it ('Should return correct data with correct input',()=>{
            let tot=10
            assert.equal(library.calcPriceOfBook('The man',1979),`Price of The man is ${tot.toFixed(2)}`);
        });
        it ('Should return correct data with correct input',()=>{
            let tot=10
            assert.equal(library.calcPriceOfBook('The man',0),`Price of The man is ${tot.toFixed(2)}`);
        });
    });
    describe('test findBook(booksArr, desiredBook)',()=>{
        it('should throw error with incorrect input',()=>{
            assert.throws(()=>library.findBook([],'Here we go'),"No books currently available");
        })

        it('should return proper messagewhen book not found',()=>{
            assert.equal(library.findBook(['Gigi','Bigi'],'Migi'),"The book you are looking for is not here!");
        })
        it('should return proper messagewhen book not found',()=>{
            assert.equal(library.findBook(['Gigi','Bigi'],'Bigi'),"We found the book you want.");
        });
    });
    describe('arrangeTheBooks(countBooks)',()=>{
        it('should throw error with incorect input',()=>{
            assert.throws(()=>library.arrangeTheBooks(1.35),"Invalid input")
        })
        it('should throw error with incorect input',()=>{
            assert.throws(()=>library.arrangeTheBooks(-1),"Invalid input")
        })
        it('should throw error with incorect input',()=>{
            assert.throws(()=>library.arrangeTheBooks('dsadasdas'),"Invalid input")
        })
        it('should return proper message with correct input',()=>{
            assert.equal(library.arrangeTheBooks(40),"Great job, the books are arranged.")
        });
        it('should return proper message with correct input',()=>{
            assert.equal(library.arrangeTheBooks(39),"Great job, the books are arranged.")
        });
        it('should return proper message with correct input',()=>{
            assert.equal(library.arrangeTheBooks(41),"Insufficient space, more shelves need to be purchased.");
        });
    });
});