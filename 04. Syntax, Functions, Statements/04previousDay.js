function prevDay(year,month,day){
    let initialDate=new Date(year,month-1,day);
    initialDate.setDate(initialDate.getDate()-1);
    console.log(`${initialDate.getFullYear()}-${initialDate.getMonth()+1}-${initialDate.getDate()}`)
}

prevDay(2016, 10, 1)