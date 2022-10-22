class footballTeam{
    #uniquePlayers=new Set();
    constructor(clubName,country){
        this.clubName=clubName;
        this.country=country;
        this.invitedPlayers=[];
    }

    newAdditions(footballPlayers){
        let uniqueInvtedPlayers=[]
        footballPlayers.forEach((player)=>{
            let [name,age,playerValue]=player.split('/');
            playerValue=Number(playerValue)
            age=Number(age)
            let newAddPlayerIndex=this.invitedPlayers.findIndex((player1)=>player1.name===name)
            if(newAddPlayerIndex>=0){
                if(Number(this.invitedPlayers[newAddPlayerIndex].playerValue)<playerValue){
                    this.invitedPlayers[newAddPlayerIndex].playerValue=Number(playerValue);
                    if(uniqueInvtedPlayers.indexOf(name)===-1){
                        uniqueInvtedPlayers.push(name);
                    }
                    
                }else{
                    if(uniqueInvtedPlayers.indexOf(name)===-1){
                        uniqueInvtedPlayers.push(name);
                    }
                }
            }else{
                this.invitedPlayers.push({name, age, playerValue:Number(playerValue)})
                if(uniqueInvtedPlayers.indexOf(name)===-1){
                    uniqueInvtedPlayers.push(name);
                }
            }
            
        })
        let str="You successfully invite ";
        str=str+ uniqueInvtedPlayers.join(', ')
        str+=`.`;
        return str
    }
    signContract(selectedPlayer){
        let [name,playerOffer]=selectedPlayer.split('/');
        let playerIndx=this.invitedPlayers.findIndex((player)=>player.name===name);
        
        
        if(playerIndx===-1){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let listValue=Number(this.invitedPlayers[playerIndx].playerValue);
        
        let priceDifference=listValue-Number(playerOffer);
        

                if(priceDifference>0){
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
                }
                this.invitedPlayers[playerIndx].playerValue='Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
        
    
    }
    ageLimit(name, age){
        let playerIndex=this.invitedPlayers.findIndex((player)=>player.name===name);
        if(playerIndex===-1){
            throw new Error(`${name} is not invited to the selection list!`)
        }

        let ageDifferense=Number(this.invitedPlayers[playerIndex].age)-Number(age);

        if (ageDifferense>=0){
            return `${name} is above age limit!`;
        }
        let reversedAgeDiff=-ageDifferense;
        if (reversedAgeDiff<5){
            return `${name} will sign a contract for ${reversedAgeDiff} years with ${this.clubName} in ${this.country}!`;
        }
        if (reversedAgeDiff>=5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    }
    transferWindowResult(){
        let str="Players list:"

        let sortedArr=[...this.invitedPlayers];
        sortedArr.sort((a,b)=>{
            if (a.name.toLocaleString()>b.name){
                return 1
            }else{
                return -1
            }
        
        
        });
        sortedArr.forEach((player)=>{
            str+=`\nPlayer ${player.name}-${player.playerValue}`;
        })
        return str
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/25", "Pau Torres/25/52","Kylian Mbappé/23/60"]));
console.log(fTeam.newAdditions(["Lionel Messi/35/20", "Pau Torres/25/52"]));

/*console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/30"));
console.log(fTeam.signContract("Lionel Messi/60"));*/

console.log(fTeam.ageLimit('Lionel Messi',36));



console.log(fTeam.newAdditions(['Zetko/23/16',"Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


