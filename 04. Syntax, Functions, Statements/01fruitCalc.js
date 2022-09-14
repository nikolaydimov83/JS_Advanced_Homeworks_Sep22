function fruitCalc(type, grams, price){
    let kilos=grams/1000;
    console.log(`I need $${(price*kilos).toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type}.`)
}