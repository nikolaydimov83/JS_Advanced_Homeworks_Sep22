class SmartHike{
    constructor(username){
        this.username=username;
        this.goals=new Map();
        this.listOfHikes=[];
        this.resources=100;
    }
    addGoal (peak, altitude){
        if(this.goals.has(peak)){
            return `${peak} has already been added to your goals`;
        }

        this.goals.set(peak,altitude);
        return `You have successfully added a new goal - ${peak}`
    }
    hike (peak, time, difficultyLevel){
        if (!this.goals.has(peak)){
            throw new Error (`${peak} is not in your current goals`);
        }
        if(this.resources===0){
            throw new Error("You don't have enough resources to start the hike");
        }
        let difference=this.resources-(10*time);
        if (difference<0){
            return "You don't have enough resources to complete the hike"
        }
        this.listOfHikes.push({ peak:peak, time:time, difficultyLevel:difficultyLevel});
        this.resources=difference;
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest (time){
        this.resources=Math.min(100,(this.resources+Number(time*10)))
        if(this.resources===100){
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }
    showRecord (criteria){
        let arrayOfMatchedCriteria=[];
        let str=''
        if(this.listOfHikes.length===0){
            return `${this.username} has not done any hiking yet`
        }
        if (criteria==='all'){
            str+="All hiking records:";
            this.listOfHikes.forEach((hikeDone)=>{
                str+=`\n${this.username} hiked ${hikeDone.peak} for ${hikeDone.time} hours`;
            })
            return str
            //arrayOfMatchedCriteria=[...this.listOfHikes]
        }else{
            this.listOfHikes.forEach((hikeDone)=>{
            if (hikeDone.difficultyLevel===criteria){
                arrayOfMatchedCriteria.push(hikeDone);
            }
        });
        if(arrayOfMatchedCriteria.length===0){
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        arrayOfMatchedCriteria.sort((a,b)=>Number(a.time)-Number(b.time))
        return `${this.username}'s best ${criteria} hike is ${arrayOfMatchedCriteria[0].peak} peak, for ${arrayOfMatchedCriteria[0].time} hours`
        }

      
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 6, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.rest(4);
user.hike('Vihren', 2, 'hard');
user.addGoal('Rui', 1706);
user.hike('Rui', 2, 'hard');

user.addGoal('Hui', 1706);
user.hike('Hui', 1, 'hard');
user.hike('Vihren',1,'hard')


console.log(user.showRecord('hard'));

//console.log(user.showRecord('all'));

