window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name')
    let author = document.getElementById('author')
    let date = document.getElementById('date')
    
    let addButton=document.getElementById('add-btn');
    addButton.addEventListener('click',addSong);
    function addSong(ev){
        ev.preventDefault();
        if (genre.value&&name.value&&author.value&&date.value){
            
            let divAllHitsContainer=document.querySelector('.all-hits-container')
            let divHitContainer=document.createElement('div');
            divHitContainer.className='hits-info'
            
            let img=document.createElement('img');
            img.src='./static/img/img.png';
            divHitContainer.appendChild(img);

            let genreH2=document.createElement('h2');
            genreH2.textContent=`Genre: ${genre.value}`;
            genre.value='';
            divHitContainer.appendChild(genreH2);

            let nameH2=document.createElement('h2');
            nameH2.textContent=`Name: ${name.value}`;
            name.value='';
            divHitContainer.appendChild(nameH2);

            let authorH2=document.createElement('h2');
            authorH2.textContent=`Author: ${author.value}`;
            author.value='';
            divHitContainer.appendChild(authorH2);

            let dateH2=document.createElement('h3');
            dateH2.textContent=`Date: ${date.value}`;
            date.value='';
            divHitContainer.appendChild(dateH2);

            let saveBtn=document.createElement('button');
            saveBtn.className='save-btn';
            saveBtn.textContent='Save song';
            saveBtn.addEventListener('click',(ev)=>{
                console.log(ev.target.textContent);
                let savedSongsDiv=document.querySelector('.saved-container');
                saveBtn.remove();
                likeBtn.remove();
                savedSongsDiv.appendChild(divHitContainer);
            });
            divHitContainer.appendChild(saveBtn);

            let likeBtn=document.createElement('button');
            likeBtn.className='like-btn';
            likeBtn.textContent='Like song';
            likeBtn.addEventListener('click',(ev)=>{
                console.log(ev.target.textContent)
                let totalLikesP=document.querySelector('.likes p');
                let totalLikes=totalLikesP.textContent.split(' ')[2];
                totalLikes=Number(totalLikes)+1;
                totalLikesP.textContent=`Total Likes: ${totalLikes}`;
                likeBtn.disabled=true
            });
            divHitContainer.appendChild(likeBtn);

            let deleteBtn=document.createElement('button');
            deleteBtn.className='delete-btn';
            deleteBtn.textContent='Delete';
            deleteBtn.addEventListener('click',(ev)=>{
                console.log(ev.target.textContent);
                divHitContainer.remove();
            });
            divHitContainer.appendChild(deleteBtn);




            divAllHitsContainer.appendChild(divHitContainer);
        }
    }
}