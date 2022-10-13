function solution(){
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
            
        }
        
        toString(){
                return `Post: ${this.title}\nContent: ${this.content}`
            }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.comments=[];
           
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let postStr=super.toString();
            postStr+=`\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length>0){
                postStr+="\nComments:"
                this.comments.forEach((comment)=>{
                    postStr+=`\n * ${comment}`
                });
                
            }
            return postStr
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views=views
    }

    view(){
        this.views++;
        return this
    }
    toString(){
        let oldStr=super.toString();
        return oldStr+=`\nViews: ${this.views}`
    }


}

return {
    Post:Post,
    SocialMediaPost:SocialMediaPost,
    BlogPost:BlogPost
}

}

const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post

// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

let bp =new classes.BlogPost("TestTitle", "TestContent",5)

bp.view().view().view()

console.log(bp.toString());