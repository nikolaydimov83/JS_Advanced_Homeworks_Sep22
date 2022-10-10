function solve(input){
let mapOfJuices=new Map();
let mapOfBottles=new Map();
input.forEach((element)=>{
    let keyValuePair=element.split('=>');
    let oldValue=mapOfJuices.get(keyValuePair[0])===undefined?0:Number(mapOfJuices.get(keyValuePair[0]))
   
    mapOfJuices.set(keyValuePair[0],mapOfJuices.get(keyValuePair[0])===undefined?Number(keyValuePair[1]):Number(mapOfJuices.get(keyValuePair[0]))+Number(keyValuePair[1]))
    let bottlesFromTheItteration=Math.floor((Number(mapOfJuices.get(keyValuePair[0])))/1000);
    let oldBottles=mapOfBottles.get(keyValuePair[0])===undefined?0:mapOfBottles.get(keyValuePair[0])
    if(bottlesFromTheItteration>0){
        mapOfBottles.set(keyValuePair[0],bottlesFromTheItteration+oldBottles);
        let newJuiceAmount=mapOfJuices.get(keyValuePair[0])-(bottlesFromTheItteration*1000)
        mapOfJuices.set(keyValuePair[0],newJuiceAmount);
    }
    

})
let string1='';
mapOfBottles.forEach((amount,juice)=>{
    string1+=`${juice}=> ${amount}\n`
});
return string1
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
