let b=new ChristmasDinner(1000)
class ChristmasDinner{
    constructor(budget){
        if(budget<0){
            throw new Error("The budget cannot be a negative number")

        }
        this.budget=Number(budget)
        this.dishes=[];
        this.products=[];
        this.guests={} 

    }

    shopping(product){
        let [typeProd,price]=product;
        if (price>this.budget){
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(typeProd);
        this.budget-=price;
        return `You have successfully bought ${typeProd}!`


    }

    recipes(recipe){
        let recipeName=recipe.recipeName;
        let productsList=recipe.productsList;
        recipe.productsList.forEach(product => {
            if (this.products.indexOf(product)===-1){
                throw new Error(`We do not have this product`)
            }

        });
        this.dishes.push({recipeName, productsList})
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish){
        if(!(this.dishes.find((a)=>a.recipeName===dish))){
            throw new Error(`"We do not have this dish"`);
        }
        if(this.guests.hasOwnProperty(name)){
            throw new Error(`This guest has already been invited`)
        }
        this.guests[name]=dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance(){
        let str='';
        Object.entries(this.guests).forEach((guest)=>{
            let [name,dish]=guest;
            let products=(this.dishes.find((a)=>a.recipeName===dish)).productsList.join(', ')
            str+=`${name} will eat ${dish}, which consists of ${products}\n` 
        })
        str=str.trim()
        return str
    }

}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 10]);
dinner.shopping(['Beans', 10]);
dinner.shopping(['Cabbage', 40]);
dinner.shopping(['Rice', 20]);
dinner.shopping(['Savory', 10]);
dinner.shopping(['Peppers', 10]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
