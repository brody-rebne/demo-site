function updateTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    
    var time = hour + ':' + min + ':' + sec;

    document.getElementById('time').innerHTML = time;

    /*setInterval(updateClock, 1000);*/
}
updateTime();

function hideAll() {
    var x = document.getElementById("body");

    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}

function confirmHide() {
    var output = window.confirm("Are you sure you want to hide the page?");
    if (output == false) {
        alert("Good decision!");
    } else {
        hideAll();
    }
}