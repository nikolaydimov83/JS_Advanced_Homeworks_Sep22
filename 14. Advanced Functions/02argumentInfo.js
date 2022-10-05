function solve(...arguments){
    let objectOfTypes={}
    arguments.forEach(argument=>{
        console.log(`${typeof argument}: ${argument}`);
        if(objectOfTypes[typeof argument]){
           objectOfTypes[typeof argument]++ 
        }else{
            objectOfTypes[typeof argument]=1
        }
        
    });
    Object.entries(objectOfTypes)
    .sort((a,b)=>b[1]-a[1])
    .forEach((entry)=>{
        
        console.log(`${entry[0]} = ${entry[1]}`);
    })
}

solve({ name: 'bob'}, 3.333, 9.999)