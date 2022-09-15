function sortByTwoCriteria(array){
    array.sort((a,b)=>{
        if (a.length===b.length){
            if (a.toLowerCase()===b.toLowerCase()){
                return 0
            }else if (a.toLowerCase()>b.toLowerCase()){
                return 1
            }else{
                return -1
            }
        }else if(a.length>b.length){
            return 1
        }else{
            return -1
        }
    });
    for (const item of array) {
        console.log(item);
    }
}