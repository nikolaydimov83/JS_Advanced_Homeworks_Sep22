function attachEventsListeners() {
    let convertBtn=document.getElementById('convert');
    convertBtn.addEventListener('click',(ev)=>{
        let inputUnits=document.getElementById('inputUnits');
        let outputUnits=document.getElementById('outputUnits');
        let inputDistance = document.getElementById('inputDistance');
        let outputDistance=document.getElementById('outputDistance');
        let objUnitTometers={};
        objUnitTometers.km=1000;
        objUnitTometers.m=1;
        objUnitTometers.cm=0.01;
        objUnitTometers.mm=0.001;
        objUnitTometers.mi=1609.34;
        objUnitTometers.yrd=0.9144;
        objUnitTometers.ft=0.3048;
        objUnitTometers.in=0.0254;

        let distanceMeters=inputDistance.value*objUnitTometers[inputUnits.value];
        let distanceOutputUnits=distanceMeters/objUnitTometers[outputUnits.value];
        outputDistance.value=distanceOutputUnits;

    })
}