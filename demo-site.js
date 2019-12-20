
function login() {
    var username = prompt('Enter username (enter anything or try null)');
    while (username === null || username === "") {
        username = prompt("Please enter a username or I'll have to call security");
    }
    var password = prompt('Enter password');
    while (password !== 'password123' && password !== 'f')  {
        password = prompt('Incorrect password. Please try again (try password123)');
    }
/*    var welcomes = prompt('How enthusastically would you like to be welcomed?');
    if (welcomes < 1) {
        welcomes = 1;
    }*/
}
window.onload = login();

function logout() {
    
}

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
    //setInterval(updateTime, 1000);
}
updateTime();

/*function hideAll() {
    var x = document.getElementById("body");
    
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}

function confirmHide() {
    var output = window.confirm("Are you sure you want to hide the page?");
    if (output === false) {
        alert("Good decision!");
    } else {
        hideAll();
    }
}*/

//timeout

/*var button = document.getElementsByClassName('recolor');
var x = document.getElementById("colorselect");
var selected = x.options[x.selectedIndex].text;


function getSelectedColor() {
    selected = x.options[x.selectedIndex].text;
    if (selected === "Red") {
        buttonColor = "rgb(255, 0, 77)";
    } else if (selected === "Green") {
        buttonColor = "rgb(116, 255, 0)";
        buttonTextColor = "rgb(0, 0, 0)";
    } else if (selected === "Yellow") {
        buttonColor = "rgb(255, 191, 0)";
        buttonTextColor= "rgb(0, 0, 0)";
    } else {
        buttonColor = "rgb(0, 0, 255)";
    }
    button.style.background = buttonColor;
    button.style.color = buttonTextColor;
}*/

var bgPrimary = document.getElementsByClassName('primary');
var bgAccent = document.getElementsByClassName('accent');
var text = document.body.getElementsByTagName('*');

function themeLight() {
    var bgPrimary = document.getElementsByClassName('primary');
    var bgAccent = document.getElementsByClassName('accent');
    var text = document.body.getElementsByTagName('*');

    bgPrimary.style.background = 'rgb(255, 255, 255)';
    bgAccent.style.background = 'rgb(0, 0, 255)';
    text.style.color = 'rgb(20, 20, 20)';

}
themeLight();

function themeDark() {
    var bgPrimary = document.getElementsByClassName('primary');
    var bgAccent = document.getElementsByClassName('accent');
    var text = document.body.getElementsByTagName('*');

    bgPrimary.style.background = 'rgb(255, 255, 255)';
    bgAccent.style.background = 'rgb(33, 33, 33)';
    text.style.color = 'rgb(235, 235, 235)';
}