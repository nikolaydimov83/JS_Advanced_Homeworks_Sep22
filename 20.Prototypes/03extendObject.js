
function result(){
    let result1={};
    let prototype=Object.getPrototypeOf(result1)
    prototype.extend=(template)=>{
            for (const key in template) {
                if (Object.hasOwnProperty.call(template, key)) {
                    const element = template[key];
                    if(typeof element==="function"){
                        prototype[key]=element;
                    }else{
                       result1[key]=element
                        
                    }
                    
                }
            }
    
        }
    return result1
}

let myObj=result()
let template={
    name:'Sharo',
    age:10,
    baw:()=>console.log('Baw!')
}

myObj.extend(template)
myObj.baw()

let template1={
    name:'Sharo',
    age:10,
    myau:()=>console.log('Baw!')
}

myObj.extend(template1)
myObj.myau
