function arraySum(array,startIndex,endIndex){
    let sum=0
    if (!(array instanceof Array)){
        return NaN
    }
    array.slice(startIndex,endIndex+1)
        .forEach(element => {
        sum+=element;
        });
    return sum
}
let a =arraySum([1,2,3,4,5],-1,4)
    console.log(a)

module.exports={arraySum}