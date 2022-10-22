class Story{
    #comments;#likes
    constructor(title,creator){
        this.title=title;
        this.creator=creator;
        this.#comments=[];
        this.#likes=[];
    }

    get likes(){
        if (this.#likes.length===0){
            return `${this.title} has 0 likes`
        }
        if(this.#likes.length===1){
            return `${this.#likes[0]} likes this story!`
        }else{
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
        }

    }
    like (username){
        if(this.creator===username){
            throw new Error("You can't like your own story!");
        }
        if(this.#likes.indexOf(username)!==-1){
            throw new Error(`You can't like the same story twice!`);
        }else{
            this.#likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }
    dislike(username){
        if(this.#likes.indexOf(username)===-1){
            throw new Error("You can't dislike this story!");
        }else{
            let indexOfLike=this.#likes.indexOf(username);
            this.#likes.splice(indexOfLike,1);
            return `${username} disliked ${this.title}`
        }

    }

    comment (username, content, id){
        if (id===undefined){
            id=this.#comments.length+1;
            let replies=[]
            this.#comments.push({id, username, content, replies})
            //{Id, Username, Content, Replies}

            return `${username} commented on ${this.title}`
        }else{
            let comment=this.#comments.find((a)=>a.id===id);
            if(comment){
                let replyId=comment.id+`.`+(comment.replies.length+1);
                let reply={id:replyId, username, content}
                comment.replies.push(reply);
                return "You replied successfully";
            }else{
                id=this.#comments.length+1;
                let replies=[]
                this.#comments.push({id, username, content, replies})
                //{Id, Username, Content, Replies}
    
                return `${username} commented on ${this.title}`
            }

        }
    }
    toString(sortingType){
        let str=`Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\nComments:`;
        let sortedCommnents=[...this.#comments];
        switch(sortingType){
            case 'asc':
                //sortedCommnents.sort((a,b)=>Number(a.id)-Number(b.id));
                sortedCommnents.forEach((comm)=>{
                    str+=`\n-- ${comm.id}. ${comm.username}: ${comm.content}`;
                    
                    let sortedReplies=[...comm.replies];
                    //sortedReplies.sort((a,b)=>Number(a.id)-Number(b.id));
                    sortedReplies.forEach((reply)=>{
                        str+=`\n--- ${reply.id}. ${reply.username}: ${reply.content}`
                    })
                   
                })
                break
            case 'desc':
                sortedCommnents.reverse();
                sortedCommnents.forEach((comm)=>{
                    str+=`\n-- ${comm.id}. ${comm.username}: ${comm.content}`;
                    
                    let sortedReplies=[...comm.replies];
                    sortedReplies.reverse();
                    //sortedReplies.sort((a,b)=>Number(a.id)-Number(b.id));
                    sortedReplies.forEach((reply)=>{
                        str+=`\n--- ${reply.id}. ${reply.username}: ${reply.content}`
                    })
                   
                })
                break
            case 'username':
                sortedCommnents.sort((a,b)=>{
                    if(a.username<b.username){
                        return -1
                    }else{
                        return 1
                    }
                });
                sortedCommnents.forEach((comm)=>{
                    str+=`\n-- ${comm.id}. ${comm.username}: ${comm.content}`;
                    
                    let sortedReplies=[...comm.replies];
                    sortedReplies.sort((a,b)=>{
                        if(a.username<b.username){
                            return -1
                        }else{
                            return 1
                        }
                    });
                    //sortedReplies.sort((a,b)=>Number(a.id)-Number(b.id));
                    sortedReplies.forEach((reply)=>{
                        str+=`\n--- ${reply.id}. ${reply.username}: ${reply.content}`
                    })
                   
                })

                break
        }
        return str
    }
}

let a={name:'name'}
let b={name:'name1'}

let c=a+b

let art = new Story("My Story", "Anny");
(art.like("John"), "John liked My Story!");
(art.likes, "John likes this story!");

(art.like("Ivan"),"Ivan liked My Story!");
(art.like("Steven"), "Steven liked My Story!");
(art.likes, "John and 2 others like this story!");
(art.comment("Anny", "Some Content"),"Anny commented on My Story");
(art.comment("Ammy", "New Content", 1),"You replied successfully");
(art.comment("Zane", "Reply", 2),"Zane commented on My Story");
(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2), "You replied successfully");

/*let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Zet Content");
art.comment("Archie", "Some Content");
console.log(art.comment("Mimi", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Alpha", "Reply", 1);
art.comment("Meta", "Reply", 1);
art.comment("Gama", "Reply", 1);

art.comment("Zane", "Reply", 2);
art.comment("Alpha", "Reply", 2);
art.comment("Meta", "Reply", 2);
art.comment("Gama", "Reply", 2);

art.comment("Zane", "Reply", 3);
art.comment("Alpha", "Reply", 3);
art.comment("Meta", "Reply", 3);
art.comment("Gama", "Reply", 3);
console.log(art.toString('asc'))*/



