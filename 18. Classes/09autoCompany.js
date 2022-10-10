function solve(input){
    let mapOfCars=new Map();
    let mapOfModels=new Map();
    
    input.forEach((input)=>{
        let currentCarValue=0;
        carString=input.split(' | ');
        let currentCarBrand=mapOfCars.get(carString[0]);
        if (currentCarBrand){
            let currentCarModel=currentCarBrand.get(carString[1]);
            if (currentCarModel){
                let currentAmount=Number(mapOfCars.get(carString[0]).get(carString[1]));
                mapOfCars.get(carString[0]).set(carString[1],currentAmount+Number(carString[2]))
                console.log()
                //mapOfCars.set(carString[0],mapOfCars.get(carString[0]))
            }else{
                let newMapOfModels=mapOfCars.get(carString[0])
                newMapOfModels.set(carString[1],Number(carString[2]));
                mapOfCars.set(carString[0],newMapOfModels)
            }
        }else{
            let newMapOfModels=new Map()
            newMapOfModels.set(carString[1],Number(carString[2]));
            mapOfCars.set(carString[0],newMapOfModels)
        }
        
       // mapOfCars.set(carString[0],mapOfModels.set(carString[1],currentCarValue+Number(carString[2])))
    })
let string='';
mapOfCars.forEach((mapOfModels,brand)=>{
    string+=`${brand}\n`;
    mapOfModels.forEach((value,model)=>{
        string+=`###${model} -> ${value}\n`
    });
  
});
return string
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)