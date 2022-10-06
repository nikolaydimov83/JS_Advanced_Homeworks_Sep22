function solve() {
    document.getElementById('add').addEventListener('click',addNewTask);
    function addNewTask(ev){
        ev.preventDefault();
        
        let inputs=ev.target.parentElement.querySelectorAll('input');
        let areInputsEmpty=false
        Array.from(inputs).forEach((input)=>{
            if (!input.value){
                areInputsEmpty=true;
            }
        })
        if (!areInputsEmpty){
            try{
                createTask();
            }catch(err){
                err
            }
            
        }
        
        function createTask (){
            let article=document.createElement('article');
            let h3=document.createElement('h3');
            h3.innerText=document.getElementById('task').value;
            article.appendChild(h3);

            let descriptionP=document.createElement('p');
            descriptionP.innerText=`Description: ${document.getElementById('description').value}`;
            article.appendChild(descriptionP);

            let dateP=document.createElement('p');
            dateP.innerText=`Due Date: ${document.getElementById('date').value}`;
            article.appendChild(dateP);


            let startButton=document.createElement('button');
            startButton.className='green';

            let divToAppendTo=document.querySelectorAll('div.wrapper section')[1]
                                        .querySelectorAll('div')[1];
            
            divToAppendTo.appendChild(article);
            createButton('green','open');
            createButton('red','open');
        }
    }
    function createButton(className,placeToInsert){
        let button=document.createElement('button');
            button.className=className;
            let buttonCommands={
                'green':startTask,
                'red':deleteTask,
                'orange':finishTask
            }

            let buttonInnerText={
                'green':'Start',
                'red':'Delete',
                'orange':'Finish'
            }

            let placesToInsert={
                'open':document.querySelector('.wrapper')
                .querySelectorAll('section')[1],
                'inProgress':document.getElementById('in-progress'),
                'complete':document.querySelector('.wrapper')
                .querySelectorAll('section')[3].querySelectorAll('div')[1]
            }

            button.innerText=buttonInnerText[className];
            let arrayOfArticles=placesToInsert[placeToInsert].querySelectorAll('article');
            let articleToInsertButton=arrayOfArticles[arrayOfArticles.length-1];
            let buttonHolder;
            if (articleToInsertButton.querySelector('.flex')){
                buttonHolder=articleToInsertButton.querySelector('.flex');
            }else{
                buttonHolder=document.createElement('div');
                buttonHolder.className='flex';
            }

            buttonHolder.appendChild(button)
            articleToInsertButton.appendChild(buttonHolder);
            button.addEventListener('click',buttonCommands[className]);
            
            
            function startTask(ev){
                let article=ev.target.parentElement.parentElement;
                let buttonHolder=ev.target.parentElement;
                placesToInsert['inProgress'].appendChild(article);
                ev.target.remove();
                createButton('orange','inProgress');

            }
            function deleteTask(ev){
                ev.target.parentElement.parentElement.remove();
            }
            function finishTask(ev){
                let article=ev.target.parentElement.parentElement;
                let buttonHolder=ev.target.parentElement;
                buttonHolder.remove();
                placesToInsert['complete'].appendChild(article);
            }
    }
}