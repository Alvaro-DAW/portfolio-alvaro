const init=()=>{
    startTime();
    toggle();
}
function startTime() {
    var today = new Date();
    var inici=new Date(2020,8,21);
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();   
    min = checkTime(min);
    sec = checkTime(sec);
    var res=today-inici;
    var dies= (res / (24*60*60*1000)).toFixed(0);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    document.getElementById("fecha").innerHTML= today.toLocaleDateString()+"<br>Dies desde 21 de setembre de 2020: "+ dies;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function toggle() {
    let box=document.getElementById("clockdate");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
 }
