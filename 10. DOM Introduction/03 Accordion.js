function accordion(){
    let button=document.getElementsByClassName('button')[0];
    let div=document.getElementById('extra');
    button.addEventListener('click',(ev)=>{
        if (button.innerText==='More'){
            button.innerText='Less';
            div.style.display='block';
        }else if (button.innerText==='Less'){
            button.innerText='More';
            div.style.display='none';
        }
    });
    function result(){
        if (button.innerText==='More'){
            button.innerText='Less';
            div.style.display='block';
        }else if (button.innerText==='Less'){
            button.innerText='More';
            div.style.display='none';
        }
    }
    result();
}