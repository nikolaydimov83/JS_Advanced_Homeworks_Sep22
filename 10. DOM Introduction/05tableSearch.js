function tableSearch(){
    let input = document.getElementById('searchField');
    let button = document.getElementById('searchBtn');
    button.addEventListener('click',search)
    let rows = document.querySelectorAll('tbody tr');
    //let result =document.getElementById('result')
    function search(){
            Array.from(rows).forEach((row)=>{
        let rowCells=row.childNodes;
        row.className='';
        Array.from(rowCells).forEach((rowCell)=>{
            
            if(rowCell.nodeName!=='#text'){
              if(rowCell.innerText.includes(input.value)){
                row.className='select';
              }  
        }
        })
        
    })
    input.value='';
    }

}
tableSearch();