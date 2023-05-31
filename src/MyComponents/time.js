let dte, hr, min, sec,ap, dt;
let weekdays = ['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];
setInterval(() => {
    dte = new Date();
    hr = dte.getHours();
    min = dte.getMinutes();
    sec = dte.getSeconds();

    dt = weekdays[dte.getDay()];

    if (sec<10) {
        document.getElementById('sec').innerText = '0'+sec; 
    }else{
        document.getElementById('sec').innerText = sec; 
    }
   
    if(hr>12){
        hr = hr-12;
        ap='PM';
    }
    else{
        ap='AM'
    }

    if (hr<10) {
        document.getElementById('hr').innerText = '0'+hr; 
    }else{
        document.getElementById('hr').innerText = hr; 
    }

    if (min<10) {
        document.getElementById('min').innerText = '0'+min; 
    }else{
        document.getElementById('min').innerText = min; 
    }

    document.getElementById('dateName').innerText = dt;
    // document.getElementById('hr').innerText = hr;
    document.getElementById('ap').innerText = ap;
    // document.getElementById('min').innerText = min;
    // document.getElementById('sec').innerText = sec; 

    
}, 800);