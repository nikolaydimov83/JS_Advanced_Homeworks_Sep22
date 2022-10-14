function solve(){
    let formSubmitButton=document.getElementById('publish-btn');
    formSubmitButton.addEventListener('click',submitForm);
    let title=document.getElementById('post-title');
    let category=document.getElementById('post-category');
    let content=document.getElementById('post-content');
    let ulPost=document.getElementById('review-list');

    let ulPosted=document.getElementById('published-list');

    let clearBtn=document.getElementById('clear-btn');
    clearBtn.addEventListener('click',(ev)=>{
        let liElementsToClear=Array.from(ulPosted.querySelectorAll('li'));
        liElementsToClear.forEach((element)=>{
            element.remove();
        })
    })

    function submitForm(ev){
        ev.preventDefault()
        if(title.value&&category.value&&content.value){
        
        let liReview=document.createElement('li');
        liReview.className='rpost';

        let article=document.createElement('article');

        let h4Title=document.createElement('h4')
        h4Title.textContent=title.value
        article.appendChild(h4Title);

        let pCategory=document.createElement('p');
        pCategory.textContent=`Category: `+category.value;
        article.appendChild(pCategory);

        let pContent=document.createElement('p');
        pContent.textContent=`Content: `+content.value;
        article.appendChild(pContent);
        liReview.appendChild(article);

        let approveBtn=document.createElement('button');
        approveBtn.classList.add('action-btn','approve');
        approveBtn.textContent='APPROVE';
        liReview.appendChild(approveBtn);
        approveBtn.addEventListener('click',()=>{
            liReview.remove();
            ulPosted.appendChild(liReview);
            approveBtn.remove();
            editBtn.remove();
        });

        let editBtn=document.createElement('button');
        editBtn.classList.add('action-btn','edit');
        editBtn.textContent='EDIT';
        liReview.appendChild(editBtn);
        editBtn.addEventListener('click',()=>{
            liReview.remove();
            title.value =h4Title.textContent;

            let valueToTransferCategory=pCategory.textContent.replace('Category: ','')
            category.value=valueToTransferCategory;

            let valueToTransferContent=pContent.textContent.replace('Content: ','')
            content.value=valueToTransferContent;
        });

        

        ulPost.appendChild(liReview);
    title.value='';
    content.value='';
    category.value='';    
    }
    }
}

solve()