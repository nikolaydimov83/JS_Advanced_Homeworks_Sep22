function validate() {
    let input=document.getElementById('email');
    input.addEventListener('change',()=>{
        let regex=/^[a-z]+@[a-z]+.[a-z]+$/g;
        if (!(input.value.match(regex))){
            input.className='error';
        }else{
            input.className='';
        }
    });
}