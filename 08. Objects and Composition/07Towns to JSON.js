function townsToJson(input){
    let resultArray=[]
    let town=input[0].split('| ')[1].trim();
    let latitude=input[0].split(' | ')[1];
    let longtitude=input[0].split(' |')[2].trim();
    input.shift();
    for (const townAsArr of input) {
        let townObj={};
        
        townObj[town]=townAsArr.split('| ')[1].trim(),
        townObj[latitude]=Number(Number(townAsArr.split(' | ')[1]).toFixed(2));
        townObj[longtitude]=Number(Number(townAsArr.split(' |')[2]).toFixed(2));
       //console.log(townObj)
       resultArray.push(townObj);
    }
    return JSON.stringify(resultArray)
}

townsToJson(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])