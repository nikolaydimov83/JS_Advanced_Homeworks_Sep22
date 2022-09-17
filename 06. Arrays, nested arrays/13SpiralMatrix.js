function spiralMatrix(width,heigth){
    let matrix=[];
    for (let i =0;i<heigth;i++){        
        matrix.push(new Array(width));
        
    } 
    
    let currentMatrixWidth=width;
    let currentMatrixHeigth=heigth;
    let maxNumber=width*heigth;
    let currentNumber=1;
    let conturNumber=1

    while (currentNumber<=maxNumber){
        currentNumber=drawContur(currentMatrixWidth,currentMatrixHeigth,conturNumber,maxNumber,currentNumber);
        conturNumber++;
    }

    function drawContur(currentMatrixWidth,currentMatrixHeigth,conturNumber,maxNumber,currentNumber){
        for (let i=0;i<currentMatrixWidth-2*conturNumber+2;i++){

            matrix[0+conturNumber-1][0+i+conturNumber-1]=currentNumber;
            if (maxNumber===currentNumber){
                currentNumber++
                return currentNumber
            }
            currentNumber++;
        }
       
        for (let j=0+conturNumber;j<=currentMatrixHeigth-conturNumber;j++){
            
            matrix[j][currentMatrixWidth-conturNumber]=currentNumber;
            if (maxNumber===currentNumber){
                currentNumber++
                return currentNumber
            }
            currentNumber++;
        }
    
        for (let i=currentMatrixWidth-conturNumber-1;i>=conturNumber-1;i--){
            
            matrix[currentMatrixHeigth-conturNumber][i]=currentNumber;
            if (maxNumber===currentNumber){
                currentNumber++
                return currentNumber
            }
            currentNumber++;
        }
        for (let j=currentMatrixHeigth-conturNumber;j>0+conturNumber;j--){
            
            matrix[j-1][0+conturNumber-1]=currentNumber;
            if (maxNumber===currentNumber){
                currentNumber++
                return currentNumber
            }
            currentNumber++;

        }
return currentNumber
    }
        
for (const row of matrix) {
let string='';
for (const number of row) {
    string+=number+' '
}
console.log(string.trim())
}
   
}
spiralMatrix(10,10)
