function heroicInventory(input){
let arrayOfHeroes=[];
    for (const item of input) {
        let heroCharArr=item.split('/ ');
        let heroItemsArr;
        try{
          heroItemsArr=heroCharArr[2].split(', ');  
        }catch(err){
            heroItemsArr=[];
        }
        
        let heroObject={};
        heroObject.name=heroCharArr[0].trim();
        heroObject.level=Number(heroCharArr[1]);
        heroObject.items=heroItemsArr;
        arrayOfHeroes.push(heroObject);
    }
    let heroesStringified= JSON.stringify(arrayOfHeroes);
    console.log(heroesStringified);
    
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])