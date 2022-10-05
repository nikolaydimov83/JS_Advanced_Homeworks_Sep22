function solve(){
    let commands={
        init:(selector1, selector2, resultSelector)=>{
            this.firstNum=document.querySelector(selector1);
            this.secondNum=document.querySelector(selector2);
            this.result=document.querySelector(resultSelector);
        },
        add:()=>{
            this.result.value=Number(this.firstNum.value)+Number(this.secondNum.value)
        },
        subtract:()=>{
            this.result.value=Number(this.firstNum.value)-Number(this.secondNum.value)
        }
    }
    return commands
}