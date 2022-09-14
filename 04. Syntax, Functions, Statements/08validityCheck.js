function validityCheck(x1,y1,x2,y2){
    function validInvalid(a1,b1,a2,b2){
        let distance=Math.sqrt((a2-a1)**2+(b2-b1)**2);
        
        if (Number.isInteger(distance)){
            return 'valid'
        }else{
            return 'invalid'
        }
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${validInvalid(x1,y1,0,0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validInvalid(x2,y2,0,0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validInvalid(x1,y1,x2,y2)}`);
}

validityCheck(2, 1, 1, 1)