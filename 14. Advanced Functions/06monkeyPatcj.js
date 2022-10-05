function solution(argumet){

    let objectOfFunctions= {
        'upvote':()=>{
            this.upvotes++
        },
        'downvote':()=>{
            this.downvotes++
        },
        'score':()=>{
            let calculatedAddedVotes=Math.ceil(Math.max(this.upvotes,this.downvotes)*0.25)
            let totalVotes=this.upvotes+this.downvotes;
            let fakeUpVotes=(totalVotes>50)?this.upvotes+calculatedAddedVotes:this.upvotes;
            let fakeDownVotes=(totalVotes>50)?this.downvotes+calculatedAddedVotes:this.downvotes;  
            let result=this.upvotes-this.downvotes;
            let rating='new'
                if(totalVotes<10){
                    rating = 'new'
                }
                else if(this.upvotes/(totalVotes)>0.66){
                    rating = 'hot'
                }else if((result)>=0&&(totalVotes>100)){
                    rating= 'controversial'
                }else if((result)<0){
                    rating= 'unpopular'
                }
              
            let resultArray=[];
            resultArray.push(fakeUpVotes,fakeDownVotes,result,rating)
            return resultArray
        }
    }
    let result=objectOfFunctions[argumet]();

    return result
   
}

/*
Every post also has a rating, depending on its score. 
If positive votes are the overwhelming majority (>66%), the rating is hot. 
If there is no majority, but the balance is non-negative 
and the sum of both votes is more than 100, its rating is controversial. 
If the balance is negative, the rating becomes unpopular. 
If the post has less than 10 total votes, or no other rating is met, 
its rating is new regardless of balance. 
These calculations are performed on the actual numbers.
*/

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i=1;i<=50;i++){
    solution.call(post, 'downvote');         // (executed 50 times)
}

score = solution.call(post, 'score');  
console.log(score)   
