window.addEventListener('load', solution);

function solution() {
  let fname=document.getElementById('fname');
  let email=document.getElementById('email');
  let phone=document.getElementById('phone');
  let address=document.getElementById('address');
  let code=document.getElementById('code');

  let submitBTN=document.getElementById('submitBTN');

  let infoPreviewUL=document.getElementById('infoPreview');

  let editBTN=document.getElementById('editBTN');
  let continueBTN=document.getElementById('continueBTN');

  submitBTN.addEventListener('click',submitForm);

  function submitForm(ev){
    ev.preventDefault();
    if(fname.value&&email.value){
    let fnameLi=document.createElement('li');
    fnameLi.textContent=`Full Name: ${fname.value}`;
    fname.value=''
    infoPreviewUL.appendChild(fnameLi);

    let emailLi=document.createElement('li');
    emailLi.textContent=`Email: ${email.value}`;
    email.value=''
    infoPreviewUL.appendChild(emailLi);

    let phoneLi=document.createElement('li');
    phoneLi.textContent=`Phone Number: ${phone.value}`;
    phone.value=''
    infoPreviewUL.appendChild(phoneLi);

    let addressLi=document.createElement('li');
    addressLi.textContent=`Address: ${address.value}`;
    address.value=''
    infoPreviewUL.appendChild(addressLi);

    let codeLi=document.createElement('li');
    codeLi.textContent=`Postal Code: ${code.value}`;
    code.value=''
    infoPreviewUL.appendChild(codeLi);
    submitBTN.disabled=true;
    editBTN.disabled=false;
    continueBTN.disabled=false;

    editBTN.addEventListener('click',()=>{
      
      let a =fnameLi.textContent.substring('Full Name: '.length);
      fname.value=a;

      a =emailLi.textContent.substring('Email: '.length);
      email.value=a;

      a =phoneLi.textContent.substring('Phone Number: '.length);
      phone.value=a;

      a =addressLi.textContent.substring('Address: '.length);
      address.value=a;

      a =codeLi.textContent.substring('Postal Code: '.length);
      code.value=a;

      fnameLi.remove();
      emailLi.remove();
      phoneLi.remove();
      addressLi.remove();
      codeLi.remove();

      submitBTN.disabled=false;
      editBTN.disabled=true;
      continueBTN.disabled=true

    });
    continueBTN.addEventListener('click',()=>{
      let block=document.getElementById('block')

      block.innerHTML='';
      let h3=document.createElement('h3');
      h3.textContent=`Thank you for your reservation!`
      block.appendChild(h3);
    })
  }

  }

}
