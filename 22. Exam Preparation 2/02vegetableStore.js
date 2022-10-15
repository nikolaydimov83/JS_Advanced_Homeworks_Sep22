class VegetableStore{
    #setOfProductsForTheCurrentLoad=new Set()
    constructor(owner,location){
        this.owner=owner;
        this.location=location;
        this.availableProducts=new Map();
    }
    loadingVegetables (vegetables){
        vegetables.forEach(element => {
            let splitedElement=element.split(' ');

        let current=this.availableProducts.get(splitedElement[0])
        if(!current){
            this.availableProducts
            .set(splitedElement[0],
                {
                    quantity:Number(splitedElement[1]),
                    price:Number(splitedElement[2])})
        }else{
            this.availableProducts
            .set(splitedElement[0],
                {
                quantity:Number(current.quantity)+Number(splitedElement[1]),
                price:Math.max(Number(splitedElement[2]),Number(current.price))})
        }
            this.#setOfProductsForTheCurrentLoad.add(splitedElement[0])
            
        });
        let str=`Successfully added `;
        this.#setOfProductsForTheCurrentLoad.forEach((element)=>{
            str+=element+', ';
            
            //
            
        });
        this.#setOfProductsForTheCurrentLoad.clear();
        str=str.substring(0,str.length-2)
        /*this.availableProducts.forEach((element,key)=>{
            console.log(`${key}: quantity:${element.quantity} price:${element.price}`);
        })*/
        return str
        
    }
    buyingVegetables(selectedProducts){
        let totalPrice=0;
        selectedProducts.forEach((element)=>{
            let productQuantity=element.split(' ');
            let storeStatusOfChosenProduct=this.availableProducts.get(productQuantity[0])
            if(!this.availableProducts.has(productQuantity[0])){
                throw new Error(`${productQuantity[0]} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (storeStatusOfChosenProduct.quantity<productQuantity[1]){
                throw new Error(`The quantity ${productQuantity[1]} for the vegetable ${productQuantity[0]} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice+=Number(productQuantity[1])*Number(storeStatusOfChosenProduct.price);
            storeStatusOfChosenProduct.quantity-=Number(productQuantity[1]);
            
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity){
        if(!this.availableProducts.has(type)){
            throw new Error(`${type} is not available in the store.`);
        }
        let storeStatusOfChosenProduct=this.availableProducts.get(type);
        if(storeStatusOfChosenProduct.quantity<quantity){
            storeStatusOfChosenProduct.quantity=0;
            return `The entire quantity of the ${type} has been removed.`
        }
        storeStatusOfChosenProduct.quantity-=quantity;
        return `Some quantity of the ${type} has been removed.`
    }
    revision(){
        let sortedAvailableProducts=new Map([...this.availableProducts.entries()].sort((a,b)=>a[1].price-b[1].price))
        let str=`Available vegetables:\n`;
        sortedAvailableProducts.forEach((value,key)=>{
            str+=`${key}-${value.quantity}-$${value.price}\n`
        });
        str+=`The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return str
    }
    
}
let a=new Map()
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
 console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]))

 console.log(vegStore.rottingVegetable('Beans',5))
 console.log(vegStore.availableProducts.get('Beans').quantity)

 console.log(vegStore.revision())

 /*const myMap = new Map();
myMap.set("a",3);
myMap.set("c",4);
myMap.set("b",1);
myMap.set("d",2);


let b=myMap.entries()
let c=[...myMap.entries()]
debugger
// sort by value
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);*/
 

