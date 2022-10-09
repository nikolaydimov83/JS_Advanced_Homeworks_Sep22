class Stringer{
    #innerString;#innerLength;
    constructor(innerString,innerLength){
        this.#innerString=innerString;
        this.#innerLength=innerLength;
    }
    set innerLength(value){
        if (value<0||isNaN(value)){
            value=0;
        }
        this.#innerLength=value;
    }
    get innerLength(){
        return this.#innerLength
    }
    set innerString(value){

        this.#innerString=value;
    }
    get innerString(){
        return this.#innerString
    }
    increase(length){
        if (length<0||isNaN(length)){
            length=0;
        }
        this.innerLength+=length;
        console.log(this.innerLength)
    }

    decrease(length){
        if (length<0||isNaN(length)){
            length=0;
        }
        this.innerLength-=length;
        console.log(this.innerLength)
    }
    toString(){
        if (this.innerLength<=0||this.innerString===''){
            return '...'
        }
        if (this.innerLength>=this.innerString.length){
            return this.innerString.slice(0,this.innerLength);
        }else{
            return this.innerString.slice(0,this.innerLength)+'...';
        }
        

    }
}

let a = new Stringer('тест',1);
a.increase(3);
console.log(a)
console.log(a.toString())
a.decrease(1)
console.log(a.toString())
a.decrease(5);
console.log(a.toString())