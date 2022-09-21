function pascalCamel(){
    let input=document.getElementById('text').value;
    let type=document.getElementById('naming-convention').value;
    let output=document.getElementsByTagName('span')[0];
    
    let inputAsArr=input.split(' ').forEach((element, index) => {
        element=element.toLowerCase();
        if (type==='Pascal Case'){
            element=element[0].toUpperCase()+element.substring(1);
            output.innerText+=element;
        }else if (type==='Camel Case'){
            if (index>0){
                element=element[0].toUpperCase()+element.substring(1);
                output.innerText+=element;
            }else{
                output.innerText+=element;
            }
        }else{
            output.innerText='Error!';
            return
        }
    });
}