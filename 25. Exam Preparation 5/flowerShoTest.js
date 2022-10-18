const { assert } = require('chai');
const {flowerShop} = require('./flowerShop');


describe('Test flowerShop',()=>{
    describe('Tets calcPriceOfFlowers(flower, price, quantity)',()=>{
        it('Upon wrong input Error should be thrown',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers([],1,1),"Invalid input!");
        });
        it('Upon wrong input Error should be thrown',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers('dsadsa','asdsa',1),"Invalid input!");
        });
        it('Upon wrong input Error should be thrown',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers('dsadsa',1,'asdsa'),"Invalid input!");
        });
        it('Upon wrong input Error should be thrown',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers([],'sdsadsa','asdsa'),"Invalid input!");
        });
        it('Upon wrong input Error should be thrown',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers('fsdsd','sdsadsa','asdsa'),"Invalid input!");
        });
        it('Upon wrong input Error should be thrown',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers(3,'sdsadsa','asdsa'),"Invalid input!");
        });
        it('Correct input',()=>{
            assert.equal(flowerShop.calcPriceOfFlowers('rose',5,5),`You need $${(5*5).toFixed(2)} to buy rose!`)
        });
    });
    describe('checkFlowersAvailable(flower, gardenArr)',()=>{
        it('Should return',()=>{
            assert.equal(flowerShop.checkFlowersAvailable('rose',['rose','dafodil','minzuhar']),'The rose are available!')
        });
        it('Should return',()=>{
            assert.equal(flowerShop.checkFlowersAvailable('rose',['dafodil','minzuhar']),`The rose are sold! You need to purchase more!`)
        });
    });
    describe('sellFlowers(gardenArr, space)',()=>{
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers('sadsadsa',1))
        });
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers(['rose','gardenia'],'asdsads'))
        });
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers('dasdsadsaasd','asdsads'))
        });
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers(['rose','gardenia'],-1))
        });
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers(['rose','gardenia'],1.1))
        });
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers(['rose','gardenia'],3))
        });
        it('Should throw error with wrong input',()=>{
            assert.throws(()=>flowerShop.sellFlowers('sadsadsa','dasdasasdas'))
        });

        it('Should return correct array',()=>{
            assert.equal(flowerShop.sellFlowers(['rose','gardenia','minzuhar'],0),'gardenia / minzuhar')
        });
        it('Should return correct array',()=>{
            assert.equal(flowerShop.sellFlowers(['rose','gardenia','minzuhar'],1),'rose / minzuhar')
        });
        it('Should return correct array',()=>{
            assert.equal(flowerShop.sellFlowers(['rose','gardenia','minzuhar'],2),'rose / gardenia')
        });
        it('Should return correct array',()=>{
            assert.equal(flowerShop.sellFlowers(['rose','gardenia','minzuhar','lili'],2),'rose / gardenia / lili')
        });
    })
});
