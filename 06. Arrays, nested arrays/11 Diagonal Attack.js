function diagonalAttack(matrix){
    let firstDiagonal=0;
    let secondDiagonal=0;
    for (let i=0;i<matrix.length;i++){
        let row=matrix[i].split(' ')
        for (let j=0;j<row.length;j++){
            if(i===j){
                firstDiagonal+=Number(row[j])
            }
            if (i+j===(row.length-1)){
                secondDiagonal+=Number(row[j]);
            }
        }
    }
    if (firstDiagonal!==secondDiagonal){
        for (let i=0;i<matrix.length;i++){
            let row=matrix[i].split(' ')
            let string='';
            for (let j=0;j<row.length;j++){
                string+=row[j]+` `;
            }
            console.log(string.trim())
        }
    }else{
        for (let i=0;i<matrix.length;i++){
            let row=matrix[i].split(' ')
            let string='';
            for (let j=0;j<row.length;j++){
                if((i===j)||(i+j===(row.length-1))){
                    string+=row[j]+' ';
                }else{
                    string+=secondDiagonal+' '
                }
            }
            console.log(string.trim())
        }
    }
}
diagonalAttack(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1'])