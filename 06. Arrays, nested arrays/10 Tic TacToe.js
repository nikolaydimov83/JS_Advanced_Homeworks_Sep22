function ticTacToe(input){
    let gameBoard=[ [false,false,false],
                    [false,false,false],
                    [false,false,false]]
    let nextTurn='X';
    let numberOfTurns=1;
                    for (const turn of input) {
                        let turnCoordinates=turn.split(' ');
                        if (gameBoard[turnCoordinates[0]][turnCoordinates[1]]){
                            console.log('This place is already taken. Please choose another!')
                        }else{
                            gameBoard[turnCoordinates[0]][turnCoordinates[1]]=nextTurn;
                            numberOfTurns++
                            if(checkForvictory(gameBoard)){
                                drawTheBoard(gameBoard)
                                return
                            }
                            if (numberOfTurns===10){
                                console.log(`The game ended! Nobody wins :(`);
                                drawTheBoard(gameBoard)
                                return
                            }
                            if(nextTurn==='X'){
                                nextTurn='O'
                            }else{
                                nextTurn='X'
                            }
                        }
                    }

function checkForvictory(gameBoard){
    
    for (const item of gameBoard) {
        if (item.join('')==='XXX'){
            console.log(`Player X wins!`)
            return true
        }else if (item.join('')==='OOO'){
            console.log(`Player O wins!`);
            return true

        }
    }
    
    for (let i = 0; i < gameBoard.length; i++) {
        let stringToCheck=''
        for (let j = 0; j < gameBoard.length; j++) {
            stringToCheck+=gameBoard[j][i]
        }
        if(stringToCheck==='XXX'){
            console.log(`Player X wins!`)
            return true
        }else if (stringToCheck==='OOO'){
            console.log(`Player O wins!`)
            return true
        }
    }
    let diagonalFirst=gameBoard[0][0]+gameBoard[1][1]+gameBoard[2][2]
    let diagonalSecond=gameBoard[0][2]+gameBoard[1][1]+gameBoard[2][0]
    if (diagonalFirst==='XXX'||diagonalSecond==='XXX'){
        console.log(`Player X wins!`)
        return true
    }else if(diagonalFirst==='OOO'||diagonalSecond==='OOO'){
        console.log(`Player O wins!`)
        return true
    }
}
function drawTheBoard(board){
    
    for (const row of board) {
        let string=''
        for (const square of row) {
            string+=square+'\t'
        }
        string.trim();
        console.log(string);
    }
}
}
ticTacToe(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"])

