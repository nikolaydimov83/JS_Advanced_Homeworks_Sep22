function lowestPrices(input){
    let productInfoArr=[] 
    for (const item of input) {
        let itemAsArr=item.split(' | ');
        let productInfo={'town':itemAsArr[0],'product':itemAsArr[1],'price':Number(itemAsArr[2])}
        let productAtIndex=productInfoArr.findIndex((value,index)=>value.product===productInfo.product);
        if (productAtIndex===-1){
            productInfoArr.push(productInfo);
        }else if(productInfoArr[productAtIndex].price>productInfo.price){
            productInfoArr.splice(productAtIndex,1,productInfo);
        }
    }
    for (const item of productInfoArr) {
        console.log(`${item.product} -> ${item.price} (${item.town})`)
    }
}
lowestPrices(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999'])