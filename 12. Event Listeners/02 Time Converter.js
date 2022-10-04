function timeConverter(){
    let body=document.getElementsByTagName('body')[0];
    console.log(body);
    body.addEventListener('click',readAndConvert);
    let inputDays=document.getElementById('days');
    let inputHours=document.getElementById('hours');
    let inputMinutes=document.getElementById('minutes');
    let inputSeconds=document.getElementById('seconds');
    console.log(document.getElementById('daysBtn'));
    let convertFunctionsHolder={
        'daysBtn':()=>{
            inputHours.value=Number(inputDays.value)*24;
            inputMinutes.value=Number(inputHours.value)*60;
            inputSeconds.value=Number(inputMinutes.value)*60;
        },
        'hoursBtn':()=>{
            inputDays.value=Number(inputHours.value)/24;
            inputMinutes.value=Number(inputHours.value)*60;
            inputSeconds.value=Number(inputMinutes.value)*60;
        },
        'minutesBtn':()=>{
            inputDays.value=Number(inputMinutes.value)/24/60;
            inputHours.value=Number(inputMinutes.value)/60;
            inputSeconds.value=Number(inputMinutes.value)*60;
        },
        'secondsBtn':()=>{
            inputDays.value=Number(inputSeconds.value)/24/3600;
            inputHours.value=Number(inputSeconds.value)/3600;
            inputMinutes.value=Number(inputSeconds.value)/60;
        }
    }
    function readAndConvert(ev){
        
        if (ev.target.type==='button'){
            let nodeClickedId=ev.target.id;
            convertFunctionsHolder[nodeClickedId]();
        }
        
    }
}
timeConverter();