function notify(message='Hello!') {
  let messageBox=document.getElementById('notification');
  messageBox.style.display='block';
  messageBox.textContent=message;
  messageBox.addEventListener('click',(event)=>{
    messageBox.style.display='none';
    messageBox.textContent='';
  });
}