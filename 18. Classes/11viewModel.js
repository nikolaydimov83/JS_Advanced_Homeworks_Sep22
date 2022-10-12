class Textbox{
    #value
    constructor(selector,regex){
        
        this._elements=document.querySelectorAll(selector);
        this._invalidSymbols=regex;
        Array.from(this.elements).forEach((element)=>{
            element.addEventListener('change',()=>{
                if(this.isInputValid(element.value)){
                    this.value=element.value;
                }
            })
        })
    }
    get elements(){
        return this._elements;
    }
    get value(){
        return this.#value
    }

    set value(newValue){
        if(this.isInputValid(newValue)){
            this.#value=newValue;
            Array.from(this.elements).forEach((element)=>{
                element.value=this.#value
            });
        }

    }
    isInputValid(newValue){
        if(!newValue.match(this._invalidSymbols)){
            return true

        }
        return true
    }
    isValid(){
        let allValid=true
        Array.from(this.elements).forEach((element)=>{
            if (element.value.match(this._invalidSymbols)){
                allValid=false
            }
        });
        return allValid
    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
//let inputs = document.getElementsByClassName('.textbox');

//inputs.addEventListener('click',function(){console.log(textbox.value);});