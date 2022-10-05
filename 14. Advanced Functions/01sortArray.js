function sortArray(array,sortType){
    let object= {
        'asc':()=>array.sort((a,b)=>Number(a)-Number(b)),
        'desc':()=>array.sort((a,b)=>Number(b)-Number(a))
    }
    return object[sortType]();
}

let a=sortArray([14, 7, 17, 6, 8], 'desc');
console.log(a);