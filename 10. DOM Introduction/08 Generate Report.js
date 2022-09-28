function generateReport(){
    let allThs=Array.from(document.querySelectorAll('th'));
    let allTrs=Array.from(document.querySelectorAll('tbody tr'));
    let objectOfHeaders={}
    let resultArray=[];
    allTrs.forEach((tr)=>{
        let objectToPush={};
        allThs.forEach((th,key)=>{
            if(th.querySelector('input').checked){
                
                objectToPush[th.querySelector('input').name]=tr.children[key].innerText;
                
            }
        })
        resultArray.push(objectToPush)
    })

    let output=document.getElementById('output');
    output.value=JSON.stringify(resultArray);
}