function solve(){
    let buttons=Array.from(document.querySelectorAll('p.answer-text'));
    let rightAnswers=[`onclick`, `JSON.stringify()`,`A programming API for HTML and XML documents`];
    let numberRightAnswers=0;
    let numberWrongAnswers=0;
    buttons.forEach((button)=>{
        button.addEventListener('click',checkAnswer);
    
    })
    function checkAnswer(ev){
        console.log(ev.target);
        if(rightAnswers.includes(ev.target.textContent)){
            numberRightAnswers++;
        }else{
            numberWrongAnswers++;
        }
        if (numberRightAnswers+numberWrongAnswers<3){
            ev.target.parentElement.parentElement.parentElement.parentElement.style.display='none';
            ev.target.parentElement.parentElement.parentElement.parentElement.className='';
            document.querySelectorAll('#quizzie section')[numberRightAnswers+numberWrongAnswers].style.display='block';
        }else if (numberRightAnswers+numberWrongAnswers===3){
            ev.target.parentElement.parentElement.parentElement.parentElement.style.display='none';
            ev.target.parentElement.parentElement.parentElement.parentElement.className='';
            //document.getElementById('quizzie').style.display='none';
            let results=document.getElementById('results');
            results.style.display='block';
            results.className='';
            if (numberRightAnswers===3){
                
                results.querySelector('h1').textContent=`You are recognized as top JavaScript fan!`;
            }else{
                results.querySelector('h1').textContent=`You have ${numberRightAnswers} right answers`;
            }
            
        }

    }
}