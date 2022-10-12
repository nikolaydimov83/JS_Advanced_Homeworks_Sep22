let {PaymentPackage}=require('./12paymentPackage');
const {assert}=require('chai');
const { describe } = require('mocha');

describe('Test Payment Package class',()=>{
    describe('Test new instance',()=>{
        let paymentPackage;
        beforeEach(()=>paymentPackage=new PaymentPackage('Niki',100))
        it('Should have correct _name, _value, _VAT and _active',()=>{
            assert.equal(paymentPackage._name,'Niki');
            assert.equal(paymentPackage._value,100);
            //assert.equal(typeof paymentPackage._value,'number');
            assert.equal(paymentPackage._VAT,20);
            assert.equal(paymentPackage._active,true)
        });
    })
    describe('Test all getters: name,value,VAT,active',()=>{
        let paymentPackage;
        beforeEach(()=>paymentPackage=new PaymentPackage('Niki',10));
        it('All getters must be retrieved correctly',()=>{
            assert.equal(paymentPackage.name,'Niki');
            assert.equal(paymentPackage.value,10);
            assert.equal(paymentPackage.VAT,20);
            assert.equal(paymentPackage.active,true);
        });
    });
    describe('Test all setters',()=>{
        describe('Test name setter',()=>{
            it('should throw error when empty string is loaded',()=>{
                assert.throws(()=>new PaymentPackage('',10),'Name must be a non-empty string');
            });
            it('hould throw error when non-string is loaded',()=>{
                assert.throws(()=>new PaymentPackage(10,10),'Name must be a non-empty string')
            });
            it('should return proper value when uploaded with valid data',()=>{
                let propertyPackage=new PaymentPackage('Niki',1) ;
                propertyPackage.name='Bili';
                assert.equal(propertyPackage.name,'Bili');
            });
        });
        describe('Test value setter',()=>{
            it('Should throw error when value bellow 0 is provided or non - number is provided',()=>{
                assert.throws(()=>new PaymentPackage('Niki',-1),'Value must be a non-negative number');
                
            });
            it('should be non-negative number',()=>{
                assert.throws(()=>new PaymentPackage('Niki','biki'),'Value must be a non-negative number');
            })
            it('should return proper value when uploaded with valid data',()=>{
                let propertyPackage=new PaymentPackage('Niki',100) ;
                assert.equal(propertyPackage.value,100)
                propertyPackage.value=200;
                assert.equal(propertyPackage.value,200);
                propertyPackage.value=0;
                assert.equal(propertyPackage.value,0);
            });

        });
        describe('Test VAT setter',()=>{
            let paymentPackage;
            beforeEach(()=>paymentPackage=new PaymentPackage('Niki',10));
            it('Should throw error when value bellow 0 is provided or non - number is provided',()=>{
                
                assert.throws(()=>paymentPackage.VAT='','VAT must be a non-negative number');
                assert.throws(()=>paymentPackage.VAT='-5;','VAT must be a non-negative number');
            });
            it('should return proper value when uploaded with valid data',()=>{
                paymentPackage.VAT=30
                assert.equal(paymentPackage.VAT,30);
            });
            it('should return proper value when uploaded with valid data',()=>{
                paymentPackage.VAT=30.556
                assert.equal(paymentPackage.VAT,30.556);
            });

        });
        describe('Test ACTIVE setter',()=>{
            let paymentPackage;
            beforeEach(()=>paymentPackage=new PaymentPackage('Niki',10));
            it('should be boolean value',()=>{
                assert.throws(()=>paymentPackage.active='dcsd','Active status must be a boolean')
            });
            it('should return correct value after set',()=>{
                paymentPackage.active=false
                assert.equal(paymentPackage.active,false)
            });
            it('should return correct value after set',()=>{
                paymentPackage.active=true
                assert.equal(paymentPackage.active,true)
            });
        });
    });
    describe('Test toString function',()=>{
        it('active:FALSE',()=>{
            let paymentPackage=new PaymentPackage('Niki',100);
            paymentPackage.active=false
            assert.equal(paymentPackage.toString(),`Package: Niki (inactive)
- Value (excl. VAT): 100
- Value (VAT 20%): 120`);
        });
        it('active:TRUE',()=>{
            let paymentPackage=new PaymentPackage('Niki',100);
            
            assert.equal(paymentPackage.toString(),`Package: Niki
- Value (excl. VAT): 100
- Value (VAT 20%): 120`);
        });
        it('active:TRUE,VAT=30',()=>{
            let paymentPackage=new PaymentPackage('Niki',1000);
            paymentPackage.VAT=40;
            
            assert.equal(paymentPackage.toString(),`Package: Niki
- Value (excl. VAT): 1000
- Value (VAT 40%): 1400`);
        });
    });
});

