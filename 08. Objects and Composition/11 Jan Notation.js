function janNotation(input){
    let library={
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '*':(a,b)=>a*b,
        '/':(a,b)=>a/b
    }
let operands=[];
let operators=[];
for (const key in input) {
    if (Object.hasOwnProperty.call(input, key)) {
        const element = input[key];
        if (typeof element==='string'){
            operators.push({'index':(key-1),type:element})
        }else{
            operands.push(element)
        }
    }
}
for (const operator of operators) {
    if (operator.index-1<0){
        console.log("Error: not enough operands!");
        return
    }else{
        let result=library[operator.type](operands[operator.index-1],operands[operator.index])
        operands.splice(operator.index-1,2,result);
        operators.forEach((operand)=>operand.index-=2)
    }
}
if (operands.length>1){
    console.log("Error: too many operands!");
    return
}else{
    console.log(operands[0])
}

}

janNotation([5,

    3,
    
    4,
    
    '*',
    
    '-'])