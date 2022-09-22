function solve(){
    const input = document.getElementById('input').value;
    const btn = document.getElementById('formatItBtn');
    let output=document.getElementById('output')
    btn.addEventListener('click',formatText);
    function formatText(){
        let arrayOfSent=input.split('. ');
        let numberFullIterations=Math.floor(arrayOfSent.length/3)-1;
        let currentIteration=0;
        while(currentIteration<=numberFullIterations){
            let p=document.createElement('p');
            p.innerText=arrayOfSent[currentIteration*3]+'. '+arrayOfSent[currentIteration*3+1]+'. '+arrayOfSent[currentIteration*3+2]+'.'
            output.appendChild(p);
            currentIteration++;
        }
        let partialItterationSent=(arrayOfSent.length%3)-1
        if (partialItterationSent>-1){
            let string=''
            for (let i=0;i<=partialItterationSent;i++){
                if (arrayOfSent[arrayOfSent.length-i-1]!==''){
                string+=arrayOfSent[arrayOfSent.length-i-1];
            }
            }
            string.trim();
            let p=document.createElement('p');
            p.innerText=string;
            output.appendChild(p);
        }
    }
    
}