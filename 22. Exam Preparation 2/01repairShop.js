function solve(){
    let productType=document.getElementById('type-product');
    let description=document.getElementById('description');
    let cleintName=document.getElementById('client-name');
    let clientPhone=document.getElementById('client-phone');
    let submitBtn=document.querySelector('button');

    let completedOrders=document.getElementById('completed-orders')
    

    submitBtn.addEventListener('click',submitRepairOrder);

    let recievedOrders=document.getElementById('received-orders');

    let clearBtn=document.querySelector('.clear-btn');
    clearBtn.addEventListener('click',(ev)=>{
        Array.from(completedOrders.querySelectorAll('div.container')).forEach((element)=>{
            element.remove();
        })
    })
    
    function submitRepairOrder(ev){
        ev.preventDefault();
        
        if (description.value&&cleintName.value&&clientPhone.value){
            let containerDiv=document.createElement('div');
            containerDiv.className='container'
            
            let h2RepairType=document.createElement('h2');
            h2RepairType.textContent=`Product type for repair: ${productType.value}`;
            containerDiv.appendChild(h2RepairType);

            let h3clientInfo=document.createElement('h3');
            h3clientInfo.textContent=`Client information: ${cleintName.value}, ${clientPhone.value}`;
            containerDiv.appendChild(h3clientInfo);

            let h4Description=document.createElement('h4');
            h4Description.textContent=`Description of the problem: ${description.value}`;
            containerDiv.appendChild(h4Description);

            let startBtn=document.createElement('button');
            startBtn.className='start-btn';
            startBtn.textContent='Start repair';
            containerDiv.appendChild(startBtn);
            startBtn.addEventListener('click',(ev)=>{
                finishBtn.removeAttribute('disabled');
                startBtn.disabled=true;
            });

            let finishBtn=document.createElement('button');
            finishBtn.className='finish-btn';
            finishBtn.textContent='Finish repair';
            finishBtn.disabled=true;
            finishBtn.addEventListener('click',(ev)=>{
                completedOrders.appendChild(containerDiv);
                Array.from(containerDiv.querySelectorAll('button')).forEach((btn)=>{
                    btn.remove();
                })
            })
            containerDiv.appendChild(finishBtn);


            description.value='';
            cleintName.value='';
            clientPhone.value='';
            productType.value='Computer';
            recievedOrders.appendChild(containerDiv);

        }
    }

}

window.addEventListener("load", solve);