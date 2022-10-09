class SortedList{
    #sortedElements;#size
    constructor(){
        this.#sortedElements=[];
        
        this.size=0;
    }

    add(element){
        //this.checkIndex(element)
        this.#sortedElements.push(Number(element))
        this.#sortedElements.sort((a,b)=>Number(a)-Number(b));
        
        this.size++
    }
    console(){
        this.#sortedElements.forEach((a)=>{console.log(a)})
    }
    remove(index){
        this.checkIndex(index);
        this.#sortedElements.splice(index,1);
        this.size--;
    }
    get(index){
        this.checkIndex(index);
        return this.#sortedElements[index]
    }
    checkIndex(index){
        if (index<0||index>this.size-1||isNaN(index)){
            throw new Error('Error!')
        }
    }
}
let a=new SortedList();
a.add(100)
a.add(-5)
a.add(-30);
a.add(0)
a.remove(1)

a.console()

let b=a.get(1)
console.log(b);
console.log(a.size)