class LibraryCollection{
    constructor(capacity){
        this.capacity=capacity;
        this.books=new Map()
    }
    addBook (bookName, bookAuthor){
        if (this.books.size===this.capacity){
            throw new Error("Not enough space in the collection.")
        }
        let quantity;
        
        if(!this.books.get(bookName)){
          
            this.books.set(bookName,{bookName,bookAuthor,payed:false,quantity:1}) 
        }else{
            this.books.get(bookName).quantity+=1;
        }
           
  
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook( bookName ){
        let bookToPay=this.books.get(bookName)
        if (!bookToPay){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if(bookToPay.payed){
            throw new Error(`${bookName} has already been paid.`)
        }
        bookToPay.payed=true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName){
        let bookToRemove=this.books.get(bookName);
        if(!bookToRemove){
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if(!bookToRemove.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.delete(bookName);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor){
        let toatlQuantity=0
        if(!bookAuthor){
            
            this.books.forEach((book)=>{
                toatlQuantity+=book.quantity;
            })
            let str=`The book collection has ${this.capacity-toatlQuantity } empty spots left.`;
            let sortedBook=[...this.books.entries()];
            sortedBook.sort((a,b)=>{
                if(a[0]<b[0]){
                    return -1
                }else return 1
            });
        let sortedBookMap=new Map (sortedBook);
        sortedBookMap.forEach((book,bookKey)=>{
            str+=`\n${bookKey} == ${book.bookAuthor} - ${book.payed? 'Has Paid':'Not Paid'}.`
        })
        return str.trim();
        }else{
            let str='';

            let sortedBook=[...this.books.entries()];
            /*sortedBook.sort((a,b)=>{
                if(a[0]<b[0]){
                    return -1
                }else return 1
            });*/
        let sortedBookMap=new Map (sortedBook);

            sortedBookMap.forEach((book,bookName)=>{
                
                if (book.bookAuthor===bookAuthor){
                    str+=`${bookName} == ${bookAuthor} - ${book.payed? 'Has Paid':'Not Paid'}.\n`
                }
            })
            if (!str){
                throw new Error (`${bookAuthor} is not in the collection.`)
            }else {
             
                return str.substring(0,str.length-1)
            }
        }
    }
}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
library.addBook('Don Quixote', 'Miguel de Cervantes');
console.log(library.getStatistics('dasdsadasdsa'));
