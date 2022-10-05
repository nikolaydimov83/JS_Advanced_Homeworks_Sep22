function solve(){

let storageState={
carbohydrate:0,
protein:0,
flavour:0,
fat:0
}
let ingredientsBasket={
    apple:{
        carbohydrate:1,
        flavour:2
    },
    lemonade:{
        carbohydrate:10,
        flavour:20
    },
    burger:{
        carbohydrate:5,
        flavour:3,
        fat:7
    },
    eggs:{
        protein:5,
        flavour:1,
        fat:1
    },
    turkey:{
        carbohydrate:10,
        protein:10,
        flavour:10,
        fat:10
    }
}
return function(instructions){
let command=instructions.split(' ')[0];
let ingredient=instructions.split(' ')[1];
let food=instructions.split(' ')[1];
let quantity=Number(instructions.split(' ')[2]);
let commandFunctions={
    
    restock:function(){
    storageState[ingredient]+=quantity;
    let successState='Success';
    return successState
    },
    prepare: function(){
        let neededIngredientsQuantities=Object.fromEntries(
            Object.entries(ingredientsBasket[food])
            .map((entry)=>[entry[0],entry[1]*quantity]));
            let usedIngredients={};
        let neededIngredients=Object.keys(neededIngredientsQuantities);
        let missingIngredients=[];
        neededIngredients.forEach((ingredient)=>{
                                    
                                    if (storageState[ingredient]<neededIngredientsQuantities[ingredient]){
                                        missingIngredients.push(ingredient);
                                    }else{
                                        usedIngredients[ingredient]=neededIngredientsQuantities[ingredient];
                                    }
                                });
        if(missingIngredients[0]){
            return `Error: not enough ${missingIngredients[0]} in stock`;
        }else{
            neededIngredients.forEach((ingredient)=>{
            storageState[ingredient]-=usedIngredients[ingredient]
            
       });
       return 'Success';
        }
        
    },
    report:function(){
        return `protein=${storageState['protein']} carbohydrate=${storageState['carbohydrate']} fat=${storageState['fat']} flavour=${storageState['flavour']}`
    }
}
return commandFunctions[command]();
}

}
let a=solve();
let b=a('restock flavour 50');
let c=a('prepare lemonade 4');

console.log(c)

