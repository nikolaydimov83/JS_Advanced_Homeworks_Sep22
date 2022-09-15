function rotateArray(array,numberOfRotations){
    for (let i=1;i<=numberOfRotations;i++){
        let element = array.pop();
        array.unshift(element);
    }
    let resultString=''
    for (const item of array) {
        resultString+=item+' '
    }
    resultString.trim();
    console.log(resultString)
}