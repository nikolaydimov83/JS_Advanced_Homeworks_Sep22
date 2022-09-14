function timeToWalk(numberSteps,stepLengthMtrs,speedKmHour){
    let lengthMeters=numberSteps*stepLengthMtrs;
    let speedMetresPerSecond=speedKmHour*5/18;
    let timeSeconds=Math.ceil(lengthMeters/speedMetresPerSecond);
    let minutesForBreak=Math.floor(lengthMeters/500)
    timeSeconds+=minutesForBreak*60;
    let hours=Math.floor(timeSeconds/3600)
    let minutes=Math.floor((timeSeconds%3600/60));
    let seconds=(timeSeconds%3600)%60;

    function addZeroIfLessThanTen(num){
        if (num<10){
            return '0'+num
        }else{
            return num
        }
    }
    console.log(`${addZeroIfLessThanTen(hours)}:${addZeroIfLessThanTen(minutes)}:${addZeroIfLessThanTen(seconds)}`);


}
timeToWalk(2564, 0.70, 5.5)