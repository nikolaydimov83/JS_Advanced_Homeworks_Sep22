function solve(input,sortCriteria){
    let allTickets=[];
    input.forEach(element => {
        let splittedAsArr=element.split('|');
        let ticket={};
        ticket.destination=splittedAsArr[0];
        ticket.price=Number(splittedAsArr[1]);
        ticket.status=splittedAsArr[2];
        allTickets.push(ticket)
    });
 
    allTickets.sort((a,b)=>{
        if (sortCriteria==='price'){
            return Number(a.price)-Number(b.price)
        }else{
            if(a[sortCriteria]>b[sortCriteria]){
                return 1
            }else if(a[sortCriteria]===b[sortCriteria]){
                return 0
            }
            else{
                return -1
            }
            
        }
    });
    return allTickets
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
).forEach((element)=>console.log(element))