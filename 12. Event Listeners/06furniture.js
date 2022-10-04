function solve(){
    let generateBtn=document.getElementById('exercise').querySelector('button');
    let inputTextArea=document.getElementById('exercise').querySelector('textarea');
    let allBtns=document.getElementById('exercise').querySelectorAll('button');
    let buyBtn=allBtns[allBtns.length-1];
    let allTextAreas=document.getElementById('exercise').querySelectorAll('textarea');
    let buyTextArea=allTextAreas[allTextAreas.length-1];
    generateBtn.addEventListener('click',appendFurnitureToTable);
    function appendFurnitureToTable(){
        let tbody=document.querySelectorAll('tbody')[0];
        
        let arrayOfFurnitures=JSON.parse(inputTextArea.value);
        arrayOfFurnitures.forEach((furniture)=>{
            let newTr=document.createElement('tr');
            let img=document.createElement('img');
            img.src=furniture.img;
            let tdImg=document.createElement('td');
            tdImg.appendChild(img);
            newTr.appendChild(tdImg);

            let tdName=document.createElement('td');
            tdName.textContent=furniture.name;
            newTr.appendChild(tdName);

            let tdPrice=document.createElement('td');
            tdPrice.textContent=furniture.price;
            newTr.appendChild(tdPrice);

            let tdDecFac=document.createElement('td');
            tdDecFac.textContent=furniture.decFactor;
            newTr.appendChild(tdDecFac);

            let checkBox=document.createElement('input');
            checkBox.type='checkbox';
            let tdCheckBox=document.createElement('td');
            tdCheckBox.appendChild(checkBox)
            newTr.appendChild(tdCheckBox);
            
            tbody.appendChild(newTr)
        })
    }
    
    buyBtn.addEventListener('click',(ev)=>{
        let checkedFurnitures=[];
        let string='Bought furniture: ';
        let allFurnitureInTable=Array.from(document.querySelectorAll('tbody tr'));
        
        allFurnitureInTable.forEach((furniture,inde)=>{
            let checkBox=furniture.querySelector('input');
            if (checkBox.checked){
                let furnitureAsObjs={};
                furnitureAsObjs['name']=furniture.querySelectorAll('td')[1].innerText;
                furnitureAsObjs['img']=furniture.querySelectorAll('td')[0].firstChild.src;
                furnitureAsObjs['price']=furniture.querySelectorAll('td')[2].innerText;
                furnitureAsObjs['decFactor']=furniture.querySelectorAll('td')[3].innerText;
                checkedFurnitures.push(furnitureAsObjs);
               string+=`${furnitureAsObjs.name}`+', ';
            }
        });
        string=string.substring(0,string.length-2);
        let sum=Number(checkedFurnitures[0].price);
        let totalPrice=checkedFurnitures.reduce((prevVal,currentVal,currIndex)=>{
        sum+=Number(currentVal.price);
        });
        string+=`
Total price: ${sum.toFixed(2)}`
        sum=Number(checkedFurnitures[0].decFactor);
        let sumDecFac=checkedFurnitures.reduce((prevVal,currentVal,currIndex)=>{
            sum+=Number(currentVal.decFactor);

            });
        let avgDecFac=sum/checkedFurnitures.length;
        string+=`
Average decoration factor: ${avgDecFac}`
    buyTextArea.value=string;
});
    
}