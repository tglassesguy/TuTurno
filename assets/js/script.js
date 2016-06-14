var turno = Math.floor(Math.random() * 7 + 10);
var liveturn = Math.floor(Math.random() * 7 );
var segundos =  Math.floor(Math.random() * 7 + 10);
var notificacionuno = Math.floor(turno / 2);
var falta = (turno - liveturn);
var bool = 0;
var notbool = 0;
var otrosegundos = 60;


function turn() {
    document.getElementById("static-turn").innerHTML = turno;
};

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
            liveturn ++ ;
            document.getElementById("live-turn").innerHTML = liveturn;
        };

        if (turno == liveturn) {
            bool ++;
        };

        if (bool == 1) {
            alert("¡Es tu turno!");
            fiveMinutes = 60 * 1;
            bool ++;
        }

        if (liveturn == notificacionuno) {
            notbool ++;
        };

        if (notbool == 1) {
            alert("Te faltan " + falta + " turnos.");
            notbool ++;
        };


    }, 1000);
}

window.onload = function () {
    var fiveMinutes = segundos * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function mostrar() {
document.getElementById('oculto').style.display = 'block';
};

function ocultar() {
document.getElementById('holo').style.display = 'none';
};
