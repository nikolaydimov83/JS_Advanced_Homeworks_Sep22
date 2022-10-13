let array=(function(){
Array.prototype.last=function(){
    return this[this.length-1]
}

Array.prototype.skip=function(n){
    if (n>=0&&n<this.length+1)
    {return this.slice(n);}
}

Array.prototype.take=function(n){
    if (n>=0&&n<this.length+1)
    {return this.slice(0,n);}
}

Array.prototype.sum=function(){
    let sum=0;
    this.forEach((element)=>sum+=element)
    return sum
}

Array.prototype.average=function(){
    let sum=0;
    this.forEach((element)=>sum+=element)
    return sum/this.length
}

})()

let a = new Array();
for (let i=1;i<=5;i++){
    a.push(i);
}


console.log(a.skip())
