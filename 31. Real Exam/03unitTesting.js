const { assert } = require('chai');
const {chooseYourCar} = require('./03chooseYourCar');
describe('chooseYourCar',()=>{

    describe('choosingType(type, color, year)',()=>{
        it('throws error with <1900',()=>{
            assert.throws(()=>chooseYourCar.choosingType('Sedan','yellow',1899),`Invalid Year!`)
        })
        it('throws error with >2022',()=>{
            assert.throws(()=>chooseYourCar.choosingType('Sedan','yellow',2023),`Invalid Year!`)
        })
        it('throws error with !=Sedan',()=>{
            assert.throws(()=>chooseYourCar.choosingType('Medan','yellow',1983),`This type of car is not what you are looking for.`)
        })
        it('NEW Sedan',()=>{
            assert.equal(chooseYourCar.choosingType('Sedan','Yellow',2010),`This Yellow Sedan meets the requirements, that you have.`)
        })
        it('NEW Sedan',()=>{
            assert.equal(chooseYourCar.choosingType('Sedan','Yellow',2015),`This Yellow Sedan meets the requirements, that you have.`)
        })
        it('OLD Sedan',()=>{
            assert.equal(chooseYourCar.choosingType('Sedan','Yellow',2009),`This Sedan is too old for you, especially with that Yellow color.`)
        })
    })
    describe('Test brandName',()=>{
        it('Should throw Error with non Array',()=>{
            assert.throws(()=>chooseYourCar.brandName('dasdas',1),`Invalid Information!`)
        })

        it('Should throw Error with non Array',()=>{
            assert.throws(()=>chooseYourCar.brandName({'name':'neme'},1),`Invalid Information!`)
        })

        it('Should throw Error with index non-integer',()=>{
            assert.throws(()=>chooseYourCar.brandName(['bar','shmar'],-1),`Invalid Information!`)
        })
        it('Should throw Error with index non-integer',()=>{
            assert.throws(()=>chooseYourCar.brandName(['bar','shmar'],1.333),`Invalid Information!`)
        })
        it('Should throw Error with index non-integer',()=>{
            assert.throws(()=>chooseYourCar.brandName(['bar','shmar'],2),`Invalid Information!`)
        })
        it('Should throw Error with index non-integer',()=>{
            assert.throws(()=>chooseYourCar.brandName(['bar','shmar'],'sadasdas'),`Invalid Information!`)
        })
        it('Should throw Error with index non-integer',()=>{
            assert.equal(chooseYourCar.brandName(['bar','mar','car'],1),'bar, car')
        })
        it('Should throw Error with index non-integer',()=>{
            assert.equal(chooseYourCar.brandName(['bar','car'],1),'bar')
        })
        it('Should throw Error with index non-integer',()=>{
            assert.equal(chooseYourCar.brandName(['bar'],0),'')
        })
    })
    describe('fuelConsumption',()=>{
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption('dasdsa',20),"Invalid Information!")
        })
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption(20,'dasdas'),"Invalid Information!")
        })
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption(0,1),"Invalid Information!")
        })
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption(1,0),"Invalid Information!")
        })
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption(1,-10),"Invalid Information!")
        })
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption(-1,10),"Invalid Information!")
        })
        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption(-1,0),"Invalid Information!")
        })

        it('should throw Error',()=>{
            assert.throws(()=>chooseYourCar.carFuelConsumption('dasdas','dasdasdsa'),"Invalid Information!")
        })

        it('should throw Error',()=>{
            assert.equal(chooseYourCar.carFuelConsumption(200,10),`The car is efficient enough, it burns ${(10/200*100).toFixed(2)} liters/100 km.`)
        })
        it('should throw Error',()=>{
            assert.equal(chooseYourCar.carFuelConsumption(200,100),`The car burns too much fuel - ${(100/200*100).toFixed(2)} liters!`)
        })
        it('should throw Error',()=>{
            let consumptedFuelInLiters=2.3339
            let distanceInKilometers=95.3339
            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters),`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`)
        })

        it('should throw Error',()=>{
            let consumptedFuelInLiters=2.3339
            let distanceInKilometers=5.3339
            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters),`The car burns too much fuel - ${litersPerHundredKm} liters!`)
        })
        it('should throw Error',()=>{
            let consumptedFuelInLiters=7
            let distanceInKilometers=100
            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters),`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`)
        })
    })
})