function addRemove(array){
    let element=1;
    let resultArray=[]
    for (const command of array) {
        switch (command){
            case 'add':
                resultArray.push(element);
                element++;
                break
            case 'remove':
                resultArray.pop(element);
                element++
                break
        }
    }
    if (resultArray.length===0){
        console.log('Empty');
        return
    }
    for (const element of resultArray) {
        console.log(element);
    }
}