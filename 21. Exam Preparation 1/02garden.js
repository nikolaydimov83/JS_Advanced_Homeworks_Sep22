class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable=spaceAvailable;
        this.plants=[];
        this.storage=[];
    }
    addPlant(plantName,spaceRequired){
        if(this.spaceAvailable<spaceRequired){
            throw new Error("Not enough space in the garden.");
        }else{
            let plant={
                plantName:plantName,
                spaceRequired:spaceRequired,
                ripe:false,
                quantity:0
            }
            this.plants.push(plant);
            this.spaceAvailable-=spaceRequired
            return `The ${plant.plantName} has been successfully planted in the garden.`
        }
    }
    ripenPlant(plantName, quantity){
        let plantsWithName=this.plants.filter((element)=>{
            return element.plantName===plantName
        })
        if (plantsWithName.length===0){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
       if(plantsWithName[0].ripe===true){
        throw new Error(`The ${plantName} is already ripe.`);
       }
       if(quantity<=0){
        throw new Error(`The quantity cannot be zero or negative.`);
       }
       let plantIndex=this.plants.findIndex((element)=>{
        return element.plantName===plantName
       })

       this.plants[plantIndex].ripe=true;
       this.plants[plantIndex].quantity+=quantity;
       if(quantity===1){
        return `${quantity} ${plantName} has successfully ripened.`
       }else{
        return `${quantity} ${plantName}s have successfully ripened.`
       }

    }
    harvestPlant(plantName){
        let plantsWithName=this.plants.filter((element)=>{
            return element.plantName===plantName
        })
        if (plantsWithName.length===0){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plantsWithName[0].ripe===false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let plantIndex=this.plants.findIndex((element)=>{
            return element.plantName===plantName
           });
           this.spaceAvailable+=plantsWithName[0].spaceRequired;
           this.storage.push(plantsWithName[0]);
           this.plants.splice(plantIndex,1);
           return `The ${plantName} has been successfully harvested.`
    }
    generateReport(){
        let finalStr=`The garden has ${this.spaceAvailable } free space left.\n`
        this.plants.sort((a,b)=>{
            if (a.plantName>b.plantName){
                return 1
            }else{
                return -1
            }
        });
        let plantsStr="Plants in the garden: "

        this.plants.forEach((plant,index)=>{
            plantsStr+=plant.plantName;
            if (index<this.plants.length-1){
                plantsStr+=', '
            }else{
                plantsStr+=`\n`
            }
        });
plantsStr+='Plants in storage: '
        this.storage.forEach((plant,index)=>{
            plantsStr+=plant.plantName+' ('+plant.quantity+')';
            if (index<this.storage.length-1){
                plantsStr+=', '
            }
        });
        finalStr+=plantsStr
        return finalStr
    }
    
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


