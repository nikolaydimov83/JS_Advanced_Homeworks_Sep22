function sortingNumbers(array){
    let arrayAccending=array;
    let arrayDeccending=array;
    let resultArray=[];
    let j=0;
    arrayAccending.sort((a,b)=>{return a-b});
    for (let i=0; i < Math.ceil(array.length/2); i++) {
        const element = array[i];
        resultArray[j]=element;
        j+=2
        
    }
   
    arrayAccending.sort((a,b)=>{return b-a});
    j = 1;
    for (let i=0; i < Math.floor(array.length/2); i++) {
        const element = array[i];
        resultArray[j]=element;
        j+=2
        
    }
    return resultArray;
    
}
function sortingNumbers1(array){
    array.sort((a,b)=>{return a-b});
    let result=[]
    while (array.length>0)  {
        result.push(array[0]);
        if (array.length-1!==0){
            result.push(array[array.length-1]);
        }
        array.shift();
        array.pop();
    }
    return result
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])