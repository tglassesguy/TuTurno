var console = 1;
var status = false;
var mostrar  = 0;
var notificacion = 0;
var notificacion_two = 0;
var lol = 0;
var ultimolol = 0;
var gg = 0;
var push_one = false;
var push_two = false;
var push_three = false;
var final = 0;
var empuja_one = 0;
var empuja_two = 0;

///

var userturn = firebase.database().ref("/turn").on("value", function(snapshot) {
    
    userturn = snapshot.val();
    document.getElementById("userturn").innerHTML = userturn;
});

///

var notificacion_one= firebase.database().ref("/turn").on("value", function(snapshot) {
    
    notificacion = Math.floor(snapshot.val() /2);
    notificacion_two = Math.floor(notificacion/2);
    document.getElementById("notification").innerHTML = notificacion;
    document.getElementById("notification_dos").innerHTML = notificacion_two;
    variables();

});

function variables() {
    
    empuja_one = notificacion;
    empuja_two = notificacion_two;
    
};

var comprobacionlol = firebase.database().ref("/faltan").on("value", function(snapshot) {

    if (snapshot.val() == empuja_one){
        
        push_one= true;
        firebase.database().ref("/push_one").set(push_one);
        empuja_one ++;
        
    } if (snapshot.val() == notificacion_two){
        
        empuja_two ++;
        push_two= true;
        firebase.database().ref("/push_two").set(push_two);
        
    } if (snapshot.val() == final){
        
        final ++;
        push_three= true;
        firebase.database().ref("/push_three").set(push_three);
    };
});

///

var falta = firebase.database().ref("/console").on("value", function(snapshot) {
    
    mostrar = userturn - snapshot.val();
    document.getElementById("falta").innerHTML = mostrar;
    show();
});

///

var finish = firebase.database().ref("/ultimolol").on("value" , function(snapshot) {
    
    ultimolol = snapshot.val();
    finalizar();
});

function finalizar() {
    
    if(ultimolol == 1){
        ultimolol --;
        firebase.database().ref("/ultimolol").set(ultimolol);
        reload();
    };
};

var actividad = false;
var firts= false;

///

var segundos =  Math.floor(Math.random() * 7 + 10);
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
            subir(),
            notificacion();
        };

    }, 1000);
};

///

function iniciar(){
     
    console = 1;
    document.getElementById("generalturn").innerHTML = console;
    status = true;
    estado(),
    countdown();
    
};

///

function stop(){
    
    firebase.database().ref("/actividad").set(actividad);
    renovar(), publish(), relolear(), repush(), reload();
};


function reload() {
    
    window.location="https://tuturno-javico.c9users.io/admintool.html";
    
};

function publish() {
    
    console = 1;
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
        console = 1;
        document.getElementById("generalturn").innerHTML = console;
    };
};


///


function notificacion() {
    
    if (notificacion == console){
        
        firts = true;
        firebase.database().ref("/notificacion_one").set(notificacion_one);
        alert("subimos la notifiacion");
    };
};


function show() {
    
    firebase.database().ref("/faltan").set(mostrar);
};
function relolear() {
    
    ultimolol = 0;
    
    firebase.database().ref("/ultimolol").set(ultimolol);
    
    lol = 0;
    
    firebase.database().ref("/lol").set(lol);
    
    userturn = 0;
    
    firebase.database().ref("/turn").set(userturn);

};

function repush() {
    
    push_one = false;
    push_two = false;
    push_three = false;
    firebase.database().ref("/push_one").set(push_one),
    firebase.database().ref("/push_two").set(push_two),
    firebase.database().ref("/push_three").set(push_three);
};