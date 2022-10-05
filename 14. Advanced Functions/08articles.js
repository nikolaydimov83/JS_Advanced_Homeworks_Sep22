function solve(input){
    this.articles=input
    return function() {
        //document.getElementById('content').textContent=this.articles[0];
        this.articles.shift();
    }
}

let a=solve(['a','b','c'])

a()
a()
