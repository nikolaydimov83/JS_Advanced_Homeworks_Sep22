function rectangle(...input){
    let rect={};
    rect.width=Number(input[0]);
    rect.height=Number(input[1]);
    let color=input[2];
    let color1=color.toUpperCase();
    console.log(color1)
    rect.color=color1[0]+color.substring(1);
    rect.calcArea=function(){return rect.width*rect.height}
    return rect
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());