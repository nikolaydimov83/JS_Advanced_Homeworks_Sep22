function validate() {
    let validations={
        userName:false,
        email:false,
        password:false,
        repass:false
        
    }
    let companyCheckBox=document.getElementById('company');
    companyCheckBox.addEventListener('change',(ev)=>{
        let companyInfo=document.getElementById('companyInfo');
        if(companyInfo.style.display==='none'){
            companyInfo.style.display='block';
            validations.company=false
        }else{
            companyInfo.style.display='none';
            delete validations.company;
        }
    });
    let submitButton=document.getElementById('submit');
    submitButton.addEventListener('click',(ev)=>{
        ev.preventDefault();
        let userName=document.getElementById('username');
        let userNameRegex=/^[a-zA-Z0-9]+$/
        if (userName.value.length<3||
            userName.value.length>20||
            !userName.value.match(userNameRegex)){
            
                userName.style['borderColor']='red';
                validations['userName']=false;
        
        }else{
            //userName.style.border='none';
            validations['userName']=true;
        }

        let password=document.getElementById('password');
        let passwordRegex=/^[\w]+$/;
        let repeatPass=document.getElementById('confirm-password');
        if (password.value.length<5||
            password.value.length>20||
            !password.value.match(passwordRegex)||
            (password.value!==repeatPass.value)){
                password.style['borderColor']='red';
                validations['password']=false;
                repeatPass.style['borderColor']='red';
                validations['repass']=false
        }else{
            //password.style.border='none';
            validations['password']=true;
            //repeatPass.style.border='none';
            validations['repass']=true
        }
         
         
        let email=document.getElementById('email');
        let emailRegex=/^[\s\S]*[@]{1}[\s\S]*[.]+[\s\S]*$/;
        if (!email.value.match(emailRegex)){
            email.style['borderColor']='red';
            validations['email']=false;
        }else{
            //email.style.border='none';
            validations['email']=true;
        }
        if (validations.hasOwnProperty('company')){
           let companyNumber=document.getElementById('companyNumber')
            if (!Number.isInteger(Number(companyNumber.value))||
            Number(companyNumber.value)<1000||
            (Number(companyNumber.value>9999))){
                companyNumber.style['borderColor']='red'
                validations['company']=false
            }else{
                //companyNumber.style.border='none';
                validations['company']=true;
            }
        }
        let allValidationsTrue=true
        Object.entries(validations).forEach((validationPair)=>{
            if(validationPair[1]===false){
                allValidationsTrue=false
            }
        });
        let finalResult=document.getElementById('valid');
        if(allValidationsTrue){
            finalResult.style.display='block';
        }else{
            finalResult.style.display='none';
        }
    });
}