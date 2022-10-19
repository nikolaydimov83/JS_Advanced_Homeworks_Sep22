class ArtGallery{
    constructor(creator){
        this.cretor=creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles=[];
        this.guests=[]; 
    }
    addArticle( articleModel, articleName, quantity ){
        let articleModelToLower=articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModelToLower)){
            throw new Error('This article model is not included in this gallery!')
        }
        let articleFound=false
        this.listOfArticles.forEach((article)=>{
            if (article.articleName===articleName&&article.articleModel===articleModel.toLowerCase()){
                article.quantity+=quantity
                articleFound=true
            }
        });
        if(!articleFound){
            this.listOfArticles.push({articleModel:articleModel.toLowerCase(), articleName, quantity:quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest ( guestName, personality){
        this.guests.forEach((guest)=>{
            if (guest.guestName.toLowerCase()===guestName.toLowerCase()){
                throw new Error(`${guestName} has already been invited.`);
            }
            

        });
        let points;
        if (personality==='Vip'){
            points=500;
        }else if(personality==='Middle'){
            points=250;
        }else{
            points=50;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle ( articleModel, articleName, guestName){
       let result;
       if(this.guests.filter((guests)=>guests.guestName===guestName).length===0){
        return('This guest is not invited.')
    }
       let isArticleForSale=this.listOfArticles.forEach((article)=>{

            if(article.articleModel===articleModel&&article.articleName===articleName&&!result){
                if(article.quantity===0){
                    result= `The ${articleName} is not available.`
                    return
                }
                let guestPoints=this.guests.filter((guests)=>guests.guestName===guestName)[0].points;
                let articlePoints=this.possibleArticles[article.articleModel]
                if(guestPoints<articlePoints){
                    result= "You need to more points to purchase the article.";
                    return
                }else{
                    this.guests.filter((guests)=>guests.guestName===guestName)[0].points-=articlePoints;
                    article.quantity--;
                    this.guests.filter((guests)=>guests.guestName===guestName)[0].purchaseArticle++;
                    result= `${guestName} successfully purchased the article worth ${articlePoints} points.`
                }
             
            }
        });
        console.log()
        if(!result){
            throw new Error("This article is not found.");
        }
        return result;
    }
    showGalleryInfo (criteria){
        let str=''
        if (criteria==='article'){
        str+="Articles information:"
        this.listOfArticles.forEach((article)=>{
            str+=`\n${article.articleModel} - ${article.articleName} - ${article.quantity}`;
        })
        }
        if (criteria==='guest'){
            str+="Guests information:";
            this.guests.forEach((guest)=>{
                str+=`\n${guest.guestName} - ${guest.purchaseArticle}`
            })

            }
            return str
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
console.log(artGallery.inviteGuest('Bob'));
console.log(artGallery.buyArticle('photo','Mona Lisa','Rer'))


