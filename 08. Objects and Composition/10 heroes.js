function hero(){
    const mage=(mageName)=>{
        let state={
        mageName,
        health:100,
        mana:100
        }
    const canCast=(state)=>({
        cast:(spell)=>{
            console.log(`${state.name} cast ${spell}`);
            state.mana--
        }       
    })
    const canCast1=function(state){return         cast:(spell)=>{
        console.log(`${state.name} cast ${spell}`);
        state.mana--
    } }
    return Object.assign(state,canCast)
    }

}