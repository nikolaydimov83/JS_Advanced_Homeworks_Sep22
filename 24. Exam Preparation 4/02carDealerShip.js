class CarDealership{
    
    constructor(name){
        this.name=name;
        this.availableCars=[];
        this.soldCars=[];
        this.totalIncome=0;
    }

    addCar (model, horsepower, price, mileage){
        if(typeof model !=='string'||!model){
            throw new Error('Invalid input!')
        }

        if(!Number.isInteger(horsepower)||horsepower<0){
            throw new Error('Invalid input!')
        }
        if(typeof price!=='number'||price<0){
            throw new Error('Invalid input!')
        }
        if(typeof mileage!=='number'||mileage<0){
            throw new Error('Invalid input!')
        }
        this.availableCars.push({model,horsepower,price,mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model,desiredMileage){
        let suitableCars=[]
        let bestCar;
        function calculateDiscount(car,desiredMileage){
            if(car.mileage-desiredMileage<=0){
                return 0
            }else if (car.mileage-desiredMileage<=40000){
                return 0.05
            }else{
                return 0.10
            }
        }
        this.availableCars.forEach((car,index)=>{
            if (car.model===model){
                suitableCars.push(car);
                if (!bestCar){      //!bestCar
                    bestCar=car
                    bestCar.discount=calculateDiscount(car,desiredMileage);
                    bestCar.index=index;
                    return
                }/*else{
                    let discount=calculateDiscount(car,desiredMileage);
                    if (bestCar.discount>discount){
                        bestCar=car;
                        bestCar.discount=discount;
                        bestCar.index=index;
                    }
                }*/
            }
        });
        if (suitableCars.length===0){
            throw new Error (`${model} was not found!`);
        }
        //indexBestCar=this.availableCars.indexOf(bestCar);
        this.availableCars.splice(bestCar.index,1);
        this.totalIncome+=((bestCar.price)*(1-bestCar.discount));
        bestCar.soldPrice=bestCar.price*(1-bestCar.discount);
        delete bestCar.price;
        delete bestCar.mileage;
        delete bestCar.index;
        delete bestCar.discount;
        this.soldCars.push(bestCar);
        return `${bestCar.model} was sold for ${((bestCar.soldPrice)).toFixed(2)}$`
    }
    currentCar (){
        if (this.availableCars.length===0){
            return "There are no available cars"
        }
        let str='-Available cars:'
        this.availableCars.forEach((car)=>{
            str+=`\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
        })
        return str
    }
    salesReport(criteria){
        if(criteria!=="horsepower"&&criteria!=="model"){
            throw new Error(`Invalid criteria!`);
        }
        let arrayForSort=[...this.soldCars];
        if(criteria==='horsepower'){
            arrayForSort.sort((a,b)=>{
                return b.horsepower-a.horsepower
        })
        }else{
            arrayForSort.sort((a,b)=>{
                if (a.model<b.model){
                    return -1
                }else{
                    return 1
                }
            })
        }
        let str=`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`
        arrayForSort.forEach((car)=>{
            str+=`\n---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`
        })
        return str
    }
}


let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 60, 3500, 190000);
dealership.addCar('Mercedes C63', 60, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.addCar('Toyota Corolla', 60, 3500, 80000);
dealership.addCar('Toyota Corolla', 60, 3500, 130000);
dealership.sellCar('Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('model'))
console.log(dealership.currentCar())
