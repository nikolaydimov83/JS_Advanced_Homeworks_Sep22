function solve(){
    let allBtns=document.querySelectorAll('button');
    let quickCheckBtn=allBtns[0];
    let clearBtn=allBtns[allBtns.length-1];
    quickCheckBtn.addEventListener('click',checkSudo);
    
    
    function checkSudo(){
        let gridOfValues=[];
        let checkGridSum=true;
        let gridTr=Array.from(document.querySelectorAll('tbody tr'));
        gridTr.forEach((tr)=>{
            let row=[]
            Array.from(tr.children).forEach((td)=>{
                if (row.includes(td.querySelector('input').value)){
                    checkGridSum=false;
                }
                row.push(td.querySelector('input').value);
            })
            gridOfValues.push(row);
        });
        gridOfValues.forEach((row=>{
            let rowSum=row.reduce((prev,next,curr)=>{
                return Number(prev)+Number(next);
            },0)
            if (rowSum!==6){
                checkGridSum=false
            }
            row.forEach((x)=>{
                if (x<1||x>3){
                    checkGridSum=false;
                }

            })
        }))
        var colSum = gridOfValues.reduce((a, b) => a.map((x, i) => Number(x) + Number(b[i])));
        colSum.forEach((x)=>{
            if (x!==6){
                checkGridSum=false;
            }
        });
        
        if(checkGridSum===true){
            document.getElementById('check').querySelector('p').style.color='green';
            document.getElementById('check').querySelector('p').innerText="You solve it! Congratulations!";
            document.querySelector('table').style.border='2px solid green';

        }else{
            document.getElementById('check').querySelector('p').style.color='red';
            document.getElementById('check').querySelector('p').innerText="NOP! You are not done yet...";
            document.querySelector('table').style.border='2px solid red';
        }
    }
    clearBtn.addEventListener('click',()=>{
        let gridOfValues=[];
        let gridTr=Array.from(document.querySelectorAll('tbody tr'));
        gridTr.forEach((tr)=>{
            Array.from(tr.children).forEach((td)=>{
                td.querySelector('input').value='';
                document.querySelector('table').style.border='none';
                document.getElementById('check').querySelector('p').remove();
                let p=document.createElement('p');
                document.getElementById('check').appendChild(p);
            })
            
        });
    })
}