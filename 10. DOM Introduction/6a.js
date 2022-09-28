function solve(){
    const input = document.getElementById('input').value;
    const btn = document.getElementById('formatItBtn');
    let output=document.getElementById('output')
    btn.addEventListener('click',formatText);
    function formatText(){
        output.innerHTML='';
        let arrayOfSent1=input.split('.');
        let arrayOfSent=arrayOfSent1.filter((string)=>{return string!==''});
        let numberFullIterations=Math.floor(arrayOfSent.length/3)-1;
        let currentIteration=0;
        while(currentIteration<=numberFullIterations){
            let p=document.createElement('p');
            p.innerText=arrayOfSent[currentIteration*3]+'.'+arrayOfSent[currentIteration*3+1]+'.'+arrayOfSent[currentIteration*3+2];
            if (p.innerText[p.innerText.length-1]!=='.'){
                p.innerText+='.';
            }
            output.appendChild(p);
            currentIteration++;
        }
        let partialItterationSent=(arrayOfSent.length%3)-1
        if (partialItterationSent>-1){
            let string=''
            for (let i=partialItterationSent;i>=0;i--){
                if (arrayOfSent[arrayOfSent.length-i-1]!==''){
                string+=`${arrayOfSent[arrayOfSent.length-i-1]}.`;
            }
            }
            string=string.trim();
            /*if (string[string.length-1]!=='.'){
                string+='.';
            }*/
            let p=document.createElement('p');
            p.innerText=string//.substring(0,string.length-1);
            if (string){
                output.appendChild(p);
            }
            
        }
    }
    
}