function createHero(){
    let canCast=function(state){
    return{cast:function (spell){
        console.log(`${state.name} cast ${spell}`);
        state.mana--;
    }}
   }
   let canFight=function(state){
    return{
        fight:function(){
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }}
   }
    let mage=function(name){
        let state={name,health:100,mana:100}
        return Object.assign(state,canCast(state));
    }
    let fighter=function(name){
        let state={name,health:100,stamina:100}
        let a=Object.assign(state,canFight(state))
        return Object.assign(state,canFight(state));
    }
    

   
    return {mage,fighter}
} 
let create = createHero();

