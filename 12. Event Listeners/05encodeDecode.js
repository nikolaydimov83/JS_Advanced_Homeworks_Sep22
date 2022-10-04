function encodeAndDecodeMessages(){

    let encodeTextArea=document.querySelectorAll('textarea')[0];
    let encodeButton=document.querySelectorAll('button')[0];
    let decodeTextArea=document.querySelectorAll('textarea')[1];
    let decodeButton=document.querySelectorAll('button')[1];
    encodeButton.addEventListener('click',encode);
    function encode(){
        let rawString=encodeTextArea.value;
        let encodedString='';
        for (let i = 0;i<rawString.length;i++){
           let currentCharCode=Number(rawString.charCodeAt(i));
           currentCharCode++;
           encodedString+=String.fromCharCode(currentCharCode);
        } 
        encodeTextArea.value='';
        decodeTextArea.value=encodedString;
        
    };

    decodeButton.addEventListener('click',decode);
    function decode(){
        let rawString=decodeTextArea.value;
        let decodedString='';

        for (let i = 0;i<rawString.length;i++){
            let currentCharCode=Number(rawString.charCodeAt(i));
            currentCharCode--;
            decodedString+=String.fromCharCode(currentCharCode);
         } 
        
         decodeTextArea.value=decodedString;
    }
//The password for my bank account is 123password321

}