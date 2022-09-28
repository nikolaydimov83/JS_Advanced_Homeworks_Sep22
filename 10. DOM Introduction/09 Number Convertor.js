function solve(){
    document.querySelector('button').addEventListener('click',convert);
    let optionBinary=document.createElement('option');
    optionBinary.value='binary';
    optionBinary.innerText='Binary';

    let optionHexa=document.createElement('option');
    optionHexa.value='hexadecimal';
    optionHexa.innerText='Hexadecimal';

    document.getElementById('selectMenuTo').appendChild(optionBinary);
    document.getElementById('selectMenuTo').appendChild(optionHexa);
    let converter={
        'binary':(decimal)=>{
            
            let a=Number(decimal.value).toString(2)
            return a
        },
        'hexadecimal':(decimal)=>{
            
            let a=Number(decimal.value).toString(16)
            return a
        }
    }
    function convert(){
        
        let a=converter[(document.getElementById('selectMenuTo').value)](document.getElementById('input'));
       document.getElementById('result').value=a.toUpperCase();
    }
}

solve();