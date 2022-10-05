function solve(x){
   let c='Number'
   solve.sum=function(){
    if (!this.add){
        this.add=0;
    }
    this.initial=this.add;
    this.add+=Number(x); 
    return this.add
   }
   let b=solve.sum()
   solve.toString=function(){
    return this.add
   }
    return solve

}
  function add(number){
    let sum=0;
    function inner(num){
        sum+=num
        return inner
    }
inner.toString=()=>{
    return sum
}
    return inner(number)
  }

console.log(Number((solve(3)(5)(5)(10)(10))))


