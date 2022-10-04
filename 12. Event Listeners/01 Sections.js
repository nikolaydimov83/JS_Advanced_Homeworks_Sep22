function solve(input){
    let output=document.getElementById('content');
    input.forEach(element => {
        let div=document.createElement('div');
        let p=document.createElement('p');
        p.textContent=element;
        p.style.display='none';
        div.addEventListener('click',()=>{
            p.style.display='block';
        })
        div.appendChild(p);
        output.appendChild(div);
    });
}
solve(['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet']);