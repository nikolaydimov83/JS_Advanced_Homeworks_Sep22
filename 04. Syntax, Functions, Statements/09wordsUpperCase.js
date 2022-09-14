function wordsUpperCase(initialString){
let arrayOfWords=initialString.split(/[^A-Za-z0-9]/);
let resultArray=[];

for (const word of arrayOfWords) {
    if (word){
        resultArray.push(word.toUpperCase())
    }
}
console.log(resultArray.join(', '))
}

wordsUpperCase(`Hi, how are you? Let's go 9`)