function calorieObject(array){
    let object={}
    /*let arr=array.reduce((previousValue,currentValue,currentIndex)=>{
        if (currentIndex%2===1){
            object[previousValue]=currentValue;
            
        }else{
            return currentValue
        }
    });*/
    
    
    //console.log(arr);
    array.forEach((value,index)=>{
        if (index%2===1){
            object[array[index-1]]=Number(value)
        }
    });
    console.log(object);
}

calorieObject(['Milk',46,'Lukanka',15]);
