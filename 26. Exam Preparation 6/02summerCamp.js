class SummerCamp{
    constructor(organizer,location){
        this.organizer=organizer;
        this.location=location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants=new Map();
    }
    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp[condition]){
            throw new Error("Unsuccessful registration at the camp.");
        }
        if(this.listOfParticipants.get(name)){
            return `The ${name} is already registered at the camp.`;
        }
        if(money<this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.set(name,{name, condition, power: 100, wins: 0} );
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant (name){
        
        if(!this.listOfParticipants.get(name)){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.delete(name);
        this.listOfParticipants.length=this.listOfParticipants.size;
        return `The ${name} removed successfully.`
    }
    timeToPlay (typeOfGame, participant1, participant2){
        let state=this;
        let game={
            WaterBalloonFights:function(state){


                if(state.listOfParticipants.get(participant1).power>state.listOfParticipants.get(participant2).power){
                    state.listOfParticipants.get(participant1).wins+=1
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                }else if(state.listOfParticipants.get(participant1).power<state.listOfParticipants.get(participant2).power){
                    state.listOfParticipants.get(participant2).wins+=1
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                }else{
                    return `There is no winner.`;
                }
            },
            Battleship:function(state){
                state.listOfParticipants.get(participant1).power+=20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`
            }
        }
        if (typeOfGame==='Battleship'){
        if(!this.listOfParticipants.get(participant1)){
            throw new Error(`Invalid entered name/s.`);
        }}else{
          
            if(!this.listOfParticipants.get(participant2)||!this.listOfParticipants.get(participant1)){
                throw new Error(`Invalid entered name/s.`);
            }
            if(this.listOfParticipants.get(participant1).condition!==this.listOfParticipants.get(participant2).condition){
                throw new Error(`Choose players with equal condition.`);
            }
        
        }

        return game[typeOfGame](state)
    }
    toString(){
        let str=`${this.organizer} will take ${this.listOfParticipants.size} participants on camping to ${this.location}`;
        let arrToSort=[...this.listOfParticipants.entries()];
        arrToSort.sort((a,b)=>{
            if (a[1].wins>b[1].wins){
                return -1
            }else{
                return 1
            }
        });
        let sortedMap=new Map(arrToSort);
        sortedMap.forEach((participant)=>{
            str+=`\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        })
        return str
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 50));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.unregisterParticipant("Petar Petarson"));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov","Petar Petarson"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());


