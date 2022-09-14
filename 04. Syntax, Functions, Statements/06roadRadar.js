function roadRadar(speed,road){
    let speedLimits={
        motorway:130,
        interstate:90,
        city:50,
        residential:20
    }
    let speedLimit=speedLimits[road];
    let speedExcess=speed-speedLimit;
    let status;
    if (speedExcess<=20){
        status='speeding';
    }else if(speedExcess<=40){
        status='excessive speeding';
    }else{
        status='reckless driving'
    }
    if (speedExcess<=0){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        console.log(`The speed is ${speedExcess} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}