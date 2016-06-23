var console = 0;
var status = 0;

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
    status();
    
};

function countdown() {
    
    var fiveMinutes = segundos * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

};

///

function status() {
    
    var status = 1;
    firebase.database().ref('/status').set(status);
    
};

///


function mostrar() {
document.getElementById('oculto').style.display = 'block';
};

function ocultar() {
document.getElementById('holo').style.display = 'none';
};

///

function subir() {
    
    firebase.database().ref("/console").set(console);
    
};

///

function onload() {
    
        firebase.database().ref("/status").on('value', function(snapshot){
             status = snapshot.val();
        });
    
};

if (status == 1){
    
    firebase.database().ref('/console').on('value', function(snapshot){
        
        console = snapshot.val();    
        document.getElementById("generalturn").innerHTML = console;
        countdown();
    });
};