function restaurant(){
    
    let btn=document.getElementById('btnSend');
    btn.addEventListener('click',parseData)
    function parseData(){
        let input = document.getElementsByTagName('textarea')[0].value;
      
        let inputToArray=JSON.parse(input);
        let allRestaurants=[];
        inputToArray.forEach(element => {
 
            let restaurantInfo={};
            let objectOfEmployees={};
            let splittedRestaurantInformation=element.split(' - ');
            restaurantInfo['name']=splittedRestaurantInformation[0];
            splittedRestaurantInformation[1]
            .split(', ')
            .forEach((employee)=>{
                let employeeArr=employee.split(' ');
                
                objectOfEmployees[employeeArr[0]]=Number(employeeArr[1]);
                
               
            })
            restaurantInfo['employees']=objectOfEmployees;
            //restaurantInfo['avgSalary']=Number((salarySum/numberOfEmployees));
            let restaurantExists=false;
            allRestaurants.forEach((restaurant)=>{
                if (restaurant.name===restaurantInfo.name){
                    Object.assign(restaurant['employees'],restaurantInfo['employees']);
                    restaurantExists=true
                }
            })
            if (!restaurantExists){
                allRestaurants.push(restaurantInfo);
            }
            
        });
        allRestaurants.forEach((restuarant)=>{
            let employeSalariesArr=Object.values(restuarant['employees']);
            let sumAllSalaries=employeSalariesArr.reduce((prevVal,currValue)=>{
                prevVal+=Number(currValue);
                return prevVal;
            },0)
            restuarant['avgSalary']=Number((sumAllSalaries/employeSalariesArr.length));
        })
        /*allRestaurants.forEach((restaurant)=>{
            restaurant.employees
        })*/
        let bestRestaurant=allRestaurants.reduce((prevVal,currValue)=>{
            if(prevVal.avgSalary<currValue.avgSalary){
                return currValue
            }else{
                return prevVal
            }
        })
        
    
        let maxSalary=Object.values(bestRestaurant['employees']).sort((a,b)=>Number(b)-Number(a))[0];
        bestRestaurant.maxSalary=Number(maxSalary).toFixed(2);
        let outputRestaurand=document.getElementById('bestRestaurant').querySelector('p');
        outputRestaurand.innerText=`Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.maxSalary}`
    
        let outputWorkers=document.getElementById('workers').querySelector('p');
        let workersString='';
        Object.entries(bestRestaurant.employees).sort((a,b)=>Number(b[1])-Number(a[1])).forEach((employee)=>workersString+=`Name: ${employee[0]} With Salary: ${employee[1]} `);
    outputWorkers.innerText=workersString.trim();
    }
    
}
restaurant();