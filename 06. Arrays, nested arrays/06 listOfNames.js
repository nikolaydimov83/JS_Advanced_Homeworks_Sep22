function listOfNames(array){
    array.sort((a,b)=>{
        if (a.toLowerCase()===b.toLowerCase()){
            return 0
        }else if(a.toLowerCase()>b.toLowerCase()){
            return 1
        }else{
            return -1
        }
    });
for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log(`${Number(key)+1}.${element}`)
        
    }
}
}
listOfNames(["John",

"Bob",

"Christina",

"Ema",'Filomena','filomena',`Seget`,'01Feget',`Qerty`,'43Derek'])