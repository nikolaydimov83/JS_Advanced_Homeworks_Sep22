function greatestDivisor(number1,number2){
    let smallNum=Math.min(number1,number2);
    let bigNum=Math.max(number1,number2);
    if (bigNum%smallNum===0){
        console.log(smallNum);
        return
    }

    let smallNumHalved=Math.floor(smallNum/2);
    
    for (let i = smallNumHalved; i > 0; i--) {
        if (bigNum%i===0&&smallNum%i===0){
            console.log(i);
            return
        }
        
    }
}

greatestDivisor(2154, 458)