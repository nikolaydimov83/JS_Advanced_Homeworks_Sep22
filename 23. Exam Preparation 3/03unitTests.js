const {carService} = require('./03. Car Service_Resources');
const {assert} = require('chai');

describe('carServ',()=>{
    describe('Test isItExpensive(issue)',()=>{
        it('Engine',()=>{
            assert.equal(carService.isItExpensive('Engine'),`The issue with the car is more severe and it will cost more money`)
        })
        it('Transmission',()=>{
            assert.equal(carService.isItExpensive('Transmission'),`The issue with the car is more severe and it will cost more money`)
        })
    })
    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('numberOfParts NaN',()=>{
            assert.throws(()=>carService.discount('dsddas',10))
        })
    })
    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('totalPrice NaN',()=>{
            assert.throws(()=>carService.discount(10,'sdasdas'))
        })
    })
    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('totalPrice and numberOfParts NaN',()=>{
            assert.throws(()=>carService.discount(10,'sdasdas'))
        })
    })

    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('numberOfParts 3',()=>{
            let result=15
            assert.equal(carService.discount(3,100),`Discount applied! You saved ${result}$`)
        })
    })
    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('numberOfParts 7',()=>{
            let result=15
            assert.equal(carService.discount(7,100),`Discount applied! You saved ${result}$`)
        })
    })
    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('numberOfParts 8',()=>{
            let result=30
            assert.equal(carService.discount(8,100),`Discount applied! You saved ${result}$`)
        })
    })
    describe('Test discount (numberOfParts, totalPrice)',()=>{
        it('numberOfParts 2',()=>{
            
            assert.equal(carService.discount(2,100),"You cannot apply a discount")
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog not Array',()=>{
            
            assert.throws(()=>carService.partsToBuy('sbdasjbdjsah',[{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]),"Invalid input")
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog not Array',()=>{
            
            assert.throws(()=>carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],'sadhgjahs'),"Invalid input")
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog not Array',()=>{
            
            assert.throws(()=>carService.partsToBuy('sdasdasdasdsadas','sadhgjahs'),"Invalid input")
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog empty Array',()=>{
            
            assert.equal(carService.partsToBuy([],[{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]),0)
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog empty 2nd Array',()=>{
            
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],[]),0)
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog empty 1st Array',()=>{
            
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],['blowoff valve']),145)
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog some input ',()=>{
            
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],['blowoff','coil']),0)
        })
    })
    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog some input ',()=>{
            
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],['blowoff','coil','coil springs']),230)
        })
    })

    describe('partsToBuy(partsCatalog, neededParts)',()=>{
        it('partsCatalog some input ',()=>{
            
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 },{ part: "shmenti", price: 500 }, { part: "kapeli", price: 500 },{ part: "coil springs", price: 230 }],['blowoff','coil','coil springs','shmenti']),730)
        })
    })
})