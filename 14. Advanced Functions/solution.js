function solve() {
    let addNewButton=document.getElementById('add-new').querySelector('button');
    addNewButton.addEventListener('click',createMovie);
    allButtons=document.querySelectorAll('button');
    let clearAllButton=allButtons[allButtons.length-1]
    clearAllButton.addEventListener('click',(ev)=>{
        Array.from(document.getElementById('archive').querySelectorAll('ul li')).forEach((li)=>li.remove());
    })
    function createMovie(ev){
        ev.preventDefault();
        let movieName=document.querySelectorAll('input')[0];
        let movieHall=document.querySelectorAll('input')[1];
        let ticketPrice=document.querySelectorAll('input')[2];

            if (!movieName.value||
                !movieHall.value||
                (!Number(ticketPrice.value))){
                    return
                /*if (Number(ticketPrice.value)!==0){
                    return
                }*/
                
            }
           
createMovieLi();
 movieName.value='';
 movieHall.value='';
 ticketPrice.value='';
function createMovieLi(){
    let li=document.createElement('li');

    let titleSpan=document.createElement('span');
    titleSpan.textContent=movieName.value
    li.appendChild(titleSpan)

    let hallStrong=document.createElement('strong');
    hallStrong.textContent=`Hall: ${movieHall.value}`;
    li.appendChild(hallStrong);

    let divWrapper=document.createElement('div');
    let priceStrong=document.createElement('strong');
    priceStrong.textContent=ticketPrice.value;
    divWrapper.appendChild(priceStrong);

    let inputTicketsSold=document.createElement('input');
    //inputTicketsSold.type='number';
    inputTicketsSold.placeholder='Tickets Sold';
    divWrapper.appendChild(inputTicketsSold);

    let button=document.createElement('button');
    button.addEventListener('click',performActionMovie);
    button.textContent='Archive'
    divWrapper.appendChild(button);

    li.appendChild(divWrapper);
    document.getElementById('movies').querySelector('ul').appendChild(li);
}

    }



function performActionMovie(ev){

    let actionToPerform=ev.target.textContent.toLowerCase()
    let actions={
        'archive':archive,
        'delete':deleteMovie
    }
    actions[actionToPerform](ev);
}
function archive(ev){
if(ev.target.parentElement.querySelector('input')){
if(!Number(ev.target.parentElement.querySelector('input').value)){
    if(ev.target.parentElement.querySelector('input').value===''){
        return
    }
    if(Number(ev.target.parentElement.querySelector('input').value)!==0){
        return
    }
    
}
let li=ev.target.parentElement.parentElement;

let totalPrice=Number(li.querySelector('input').value)*Number(li.querySelectorAll('strong')[1].textContent)
li.querySelector('strong').textContent=`Total amount: ${totalPrice.toFixed(2)}`;

let button=li.querySelector('button');
button.textContent='Delete';
li.appendChild(button);
li.querySelector('div').remove();
document.getElementById('archive').querySelector('ul').appendChild(li);

}

}

function deleteMovie(ev){
    if(ev.target.parentElement.parentElement.parentElement.id==='archive'){
        ev.target.parentElement.remove();
    }
    
    }
}