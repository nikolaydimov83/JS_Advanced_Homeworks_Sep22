function result(){
    let currentFibNumber=0;
    let prevFibNumber=1;
    return function (){
        if (currentFibNumber===prevFibNumber){
            
            let intermediateCurr=currentFibNumber;
        currentFibNumber=intermediateCurr+prevFibNumber
        prevFibNumber=intermediateCurr;
        return currentFibNumber
        }else{
            let intermediateCurr=currentFibNumber;
        currentFibNumber=intermediateCurr+prevFibNumber
        prevFibNumber=intermediateCurr;
        return currentFibNumber
        }
        
    }

}

let a=result();
console.log(a());
console.log(a());
console.log(a());
console.log(a());