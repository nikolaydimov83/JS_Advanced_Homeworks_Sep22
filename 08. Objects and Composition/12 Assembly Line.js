function createAssemblyLine(){
    let hasClima=function(car){
        return Object.assign(car,{
            temp:21,
            tempSettings:21,
            adjustTemp:function(){
                if(car.temp<car.tempSettings){
                    car.temp++
                }else if(this.temp>this.tempSettings){
                    car.temp--
                }
            }
        })
       
    }
    let hasAudio=function(car){
       let  currentTrack=null
        let nowPlaying=function(){
            if(car.currentTrack){
                console.log(`'${car.currentTrack.name}' by '${car.currentTrack.artist}'`);
            }else{
                console.log('Sorry no audio')
            }
            
        }
        let intermediate={currentTrack,nowPlaying}
        return Object.assign(car,intermediate);
    }

    let hasParktronic=function(car){
        let checkDistance=function(distance){
            if (distance < 0.1){
                console.log('Beep Beep Beep');
            }else if (distance<0.25){
                console.log('Beep Beep');
            }else if(distance<0.5){
                console.log('Beep');
            }
        }
        return Object.assign(car,{checkDistance})
    }
    return{hasClima,hasAudio,hasParktronic}
}

const assemblyLine = createAssemblyLine();


const myCar = {

make: 'Toyota',

model: 'Avensis'

};
assemblyLine.hasClima(myCar);


console.log(myCar.temp);

myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);

assemblyLine.hasAudio(myCar);

myCar.currentTrack = {

name: 'Never Gonna Give You Up',

artist: 'Rick Astley'

};

myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);
