function solve() {
    let fname=document.getElementById('fname');
    let lname=document.getElementById('lname');
    let email=document.getElementById('email');
    let birth=document.getElementById('birth');
    let position=document.getElementById('position');
    let salary=document.getElementById('salary');
    let hireBtn=document.getElementById('add-worker');
    let tbody=document.getElementById('tbody')
    hireBtn.addEventListener('click',addWorker);
    function addWorker(ev){
        ev.preventDefault();

        if(fname&&lname&&email&&birth&&position&&salary){
            if(typeof fname.value==='string'&&typeof lname.value==='string'&&typeof email.value==='string'
            &&typeof birth.value==='string'&&typeof position.value==='string'&&typeof salary.value==='string'){
                    
                let tr=document.createElement('tr');
                
                let fnameTd =document.createElement('td');
                fnameTd.textContent=fname.value
                tr.appendChild(fnameTd);


                let lnameTd =document.createElement('td');
                lnameTd.textContent=lname.value
                tr.appendChild(lnameTd);

                let emailTd =document.createElement('td');
                emailTd.textContent=email.value
                tr.appendChild(emailTd);

                let birthTd =document.createElement('td');
                birthTd.textContent=birth.value
                tr.appendChild(birthTd);

                let positionTd =document.createElement('td');
                positionTd.textContent=position.value
                tr.appendChild(positionTd);

                let salaryTd =document.createElement('td');
                salaryTd.textContent=salary.value;
                let budget=document.getElementById('sum');
                budget.textContent=(Number(budget.textContent)+Number(salaryTd.textContent)).toFixed(2);
                tr.appendChild(salaryTd);

                let fireBtn=document.createElement('button');
                fireBtn.textContent='Fired';
                fireBtn.className='fired';
                fireBtn.addEventListener('click',()=>{
                    budget.textContent=(Number(budget.textContent)-Number(salaryTd.textContent)).toFixed(2);
                    tr.remove();
                });

                let editBtn=document.createElement('button');
                editBtn.textContent='edit';
                editBtn.className='edit';
                editBtn.addEventListener('click',()=>{
                    budget.textContent=(Number(budget.textContent)-Number(salaryTd.textContent)).toFixed(2);
                    fname.value=fnameTd.textContent;
                    lname.value=lnameTd.textContent;
                    email.value=emailTd.textContent;
                    birth.value=birthTd.textContent;
                    position.value=positionTd.textContent;
                    salary.value=salaryTd.textContent;
                    tr.remove();
                });
                
                let buttonTd=document.createElement('td');
                buttonTd.appendChild(fireBtn)
                buttonTd.appendChild(editBtn)
                tr.appendChild(buttonTd);
                fname.value='';
                lname.value='';
                email.value='';
                birth.value='';
                position.value='';
                salary.value='';
                tbody.appendChild(tr);

            }
        }
    }
    
}
solve()