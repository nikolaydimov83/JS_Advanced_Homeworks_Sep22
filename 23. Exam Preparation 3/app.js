window.addEventListener("load", solve);

function solve() {
  let make=document.getElementById('make');
  let model=document.getElementById('model');
  let year=document.getElementById('year');
  let fuel=document.getElementById('fuel');

  let originalCost=document.getElementById('original-cost');
  let sellingPrice=document.getElementById('selling-price');

  let btnSubmit=document.getElementById('publish');
  let tbody=document.getElementById('table-body');

  let ulSold=document.getElementById('cars-list')
  btnSubmit.addEventListener('click',submitForm);
  function submitForm(ev){
    ev.preventDefault()
    if(make.value&&model.value&&year.value&&fuel.value
      &&originalCost.value&&sellingPrice.value
      &&!isNaN(originalCost.value)
      &&!isNaN(sellingPrice.value)&&sellingPrice.value>originalCost.value){

        let tr=document.createElement('tr');
        tr.className='row';
        
        let tdMake=document.createElement('td');
        tdMake.textContent=make.value;
        tr.appendChild(tdMake);

        let tdModel=document.createElement('td');
        tdModel.textContent=model.value;
        tr.appendChild(tdModel);

        let tdYear=document.createElement('td');
        tdYear.textContent=year.value;
        tr.appendChild(tdYear);

        let tdFuel=document.createElement('td');
        tdFuel.textContent=fuel.value;
        tr.appendChild(tdFuel);

        let tdOriginalCost=document.createElement('td');
        tdOriginalCost.textContent=originalCost.value;
        tr.appendChild(tdOriginalCost);

        let tdSellingPrice=document.createElement('td');
        tdSellingPrice.textContent=sellingPrice.value;
        tr.appendChild(tdSellingPrice);

        let tdBtns=document.createElement('td');

        let editBtn=document.createElement('button');
        editBtn.textContent='Edit';
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        editBtn.addEventListener('click',()=>{
          make.value=tdMake.textContent;
          model.value=tdModel.textContent
          year.value=tdYear.textContent;
          fuel.value=tdFuel.textContent;
          originalCost.value=tdOriginalCost.textContent;
          sellingPrice.value=tdSellingPrice.textContent;
          tr.remove();
          
        });

        let approveBtn=document.createElement('button');
        approveBtn.textContent='Sell';
        approveBtn.classList.add('action-btn');
        approveBtn.classList.add('sell');
        approveBtn.addEventListener('click',()=>{
            
          let liSoldCar=document.createElement('li');
          liSoldCar.className='each-list';
          let makeModelSpan=document.createElement('span');
          makeModelSpan.textContent=`${tdMake.textContent} ${tdModel.textContent}`;
          liSoldCar.appendChild(makeModelSpan)

          let yearSpan=document.createElement('span');
          yearSpan.textContent=`${tdYear.textContent}`;
          liSoldCar.appendChild(yearSpan)

          let priceSpan=document.createElement('span');
          priceSpan.textContent=`${Number(tdSellingPrice.textContent)-Number(tdOriginalCost.textContent)}`;
          liSoldCar.appendChild(priceSpan)
          ulSold.appendChild(liSoldCar);
          let totalProfit=document.getElementById('profit');
          totalProfit.textContent=(Number(totalProfit.textContent)+(Number(tdSellingPrice.textContent)-Number(tdOriginalCost.textContent))).toFixed(2)
          tr.remove();
        });

        tdBtns.appendChild(editBtn);
        tdBtns.appendChild(approveBtn);
        
        tr.appendChild(tdBtns)

      tbody.appendChild(tr)
      make.value='';
      model.value='';
      year.value=null
      fuel.value='';
      originalCost.value='';
      sellingPrice.value='';

    }
  }


}
