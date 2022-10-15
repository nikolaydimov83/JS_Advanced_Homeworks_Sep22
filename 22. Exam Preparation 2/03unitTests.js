const {companyAdministration} = require('./03employees');
const {assert}=require('chai');

describe('Test companyAdministration Module',()=>{
    describe('Test hiringEmployee(name, position, yearsExperience)',()=>{
        it('Should throw error if possition is not programmer',()=>{
            assert.throws(()=>companyAdministration.hiringEmployee('Pencho','Rider',15),`We are not looking for workers for this position.`);
        })
        it('Years>3=>Should return result ${name} was successfully hired for the position ${position}.',()=>{
            let position='Programmer';
            let yearsExperience=3
            assert.equal(companyAdministration.hiringEmployee("Pencho", position, yearsExperience), `Pencho was successfully hired for the position ${position}.`)
        })
        it('Years<3=>Should return result `${name} is not approved for this position.`',()=>{
            let position='Programmer';
            let yearsExperience=2
            assert.equal(companyAdministration.hiringEmployee("Pencho", position, yearsExperience), `Pencho is not approved for this position.`)
        })
    })
    describe("Test calculateSalary()",()=>{
        it('Should throw error with non number input or number less than 0',()=>{
            assert.throws(()=>companyAdministration.calculateSalary('hello'),"Invalid hours")
        })
        it('Should throw error with non number input or number less than 0',()=>{
            assert.throws(()=>companyAdministration.calculateSalary(-3),"Invalid hours")
        })
        it('Should NOT add 1000 if hours>160',()=>{
            assert.equal(companyAdministration.calculateSalary(160),160*15)
        })

        it('Should  add 1000 if hours>160',()=>{
            assert.equal(companyAdministration.calculateSalary(161),(161*15)+1000)
        })
    })
    describe('fireEmployee(array,index)',()=>{
        it('Should be array',()=>{assert.throws(()=>companyAdministration.firedEmployee('adasdsa',1),"Invalid input")
    })
    it('fireEmployee(array,index)',()=>{
        assert.throws(()=>companyAdministration.firedEmployee(['adasdsa'],-1),"Invalid input")
    })
    it('fireEmployee(array,index)',()=>{
        assert.throws(()=>companyAdministration.firedEmployee(['adasdsa'],2),"Invalid input")
    })
    it('fireEmployee(array,index)',()=>{
        assert.throws(()=>companyAdministration.firedEmployee(['adasdsa'],0.33),"Invalid input")
    })
    it('fireEmployee(array,index)',()=>{
        assert.throws(()=>companyAdministration.firedEmployee(['adasdsa'],'0.3sas3'),"Invalid input")
    })
    it('fireEmployee(array,index)',()=>{
        assert.throws(()=>companyAdministration.firedEmployee('sadsadasJGFVF','0.3sas3'),"Invalid input")
    })
    it('shoud return array',()=>{
        assert.equal(companyAdministration.firedEmployee(['Pencho','Penka'],1),'Pencho')
    })
    it('shoud return array',()=>{
        assert.equal(companyAdministration.firedEmployee(['Pencho','Penka','Dragan'],1),'Pencho, Dragan')
    })
})
})