function solve(){
class Device{
    constructor(manufacturer){
        if (this.constructor=== Device){
            throw new Error('Abstact class cannot be initiated');
        }
        this.manufacturer=manufacturer;
      
    }
}
class Keyboard extends Device{
    constructor(manufacturer,responseTime){
        super(manufacturer);
        this.responseTime=responseTime;
    }
}

class Monitor extends Device{
    constructor(manufacturer,width,height){
        super(manufacturer)
        this.width=width;
        this.height=height;
    }
}

class Battery extends Device{
    constructor(manufacturer,expectedLife){
        super(manufacturer);
        this.expectedLife=expectedLife;
    }
}
class Computer extends Device{
    constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
        super(manufacturer);
        if (this.constructor===Computer){
            throw new Error('Abstact class cannot be initiated');
        }
        
        this.processorSpeed=processorSpeed;
        this.ram=ram;
        this.hardDiskSpace=hardDiskSpace;
    }
}

class Laptop extends Computer{
    #battery
    constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery){
        
        super(manufacturer,processorSpeed,ram,hardDiskSpace);
        this.weight=weight;
        this.color=color;

    if(battery.constructor!==Battery){
        throw new TypeError('Add battery');
    }
    this.#battery=battery
    }
    set battery(value){
        if(battery.constructor!==Battery){
            throw new TypeError('Add battery');
        }
        this.#battery=value
    }
    get battery(){
        return this.#battery
    }
}
class Desktop extends Computer{
    #keyboard;#monitor
    constructor(manufacturer,processorSpeed,ram,hardDiskSpace,keyboard,monitor){
        super(manufacturer,processorSpeed,ram,hardDiskSpace);
        if(!keyboard||keyboard.constructor!==Keyboard){
            throw new TypeError('Add battery');
        }

        if(!monitor||monitor.constructor!==Monitor){
            throw new TypeError('Add battery');
        }
    this.#keyboard=keyboard;
    this.#monitor=monitor;
    }
    set keyboard(value){
        if(!keyboard||keyboard.constructor!==Keyboard){
            throw new TypeError('Add battery');
        }
        this.#keyboard=value
    }
    get keyboard(){
        return this.#keyboard
    }

    set monitor(value){
        if(!monitor||monitor.constructor!==Monitor){
            throw new TypeError('Add battery');
        }
        this.#monitor=value
    }
    get monitor(){
        return this.#monitor
    }

}

return{
    Device:Device,
    Keyboard:Keyboard,
    Monitor:Monitor,
    Battery:Battery,
    Computer:Computer,
    Laptop:Laptop,
    Desktop:Desktop
}
}

let sol=solve()
let a=new sol.Keyboard('k',100)
//let b=new sol.Device('k',100)

let c= new sol.Desktop('ACER','4.1Ghz','4K',100,new sol.Keyboard(),new sol.Monitor)

