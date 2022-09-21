function search() {


let ulTowns=document.getElementById('towns');
let townsAsArr=Array.from(ulTowns.childNodes);
let searchText=document.getElementById('searchText').value;
let result=document.getElementById('result');
let matchesFound=0;
for (const town of townsAsArr) {
    if(town.nodeName!=='#text'){
    town.style.textDecoration = "none";
    town.style.fontWeight = "none";
    if (town.innerText.includes(searchText)){
        town.style.textDecoration = "underline";
        town.style.fontWeight = 'bold';
        matchesFound++;
    }
    }

}
result.innerText=`${matchesFound} matches found`

    
    
}