function sameNums(number){
    let stringedNum=number.toString();
    let firstDigit=stringedNum[0];
    let allDigitsEqual=true;
    let digitSum=Number.parseInt(firstDigit);
    for (let i=1;i<stringedNum.length;i++){
        if (firstDigit!==stringedNum[i]){
            allDigitsEqual=false;
        }
        digitSum+=Number.parseInt(stringedNum[i]);
    }
console.log(allDigitsEqual)
console.log(digitSum);
}
