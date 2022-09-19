function result(){
    let sortedList=[];

    let sortedListObject={
        add:function(number){
          
            if (!isNaN(number) && (!isNaN(parseFloat(number)))){
                sortedList.push(Number(number));
                sortedList.sort((a,b)=>a-b)
                this.size=sortedList.length;
            }
            
            
        },
        remove:function(index){
            let indexAsNum=Number(index)
            if ((indexAsNum<=sortedList.length-1)&&Number.isInteger(indexAsNum)&&indexAsNum>=0){
                sortedList.splice(index,1);
                this.size=sortedList.length;
            }
            
        },
        get:(index)=>{
            let indexAsNum=Number(index)
            if ((indexAsNum<=sortedList.length-1)&&Number.isInteger(indexAsNum)&&indexAsNum>=0){
                return sortedList[index];
            }
           
            
        },
        size:sortedList.length
    }
   return sortedListObject
}



let list = result();

list.add(5);

list.add(6);
list.add(4); 
console.log(list.size)
list.remove(1); 

console.log(list.size)
list.add(3); 
list.add(2); 
list.add(1)
list.add(0); 
