class Restaurant{
    constructor(budgetMoney){
        this.budgetMoney=budgetMoney;
        this.menu={};
        this.stockProducts={};
        this.history=[];
    }
    loadProducts(products){
        let str='';
        products.forEach(product => {
            let productName=product.split(' ')[0];
            let productQuantity=Number(product.split(' ')[1]);
            let productPrice=Number(product.split(' ')[2]);
            

            if(productPrice<=this.budgetMoney){
                this.budgetMoney-=productPrice;
                if(this.stockProducts.hasOwnProperty(productName)){
                    this.stockProducts[productName]+=productQuantity;
                }else{
                    this.stockProducts[productName]=productQuantity;
                }
                str+=`Successfully loaded ${productQuantity} ${productName}\n`
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }else{
                str+=`There was not enough money to load ${productQuantity} ${productName}\n`;
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        });
        str=str.trim();
        //this.history.push(str);
        return this.history.join('\n');
    } 
    addToMenu(meal,neededProducts,price){
        if(this.menu.hasOwnProperty(meal)){
            return `The ${meal} is already in the our menu, try something different.`;
        }
        let products=neededProducts
        /*neededProducts.forEach((neededProduct)=>{
            let neededProductName=neededProduct.split(' ')[0];
            let neededProductQuantity=neededProduct.split(' ')[1];
            products[neededProductName]=Number(neededProductQuantity)

        })*/
        this.menu[meal]={products,price}
       if (Object.keys(this.menu).length===1){
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
       }else{
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
       }
        
    }
    showTheMenu(){
        if(Object.keys(this.menu).length===0){
            return "Our menu is not ready yet, please come later..."
        }
        let str='';
        Object.entries(this.menu).forEach((entry)=>{
            str+=`${entry[0]} - $ ${entry[1].price}\n`
        })
        return str.trim();
    }
    makeTheOrder(meal){
        if (!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let finalResult=''
        this.menu[meal]['products'].forEach((productQuantityPair)=>{
            let [productName,quantity]=productQuantityPair.split(' ')
            
            let productQuantity=Number(quantity);
            if (this.stockProducts[productName]<productQuantity||!this.stockProducts[productName]){
                finalResult= `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        });
        if(!finalResult){
            finalResult=`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            this.menu[meal]['products'].forEach((productQuantityPair)=>{
                let [productName, quantity]=productQuantityPair.split(' ');
               
                let productQuantity=Number(quantity);
                this.stockProducts[productName]-=productQuantity;
                
                    
                
            });
            this.budgetMoney+=this.menu[meal].price
        }
        return finalResult
    }
}



let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 10 10', 'Banana 5 1']);
kitchen.loadProducts(['Yogurt 30 3000']);
kitchen.loadProducts(['Yogurt 30 30']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 30', 'Honey 1', 'Banana 1', 'Strawberries 1'], 9.99);
console.log(kitchen.addToMenu('Pasta', ['Yogurt 30', 'Honey 1', 'Banana 1', 'Strawberries 1'], 15));
console.log(kitchen.addToMenu('Chushki', ['Yogurt 30', 'Honey 1', 'Banana 1', 'Strawberries 1'], 15));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt1'));
console.log(kitchen.showTheMenu())
console.log()
