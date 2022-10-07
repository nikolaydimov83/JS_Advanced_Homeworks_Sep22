function arraySum(array,startIndex=0,endIndex=array.length-1){
    let sum=0
    if (!(array instanceof Array)){
        return NaN
    }
    if (startIndex<0){
        startIndex=0;
    }
    if (endIndex>array.length-1){
        endIndex=array.length-1;
    }
    array.slice(startIndex,endIndex+1)
        .forEach(element => {
        sum+=element;
        });
    return sum
}
let a =arraySum([1,2,3,4,5])
    console.log(a)

module.exports={arraySum}