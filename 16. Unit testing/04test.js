const {assert}=require('chai');
const {mathEnforcer}=require('./04mathEnforcer');

describe('Function Math Enforcer',()=>{
    describe('Function addFive',()=>{
        it('should return undefined with non-number parameter',()=>{
            let num='non-number';
            let num1={};
            assert.isUndefined(mathEnforcer.addFive(num),true);
            assert.isUndefined(mathEnforcer.addFive(num1),true)
        })
    })

    describe('Function addFive',()=>{
        it('should return correct answer with number parameter',()=>{
            let num=5;
            assert.equal(mathEnforcer.addFive(num),10);
            
            let num1=-5;
            assert.equal(mathEnforcer.addFive(num1),0);

            let num2=0.000000000546446465465465;
            assert.closeTo(mathEnforcer.addFive(num2),5,0.01);
            
        })
    })

    describe('Function subtractTen',()=>{
        it('should return undefined with non-number parameter',()=>{
            let num='non-number';
            let num1={};
            assert.isUndefined(mathEnforcer.subtractTen(num),true);
            assert.isUndefined(mathEnforcer.subtractTen(num1),true)


        })
    })

    describe('Function subtractTen',()=>{
        it('should return correct answer with number parameter',()=>{
            let num=5;
            assert.equal(mathEnforcer.subtractTen(num),-5);
            
            let num1=-5;
            assert.equal(mathEnforcer.subtractTen(num1),-15);

            let num2=0.000000000546446465465465;
            assert.closeTo(mathEnforcer.subtractTen(num2),-10,0.01);
            
        })
    });

    describe('Function SUM',()=>{
        it('should return undefined with non-number parameter',()=>{
            let num='non-number';
            let num1={};
            assert.isUndefined(mathEnforcer.sum(num,num1),true);
            num1=3;
            assert.isUndefined(mathEnforcer.sum(num,num1),true);

            num=3;
            num1={};
            assert.isUndefined(mathEnforcer.sum(num,num1),true);
            
        })
    })

    describe('Function subtractTen',()=>{
        it('should return correct answer with number parameter',()=>{
            let num1=5;
            let num2=6
            assert.equal(mathEnforcer.sum(num1,num2),11);
            
            num1=-5;
            num2=5
            assert.equal(mathEnforcer.sum(num1,num2),0);

            num1=0
            num2=0.000000000546446465465465;
            assert.closeTo(mathEnforcer.sum(num1,num2),0,0.01);

            num1=-3
            num2=0.000000000546446465465465;
            assert.closeTo(mathEnforcer.sum(num1,num2),-3,0.01);

            num1=-3.1
            num2=0.000000000546446465465465;
            assert.closeTo(mathEnforcer.sum(num1,num2),-3.1,0.01);

            num1=0;
            num2=-3;
            assert.equal(mathEnforcer.sum(num1,num2),-3);
            
        })
    });
})