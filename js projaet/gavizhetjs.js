function inputday() {
    let x = document.getElementById("input1").value;
    if (!isNaN(x)){
        let hour1 = (x*24),minute1 = (hour1*60), second1 = (minute1*60),years1 = (x/365);
        document.getElementById("show3").innerHTML ="years = "+years1;;
        document.getElementById("show").innerHTML = "hours = "+hour1;
        document.getElementById("show1").innerHTML ="minute = "+minute1;;
        document.getElementById("show2").innerHTML ="second = "+second1;;
    }
    else {
        document.getElementById("show").innerHTML = "error you did not enter number!";
    }
}

function inputhour() {
    let h = document.getElementById("input1").value;
    if (!isNaN(h)){
        let days1 = (h/24),
        minute1 = (h*60), 
        second1 = (minute1*60),
        years1 = (days1/365);
        document.getElementById("show3").innerHTML ="years = "+years1;;
        document.getElementById("show").innerHTML = "day = "+days1;
        document.getElementById("show1").innerHTML ="minute = "+minute1;;
        document.getElementById("show2").innerHTML ="second = "+second1;;
    }
    else {
        document.getElementById("show").innerHTML = "error you did not enter number!";
    }
}
function inputminute() {
    let m = document.getElementById("input1").value;
    if (!isNaN(m)){
        let 
        minute1 = (m/60),
        days1 = (minute1/24),
        second1 = (m*60),
        years1 = (days1/365);
        document.getElementById("show3").innerHTML ="years = "+years1;;
        document.getElementById("show").innerHTML = "day = "+days1;
        document.getElementById("show1").innerHTML ="hours = "+minute1;;
        document.getElementById("show2").innerHTML ="second = "+second1;;
    }
    else {
        document.getElementById("show").innerHTML = "error you did not enter number!";
    }
}
function inputsecond() {
    let m = document.getElementById("input1").value;
    if (!isNaN(m)){
        let 
        
        second1 = (m/60),
        minute1 = (second1/60),
        days1 = (minute1/24),
        years1 = (days1/365);
        document.getElementById("show3").innerHTML ="years = "+years1;;
        document.getElementById("show").innerHTML = "day = "+days1;
        document.getElementById("show1").innerHTML ="hours = "+minute1;;
        document.getElementById("show2").innerHTML ="minute = "+second1;;
    }
    else {
        document.getElementById("show").innerHTML = "error you did not enter number!";
    }
}