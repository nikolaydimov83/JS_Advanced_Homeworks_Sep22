class Hex{
    
    constructor(number){
        if (Number.isInteger(number)&&number>0){
            this.value=Number(number)
        }
        
    }
    valueOf(){
        return this.value
    }
    convertToHex(element) {
        
        return element.toString(16).toUpperCase();
     }
     toString(){
        return `0x${this.convertToHex(this.value)}`
     }
     plus(number){
        if(!isNaN(number)){
            return new Hex(this.value+number)
        }else if (number instanceof Hex){
            return new Hex(this.value+number.value)
        }
     } 
     minus(number){
        if(!isNaN(number)){
            return new Hex(this.value-number)
        }else if (number instanceof Hex){
            return new Hex(this.value-number.value)
        }
     } 
     parse(string){
        if(!isNaN(Number(parseInt(string, 16)))){
            return parseInt(string, 16)
        }
        
     }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(15);
let b = new Hex(10);
console.log(a.minus(b).toString());
console.log(FF.parse('AAA'));
