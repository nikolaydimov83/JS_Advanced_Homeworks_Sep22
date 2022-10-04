function lockedProfile(){
    let buttons=Array.from(document.getElementsByTagName('button'));
    let allHidden=Array.from(document.querySelectorAll('.profile div'));
    //allHidden.forEach((element)=>element.style.display='none');
    
    buttons.forEach((button)=>{
        button.addEventListener('click',(ev)=>{
             let parent=ev.target.parentElement;
             let hidden=parent.querySelector('div');
             let lockedNotLocked=parent.querySelector('input');
            

             if (!lockedNotLocked.checked){
                if (button.textContent==='Show more'){
                    hidden.style.display='inline-block';
                    button.textContent='Hide it';
                }else{
                    hidden.style.display='none';
                    button.textContent='Show more';
                }
                
             }
             
        });
    });

}