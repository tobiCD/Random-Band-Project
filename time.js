function time (){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    var giay = date.getSeconds();
    var period = '';
    if (hour >12){
        period ="PM";
    
    }else{
        period ="AM";
    }
    if (hour ==0 ){
        hour =12 ;
    }
    else if (hour >12){
        hour = hour -12;
    }
    hour =hour.update(hour);
    minutes = minutes.update(minutes)
    giay = giay.update(giay);
    document.getElementById("digital-clock").innerHTML = hour +":"+minutes +":"+ giay+":"+ period;
   setTimeout(Time , 1000);
}
function update(t){
if (t<10 ){
    return "0"+t;

}
else{
    return t;

}
}
Time();