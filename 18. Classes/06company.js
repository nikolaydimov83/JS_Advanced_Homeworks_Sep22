class Company{
    
    constructor(){
        this.departments=new Map();

    }


    addEmployee(name, salary,position,department){
        [name, salary,position,department].forEach((parameter,key)=>{
            if (typeof parameter !== 'undefined' && !parameter) {
                throw new Error('Invalid input!');
            };
                
            
            if (key===2){
                if(salary<0||isNaN(salary)){
                    throw new Error('Invalid input!');
                }
            }
        });
        if (this.departments[department]===undefined){
            this.departments[department]={};
            this.departments[department]['employees']=[]
        }
        if (!this.departments.get(department)){
            this.departments.set(department,{});
        }
        
        let departmentFromMap=this.departments.get(department);
        if (!departmentFromMap.employees){
            departmentFromMap.employees=[];
            departmentFromMap.employees.push({department:department,name:name,salary:salary,position:position})
        }else{
            departmentFromMap.employees.push({department:department,name:name,salary:salary,position:position})
        }
        
        
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment(){
        //this.averageSalaries=new Map();
    let bestDepartment;
       this.departments.forEach((value,key)=>{
            value.average=this.calculateAvgSalary(value);
            if (!bestDepartment||bestDepartment.average<value.average){
                
                bestDepartment=value;

            }else if(bestDepartment.average===value.average&&bestDepartment.employees[0].department>value.employees[0].department){
                bestDepartment=value;
            }
          });
          
            bestDepartment.employees.sort((e1,e2)=>{
                if (e2.salary===e1.salary){
                    
                    if (e1.name<e2.name){
                        return -1
                    }else{
                        return 1
                    }
                }
                return e2.salary-e1.salary
            })
    let string=`Best Department is: ${bestDepartment.employees[0].department}
Average salary: ${bestDepartment.average}`;
    bestDepartment.employees.forEach((employee)=>{
        string+=`
${employee.name} ${employee.salary} ${employee.position}`
    })
            
     console.log(string)
     return string  

    }
    calculateAvgSalary(department){
        let sum=0;
        department.employees.forEach((employee)=>{
            sum+=Number(employee.salary);
        })
        return (sum/department.employees.length).toFixed(2);
    }
    cons(){
        Object.entries(this.departments).forEach((entry)=>{
            console.log(entry[0]+':'+entry[1])
        })
       
    }
    
}

let c = new Company();

c.addEmployee('', 2000, "engineer", "Zeta");
c.addEmployee("Pesho", 1500, "electrical engineer", "Zeta");
c.addEmployee("Slavi", 500, "dyer", "Zeta");
c.addEmployee("Zetko", 2000, "architect", "Zeta");

c.addEmployee('Stanimir', 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Zetko", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment()
console.log();
//c.cons()
