function carFactory(inputObject){
    let engines=[{ power: 90, volume: 1800 },
                { power: 120, volume: 2400 },
                { power: 200, volume: 3500 }]
    let suitableEngine=engines.filter((value=>value.power>=inputObject.power))[0];
    if (inputObject.wheelsize%2===0){
        inputObject.wheelsize--;
    }
    let wheels=new Array(4);
    wheels.fill(inputObject.wheelsize)
    return { 'model': inputObject.model, 'engine': suitableEngine, carriage: { type: inputObject.carriage, color: inputObject.color }, wheels: wheels }
  
       /* { model: <model name>,

            power: <minimum power>,
            
            color: <color>,
            
            carriage: <carriage type>,
            
            wheelsize: <size> }*/
}

let a=carFactory({ 'model': 'VW Golf II',

'power': 90,

'color': 'blue',

'carriage': 'hatchback',

'wheelsize': 14 });

console.log(a)