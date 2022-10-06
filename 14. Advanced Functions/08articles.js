function solve(input){
    this.articles=input
    return function() {
        if (this.articles.length>0){
            let article=document.createElement('article');
            article.textContent=this.articles[0];
            document.getElementById('content').appendChild(article);
            this.articles.shift();
        }

    }
}

let a=solve(['a','b','c'])

a()
a()
