function cookingByNumbers(...params){
    let number=Number.parseFloat(params[0]);
    let operations={
        'chop':(x)=> x/2,
        'dice':(x)=> Math.sqrt(x),
        'spice':(x)=>x+1,
        'bake':(x)=>x*3,
        'fillet':(x)=>x*0.8
    }
    let intermediateResult=number
    for (let i=1;i<params.length;i++){
        intermediateResult=operations[params[i]](intermediateResult)
        console.log(intermediateResult)
    }
    
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')