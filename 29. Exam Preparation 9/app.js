function solve(){
   let creator=document.getElementById('creator')
   let title=document.getElementById('title')
   let category=document.getElementById('category')
   let content=document.getElementById('content')

   let createBtn=document.querySelector('form').querySelector('button');
   let section=document.querySelectorAll('section')[1];

   createBtn.addEventListener('click',createArticle);
   function createArticle(ev){
      ev.preventDefault();
      let article=document.createElement('article');
      let titleH1=document.createElement('h1');
      titleH1.textContent=title.value;
      article.appendChild(titleH1);

      let categoryP=document.createElement('p');
      categoryP.textContent='Category:';
      let categoryStrong=document.createElement('strong');
      categoryP.appendChild(categoryStrong);
      categoryStrong.textContent=category.value;
      article.appendChild(categoryP);

      let creatorP=document.createElement('p');
      creatorP.textContent='Creator:';
      let creatorStrong=document.createElement('strong');
      creatorP.appendChild(creatorStrong);
      creatorStrong.textContent=creator.value;
      article.appendChild(creatorP);

      let contentP=document.createElement('p');
      contentP.textContent=content.value;
      article.appendChild(contentP);

      let btnWrapperDiv=document.createElement('div');
      btnWrapperDiv.className='buttons';

      let deleteBtn=document.createElement('button');
      deleteBtn.classList.add('btn','delete');
      deleteBtn.innerText='Delete'
      deleteBtn.addEventListener('click',()=>{
         article.remove();
      })
      btnWrapperDiv.appendChild(deleteBtn);

      let archiveBtn=document.createElement('button');
      archiveBtn.classList.add('btn','archive');
      archiveBtn.textContent='Archive';
      archiveBtn.addEventListener('click',()=>{
         let archiveTitleLi=document.createElement('li');
         archiveTitleLi.textContent=titleH1.textContent;
         let ol=Array.from(document.querySelectorAll('ol'))[0];
         ol.appendChild(archiveTitleLi);
         article.remove();
         let allArchiveChildren=Array.from(ol.children)
         let sortedArrayOfChildren=allArchiveChildren.sort((a,b)=>{
            if(a.textContent<b.textContent){
               return -1
            }else{
               return 1
            }
         });
         allArchiveChildren.forEach((child)=>child.remove());
         sortedArrayOfChildren.forEach((child)=>ol.appendChild(child))
      })
      btnWrapperDiv.appendChild(archiveBtn);

      article.appendChild(btnWrapperDiv)

      creator.value='';
      title.value='';
      category.value='';
      content.value='';

      
      section.appendChild(article);
   }
  }
