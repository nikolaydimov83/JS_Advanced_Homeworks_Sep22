const { assert } = require('chai');
const {cinema} = require('./cinema');

describe('Test Cinema',()=>{
    describe('Test showMovies(movieArr)',()=>{
        it('Should return string with empty array',()=>{
            assert.equal(cinema.showMovies([]),'There are currently no movies to show.')
        })
        it('Should return string with empty array',()=>{
            assert.equal(cinema.showMovies(['gag','bag','tag']),'gag, bag, tag')
        })
        it('Should return string with empty array',()=>{
            assert.equal(cinema.showMovies(['gag']),'gag');
        })
        it('Should return string with empty array',()=>{
            assert.equal(cinema.showMovies(['gag, ','bag']),'gag, , bag');
        })
        it('Should return string with empty array',()=>{
            assert.equal(cinema.showMovies(['gag','bag',', tag']),'gag, bag, , tag')
        })
        it('Should return string with empty array',()=>{
            assert.equal(cinema.showMovies(['gag баг','bag',', tag']),'gag баг, bag, , tag')
        })
    })
    describe('Test ticketPrice(projectionType)',()=>{
        it('Should throw error with wrong type of projection',()=>{
            assert.throws(()=>cinema.ticketPrice('dsad'),'Invalid projection type.')
        })
        it('Should throw error with wrong type of projection',()=>{
            assert.throws(()=>cinema.ticketPrice(''),'Invalid projection type.')
        })
        it('Should throw error with wrong type of projection',()=>{
            assert.throws(()=>cinema.ticketPrice(undefined),'Invalid projection type.')
        })
        it('Should throw error with wrong type of projection',()=>{
            assert.throws(()=>cinema.ticketPrice(3),'Invalid projection type.')
        })
        it('Should throw error with wrong type of projection',()=>{
            assert.throws(()=>cinema.ticketPrice([]),'Invalid projection type.')
        })
        it('should return value with proper input',()=>{
            assert.equal(cinema.ticketPrice('Premiere'),12)
        })
        it('should return value with proper input',()=>{
            assert.equal(cinema.ticketPrice('Normal'),7.50)
        })
        it('should return value with proper input',()=>{
            assert.equal(cinema.ticketPrice('Discount'),5.50)
        })
    })
    describe('Swap tickets',()=>{
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(3.56,5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(-1,5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,0),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(21,5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(-1,-1),"Unsuccessful change of seats in the hall.")
        })

        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(4.565,3.7846),"Unsuccessful change of seats in the hall.")
        })

        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,3.56),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(1,-5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,21),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(0,20),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(0,21),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(20,20),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(1,1),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(10,1),"Successful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(1,10),"Successful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(1,20),"Successful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(20,1),"Successful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,6),"Successful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall('xsa',6),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,'dsadsa'),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,''),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall('',5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall('',''),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall('dsa','dsaa'),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall('5',1),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(undefined,undefined),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(undefined,5),"Unsuccessful change of seats in the hall.")
        })
        it('shold throw error',()=>{
            assert.equal(cinema.swapSeatsInHall(5,undefined),"Unsuccessful change of seats in the hall.")
        })
    })
})