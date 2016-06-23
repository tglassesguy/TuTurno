var console = 0;
var status = false;

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
    status = true;
    estado(),
    countdown();
    
};

///

function stop(){
    
    renovar(), publish(), reload();

};


function reload() {
    
    window.location="https://tuturno-javico.c9users.io/admintool.html";
    
};

function publish() {
    
    console = 0;
    document.getElementById("generalturn").innerHTML = console;
    subir();
};

function renovar() {
    
    status = false;
    estado();
};

///

function continuar(){
    
    countdown();
    
};

///

function countdown() {
    
    var fiveMinutes = segundos * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

};

///

function estado() {
    
    firebase.database().ref("/status").set(status);
    
};

///


function subir() {
    
    firebase.database().ref("/console").set(console);
    
};

///

function onload() {
    
    firebase.database().ref("/status").on('value', function(snapshot){
         status = snapshot.val();
         comprobar();
    });
    
};

function comprobar() {

    if (status == "true"){
    
    firebase.database().ref('/console').on('value', function(snapshot){
        
        console = snapshot.val();    
        document.getElementById("generalturn").innerHTML = console;
        
        });
        
    } else {
        console = 0;
        document.getElementById("generalturn").innerHTML = console;
    };
};










function mostrar() {
document.getElementById('oculto').style.display = 'block';
};

function ocultar() {
document.getElementById('holo').style.display = 'none';
};

///
