window.addEventListener('load', solve);

function solve() {
   let model=document.getElementById('model');
   let year=document.getElementById('year');
   let description=document.getElementById('description');
   let price=document.getElementById('price');
   let tbody=document.getElementById('furniture-list');
   let totalPrice=document.querySelector('.total-price');

    let addBtn=document.getElementById('add');
    addBtn.addEventListener('click',addFurniture);
    function addFurniture(ev){
        ev.preventDefault();
        if (model.value&&year.value&&description.value&&price.value){
            if(Number(year.value)>=0&&Number(price.value)>=0){
                
                let trInfo=document.createElement('tr');
                trInfo.className='info';
                
                let modelTd=document.createElement('td');
                modelTd.textContent=model.value;
                
                trInfo.appendChild(modelTd);

                let priceTd=document.createElement('td');
                priceTd.textContent=Number(price.value).toFixed(2)
                
                trInfo.appendChild(priceTd);

                let btnTd=document.createElement('td');
                trInfo.appendChild(btnTd);

                let btnMore=document.createElement('button');
                btnMore.className='moreBtn';
                btnMore.textContent='More Info';
                btnMore.addEventListener('click',(ev)=>{
                    if(btnMore.textContent==='More Info'){
                        trHide.style.display='contents';
                        btnMore.textContent='Less Info';
                    }else{
                        trHide.style.display='none';
                        btnMore.textContent='More Info';
                    }
                    
                });

                let btnBuy=document.createElement('button');
                btnBuy.className='buyBtn';
                btnBuy.textContent='Buyit';
                btnBuy.addEventListener('click',(ev)=>{
                    totalPrice.textContent=(Number(totalPrice.textContent)+Number(priceTd.textContent)).toFixed(2);
                    trInfo.remove();
                    trHide.remove();
                });
                btnTd.appendChild(btnMore);
                btnTd.appendChild(btnBuy);

                let trHide=document.createElement('tr');
                trHide.className='hide';

                let yearTd=document.createElement('td');
                yearTd.textContent=`Year: ${year.value}`;
                trHide.appendChild(yearTd);

                let descriptionTd=document.createElement('td');
                descriptionTd.textContent=`Description: ${description.value}`;
                descriptionTd.colSpan=3;
                trHide.appendChild(descriptionTd);


                
                tbody.appendChild(trInfo);
                tbody.appendChild(trHide);

                model.value='';
                price.value='';
                year.value='';
                description.value='';
            }
        }
    }

}
