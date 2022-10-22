function solve() {
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let listOfMails = document.getElementById('list');
 
    document.getElementById('add').addEventListener('click', addFunc);
    document.getElementById('reset').addEventListener('click', (e) => {
        e.preventDefault();
        recipient.value = '';
        title.value = '';
        message.value = '';
    });
 let a=[]
 a.includes()
 addFunc.call()
    function addFunc(e) {
        let sendMails = document.getElementsByClassName('sent-list')[0]
        sendMails.removeEventListener('',)
        e.preventDefault();
        for (const item of sendMails) {
            console.log(sendMails);
        }
        if (!recipient.value || !title.value || !message.value) {
            return;
        }
 
        createElements(recipient, title, message);
 
        let bTn=document.getElementById('send')
        bTn.addEventListener('click', (e) => {
            let li = document.createElement('li');
 
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient.value}`;
 
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title.value}`;
 
            let div = document.createElement('div');
            div.classList.add('btn');
 
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            buttonDelete.setAttribute('type', 'submit');
            buttonDelete.classList.add('delete');
 
            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            div.appendChild(buttonDelete);
            li.appendChild(div);
            sendMails.appendChild(li);
 
            e.target.parentElement.parentElement.remove();
        });
 
        function createElements(recipient, title, message) {
            let li = document.createElement('li');
 
            let hTitle = document.createElement('h4');
            hTitle.textContent = `Title: ${title.value}`;
 
            let hRecipient = document.createElement('h4');
            hRecipient.textContent = `Recipient Name: ${recipient.value}`;
 
            let span = document.createElement('span');
            span.textContent = message.value;
 
            let div = document.createElement('div');
            div.setAttribute('id', 'list-action');
 
            let sendButton = document.createElement('button');
            sendButton.textContent = 'Send';
            sendButton.setAttribute('type', 'submit');
            sendButton.setAttribute('id', 'send');
 
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
 
            deleteButton.setAttribute('type', 'submit');
            deleteButton.setAttribute('id', 'delete');
 
            div.appendChild(sendButton);
            div.appendChild(deleteButton);
 
            li.appendChild(hTitle);
            li.appendChild(hRecipient);
            li.appendChild(span);
            li.appendChild(div);
            listOfMails.appendChild(li);
 
            recipient.value = '';
            title.value = '';
            message.value = '';
        }
        bTn.removeEventListener('',)
    }
    
}
solve();