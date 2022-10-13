(function(){
    String.prototype.ensureStart=function(str){
        if (this.indexOf(str)!==0){
            return str+this.toString();
        }else{
            return this.toString()
        }
    }
    String.prototype.ensureEnd=function(str){
        if (this.lastIndexOf(str)!==(this.length-str.length)){
            return this.toString()+str
        }else{
            return this.toString()
        }
    }
    String.prototype.isEmpty=function(){
        return this.length===0;
    }
    String.prototype.truncate=function(n){
        
        if(n<4){
            let str='';
            for (let i = 1; i <=n; i++) {
                str+='.';
            }
            return str
        }
        if (n>=this.length){
            return this.toString()
        }else{

            let lastIndex=this.substring(0,n-2).lastIndexOf(' ');
            if (lastIndex!==-1){
                return this.substring(0,lastIndex)+'...'
            }else{
                return this.substring(0,n-3)+'...'
            }

        }       
    }
    String.format=function (string,...params){
        params.forEach((parameter,key)=>{
            let placeHolder=`{${key}}`;
        
            string=string.replace(placeHolder,parameter);
        });
        return string
    }
})()

let str = '0123456789 12345 ';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.ensureEnd(' Bye');
str = str.truncate(15);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');



