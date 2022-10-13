function solve(){
    class Employee{
        #currentTask
        constructor(name,age,tasks){
            this.name=name;
            this.age=age;
            this.salary=0
            this.tasks=tasks
            this.#currentTask=0;
        }
        work(){
            console.log(this.tasks[this.#currentTask]);
            if(this.#currentTask<this.tasks.length-1){
                this.#currentTask++;
            }else{
                this.#currentTask=0;
            }
            
        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }
    class Junior extends Employee{
        constructor(name,age,tasks){
            super(name,age,tasks)
            this.tasks=[`${this.name} is working on a simple task.`]
        }
    }
    class Senior extends Employee{
        constructor(name,age,tasks){
            super(name,age)
            this.tasks=[`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`]
            
        }
    }

    class Manager extends Employee{
        constructor(name,age){
            super(name,age)
            this.dividend=0;
            this.tasks=[`${name} scheduled a meeting.`,
            `${name} is preparing a quarterly report.`]
        }
        collectSalary(){
            
            console.log(`${this.name} received ${this.salary+this.dividend} this month.`)
        }
    }
    return{Employee:Employee,
            Junior:Junior,
            Senior:Senior,
            Manager:Manager
    }
}

let classes =solve();
let junior=new classes.Junior('Ivan',20)
let senior=new classes.Senior('Dragan',30)

let manager=new classes.Manager('Petkan',30)

manager.dividend='hggyt';
manager.salary=1000;
manager.collectSalary()

manager.work()
manager.work()
manager.work()

/*junior.work()
junior.work()
junior.work()
junior.work()

console.log()

senior.work()
senior.work()
senior.work()
senior.work()*/