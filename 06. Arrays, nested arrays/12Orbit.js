function orbit(width,length,x,y){
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
    for(let i=-currentOrbitValue;i<=currentOrbitValue){
        if(initailPoint.x+i>=0&&initailPoint.x+i<width&&initailPoint.y+i>=0&&initailPoint.y<length){
            
        }
    }
}
}