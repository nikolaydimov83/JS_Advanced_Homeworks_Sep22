function orbit(array){
let width=array[0];
let length=array[1];
let x=array[3];
let y=array[2];
let numberOfCells=width*length
let takenCells=1;
let arrayOfCells=[];
class Point{
    constructor(x,y,value){
        this.x=x;
        this.y=y;
        this.value=value
    }
}
let initailPoint=new Point(x,y,1)
arrayOfCells.push(initailPoint);
let currentOrbitValue=1;
while (takenCells<numberOfCells){
    for(let i=-currentOrbitValue;i<=currentOrbitValue;i++){
        for (let j=-currentOrbitValue;j<=currentOrbitValue;j++){
            if(initailPoint.x+j>=0&&initailPoint.x+j<width&&initailPoint.y+i>=0&&initailPoint.y+i<length){
            let newPoint=new Point(x+j,y+i,currentOrbitValue+1);
            if(arrayOfCells.filter((point=>point.x===newPoint.x&&point.y===newPoint.y)).length===0){
                    arrayOfCells.push(newPoint);
                    takenCells++;
            }
        }
        }

    }
    currentOrbitValue++;
}
arrayOfCells.sort((cell1,cell2)=>cell1.x-cell2.x).sort((cell1,cell2)=>cell1.y-cell2.y)
let stringToPrint='';
for (const key in arrayOfCells) {
    if (Object.hasOwnProperty.call(arrayOfCells, key)) {
        const element = arrayOfCells[key];
        
        if (key>1&&arrayOfCells[key-1].y!==arrayOfCells[key].y){
            stringToPrint.trim();
            console.log(stringToPrint);
            stringToPrint=''
        }
        stringToPrint+=element.value+' ';
        
    }
}
console.log(stringToPrint.trim())


}

orbit([7, 4, 2, 2])