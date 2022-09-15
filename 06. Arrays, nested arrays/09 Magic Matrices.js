function magicMatrices(array){
    let result=false;
    let rowResults=[];
    for (const item of array) {
        rowResults.push(item.reduce((previousValue,currentValue)=>previousValue+currentValue,0))
    }
    let columnResults=[];
for (let i = 0; i < array.length; i++) {
    let sum=0;
    for (let j = 0; j < array.length; j++) {
        sum+=array[j][i];
    }
    columnResults.push(sum);
}
columnResults.sort((a,b)=>{return a-b});
rowResults.sort((a,b)=>{return a-b});
if (columnResults[0]===columnResults[columnResults.length-1]&&rowResults[0]===rowResults[rowResults.length-1]&&rowResults[0]===columnResults[0]){
    result=true
}
return result
}


magicMatrices([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])