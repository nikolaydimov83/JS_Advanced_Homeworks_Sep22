function storeCatalogue(input){
    let arrayOfProducts=[]
    for (const item of input) {
        let itemAsArr=item.split(' : ');
        let productObj={'name':itemAsArr[0],'price':Number(itemAsArr[1])}
        arrayOfProducts.push(productObj);
    }
    arrayOfProducts.sort((a,b)=>a.name>b.name?1:-1)
    let currentLetter=arrayOfProducts[0].name[0]
    console.log(currentLetter);
    for (const product of arrayOfProducts) {
        if(currentLetter!==product.name[0]){
            currentLetter=product.name[0];
            console.log(currentLetter)
        }
    console.log(`  ${product.name}: ${product.price}`)
    }
}

storeCatalogue(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])