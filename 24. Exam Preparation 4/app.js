function solve() {
let recipientName=document.getElementById('recipientName');
let title=document.getElementById('title');
let message=document.getElementById('message');
let submitBtn=document.getElementById('add');
let resetBtn=document.getElementById('reset');
resetBtn.addEventListener('click',(ev)=>{
    ev.preventDefault();
    recipientName.value='';
    title.value='';
    message.value='';
})

submitBtn.addEventListener('click',submitMail);

function submitMail(ev){
    ev.preventDefault();
    if(recipientName.value&&title.value&&message.value){
        let ul=document.getElementById('list');
        let li=document.createElement('li');

        let h4Title=document.createElement('h4');
        h4Title.textContent=`Title: ${title.value}`;
        li.appendChild(h4Title);

        let h4RecepientName=document.createElement('h4');
        h4RecepientName.textContent=`Recipient Name: ${recipientName.value}`;
        li.appendChild(h4RecepientName);

        let spanMessage=document.createElement('span');
        spanMessage.textContent=message.value;
        li.appendChild(spanMessage);

        let divBtnWrapper=document.createElement('div');
        divBtnWrapper.id='list-action';

        let sendBtn=document.createElement('button');
        sendBtn.type='submit';
        sendBtn.id='send';
        
        sendBtn.textContent='Send';
        sendBtn.addEventListener('click',()=>{
            //let li=document.createElement('li');
            Array.from(li.children).forEach((child)=>{
                if (child.id!=='delete'&&child.id!=='list-action'){
                    child.remove();
                }
                
            })
            let spanRecipient=document.createElement('span');
            let str=h4RecepientName.textContent.replace('Recipient Name','To');
            spanRecipient.textContent=str;
            li.appendChild(spanRecipient);

            let spanTitle=document.createElement('span');
            spanTitle.textContent=h4Title.textContent;
            li.appendChild(spanTitle);

            let ulSent=document.querySelector('ul.sent-list');
            sendBtn.remove()
            divBtnWrapper.remove();
            li.appendChild(divBtnWrapper);
            let newDivWrapper=document.createElement('div');
            newDivWrapper.appendChild(deleteBtn);
            newDivWrapper.className='btn';
            li.appendChild(newDivWrapper);
            deleteBtn.removeAttribute('id');
            deleteBtn.className='delete'
            /*divBtnWrapper.className='btn';
            divBtnWrapper.id=''*/
            ulSent.appendChild(li);
        });

        let deleteBtn=document.createElement('button');
        
        deleteBtn.type='submit';
        deleteBtn.id='delete';
        deleteBtn.textContent='Delete';
        deleteBtn.addEventListener('click',(ev)=>{

            let deleteUl=document.querySelector('.delete-list');
            if(ev.target.parentElement.parentElement.parentElement){
            if(ev.target.parentElement.parentElement.parentElement.id==='list'){
                sendBtn.remove();
            }}
            Array.from(li.children).forEach((child)=>{
                
                child.remove();
            
            
        })
            let spanRecipient=document.createElement('span');
            let str=h4RecepientName.textContent.replace('Recipient Name','To');
            spanRecipient.textContent=str;
            li.appendChild(spanRecipient);

            let spanTitle=document.createElement('span');
            spanTitle.textContent=h4Title.textContent;
            li.appendChild(spanTitle);
            deleteBtn.remove();
            deleteUl.appendChild(li)

        });
        divBtnWrapper.appendChild(sendBtn);
        divBtnWrapper.appendChild(deleteBtn);
        
        li.appendChild(divBtnWrapper);
        ul.appendChild(li);

        recipientName.value='';
        title.value='';
        message.value='';

    }
}
}
solve()