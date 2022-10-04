function addItem(){
    let text=document.getElementById('newItemText');
    let value=document.getElementById('newItemValue');
    function addOption(){
 
        let newOption=document.createElement('option');
        newOption.value=value.value;
        newOption.textContent=text.value;
        let select=document.getElementById('menu');
        select.appendChild(newOption);
        text.value='';
        value.value='';
    }
    if(text.value&&value.value){
        addOption();
    }
    
}