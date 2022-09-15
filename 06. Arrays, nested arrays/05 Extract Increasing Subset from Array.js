function extractIncreasingSubset(array){
let resultArray=[];

resultArray=array.reduce(reducer,[])

function reducer(previousValue,currentValue){
    if(previousValue[previousValue.length-1]<=currentValue||previousValue.length===0){
        previousValue.push(currentValue);
    }
    return previousValue
}
return resultArray
}
extractIncreasingSubset([1,3,8,4,10, 12, 3, 2, 24])