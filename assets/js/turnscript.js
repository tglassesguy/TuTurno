var console = 0;

///

var segundos =  Math.floor(Math.random() * 7 + 10);
var notificacionuno = Math.floor(turno / 2);
var falta = (turno - liveturn);
var bool = 0;
var notbool = 0;
var otrosegundos = 60;


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            console ++ ;
            document.getElementById("generalturn").innerHTML = console;
            subir();
        };

    }, 1000);
};

///

function iniciar(){
     
    console = 0;
    document.getElementById("generalturn").innerHTML = console;
    
};

function countdown() {
    
    var fiveMinutes = segundos * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

};

///


function mostrar() {
document.getElementById('oculto').style.display = 'block';
};

function ocultar() {
document.getElementById('holo').style.display = 'none';
};

function subir() {
    
    firebase.database().ref("/console").set(console);
    
};

firebase.database().ref("user/").on("value", function (back) {
    
    document.getElementById("userturn").innerHTML = back.val();
    
});