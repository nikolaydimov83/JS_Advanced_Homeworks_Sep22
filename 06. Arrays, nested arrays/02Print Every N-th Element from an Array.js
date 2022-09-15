function printNth(array,position){
    let resultArray=[];
   for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key];
        if (key%position===0){
            resultArray.push(element);
        }
        
    }
   }
   return resultArray
}