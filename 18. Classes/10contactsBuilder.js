class Contact{
    #online
constructor(firstName,lastName,phone,email){
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.email=email;
    this.#online=false;
    this.domElement=undefined
    
}

get online(){
    return this.#online
}
set online(value){
    if (value!==true&&value!==false){
        
    }else if (value===true){
        if(this.domElement){
            this.domElement.classList.add('online');
        }
        
    }else if(value===false){
        this.domElement.classList.remove('online');
    }
    this.#online=value;
}

render(id){
    let wrapper=document.getElementById(id);

    let article=document.createElement('article');
    
    let titleDiv=document.createElement('div');
    titleDiv.className='title';
    titleDiv.textContent=this.firstName+' '+this.lastName;

    let button=document.createElement('button');
    button.textContent='ℹ';
    button.addEventListener('click',showInfo)
    
    titleDiv.appendChild(button)
    article.appendChild(titleDiv);

    let infoDiv=document.createElement('div');
    infoDiv.className='info';
    infoDiv.style.display='none';

    let spanPhone=document.createElement('span');
    spanPhone.textContent=`☎ ${this.phone}`;
    infoDiv.appendChild(spanPhone);

    let spanEmail=document.createElement('span');
    spanEmail.textContent=`✉ ${this.email}`;
    infoDiv.appendChild(spanEmail)

    article.appendChild(infoDiv);
    titleDiv.id=wrapper.querySelectorAll('article').length;
    wrapper.appendChild(article);
    this.domElement=document.getElementById(titleDiv.id);
    if(this.online===true){
        titleDiv.classList.add('online');
    }

    function showInfo(ev){
      
        
        if(ev.target.parentElement.nextElementSibling.style.display==='none'){
            ev.target.parentElement.nextElementSibling.style.display='block'
        }else{
            ev.target.parentElement.nextElementSibling.style.display='none';
        }
    }
}

}