window.addEventListener("load", solve);

function solve() {
  let fname=document.getElementById('first-name');
  let lname=document.getElementById('last-name');
  let age=document.getElementById('age');
  let title=document.getElementById('story-title');
  let genre=document.getElementById('genre');
  let story=document.getElementById('story');

  let formBtn=document.getElementById('form-btn');

  let previewUL=document.getElementById('preview-list');

  formBtn.addEventListener('click', publishStory);
  function publishStory(ev){
    ev. preventDefault();
    this
if(fname.value&&lname.value&&age.value&&title.value&&story.value){
      let storyLi=document.createElement('li');
    storyLi.className='story-info';

    let article=document.createElement('article');

    let nameH4=document.createElement('h4');
    nameH4.textContent='Name: '+fname.value+' '+lname.value;
    fname.value='';
    lname.value='';
    article.appendChild(nameH4);

    let ageP=document.createElement('p');
    ageP.textContent=`Age: ${age.value}`
    age.value='';
    article.appendChild(ageP)

    let titleP=document.createElement('p');
    titleP.textContent=`Title: ${title.value}`
    title.value='';
    article.appendChild(titleP)

    let genreP=document.createElement('p');
    genreP.textContent=`Genre: ${genre.value}`
    //genre.value='Disturbing';
    article.appendChild(genreP);

    let storyP=document.createElement('p');
    storyP.textContent=story.value
    story.value='';
    article.appendChild(storyP);

    let saveBtn=document.createElement('button');

    saveBtn.disabled=false;
    saveBtn.textContent='Save Story';
    saveBtn.className='save-btn';
    saveBtn.addEventListener('click',(ev)=>{
      let h1=document.createElement('h1');
      h1.textContent="Your scary story is saved!";
      let divFormWrap=document.querySelector(`.form-wrapper`);
      divFormWrap.remove();

      let divSideWrap=document.querySelector(`#side-wrapper`);
      divSideWrap.remove();
      let main=document.getElementById('main');
      main.appendChild(h1);


    });
    let editBtn=document.createElement('button');
    editBtn.textContent='Edit Story';
    editBtn.className='edit-btn';
    editBtn.disabled=false;
   
    editBtn.addEventListener('click',(ev)=>{
      fname.value=nameH4.textContent.substring(6).split(' ')[0]
      lname.value=nameH4.textContent.substring(6).split(' ')[1]
      age.value=ageP.textContent.substring('Age: '.length)
      title.value=titleP.textContent.substring('Title: '.length);
      genre.value=genreP.textContent.substring('Genre: '.length);
      story.value=storyP.textContent
      editBtn.disabled=true;
      deleteBtn.disabled=true;
      saveBtn.disabled=true;
      formBtn.disabled=false
    
      storyLi.remove()
    });

    let deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete Story';
    deleteBtn.className='delete-btn';
    deleteBtn.disabled=false;
    deleteBtn.addEventListener('click',(ev)=>{
      storyLi.remove();
      formBtn.disabled=false;
    });
    

    storyLi.appendChild(article);
    storyLi.appendChild(saveBtn);
    storyLi.appendChild(editBtn);
    storyLi.appendChild(deleteBtn);
    previewUL.appendChild(storyLi);
    formBtn.disabled=true;
}

  }
}
