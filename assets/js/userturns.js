var dataturn = 0;
var userturn = 0;
var status = false;
var actividad = false;
var faltan = 0;
var ultimolol = 0;
var lol = 0;
var pull = false;
var other = 0;

var notificacion_two =  firebase.database().ref("/push_two").on("value", function(snapshot) {
        
    notificacionBasica();
    
    });
    
var notificacion_three = firebase.database().ref("/push_three").on("value", function(snapshot) {
        
    notificacionBasica();
    subirultimolol();
    
    });


var notificar = "¡Es tu turno!";


function app(){

    userturn = Math.floor(Math.random()*7 + dataturn + 5);
    document.getElementById("staticturn").innerHTML = userturn;
    document.getElementById("liveturn").innerHTML = dataturn;
    user(),
    mostrarpost(),
    ocultarboton();
};

//////

function onload(){

    cargarestado();

};

    function cargarestado() {

        firebase.database().ref("/status").on("value", function (snapshot){

            status = snapshot.val();
            comprobarpop(),
            cargaractividad();

        });
    };

        function cargaractividad(){

            firebase.database().ref("/actividad").on("value", function (snapshot) {

                actividad = snapshot.val();
                cargardataturn();

            });
        };
            function cargardataturn() {

                firebase.database().ref("/console").on("value", function (snapshot) {

                    dataturn = snapshot.val();
                    cargarfaltan();

                });
            };
                function cargarfaltan() {

                    firebase.database().ref("/faltan").on("value", function(snapshot) {

                        faltan = snapshot.val();
                        cargaruserturn();
                    });
                };
                    function cargaruserturn(){

                        firebase.database().ref("/turn").on("value", function (snapshot) {

                            userturn = snapshot.val();
                            comprobarestado();
                        });
                    };

//////

function comprobarestado() {

    if (status == "false"){

        ocultarboton(),
        ocultarpost(),
        mostraranuncio();

    } if (status == "true" && actividad == false) {

        ocultaranuncio(),
        ocultarpost(),
        mostrarboton();

    } if (status == "true" && actividad == true) {

        document.getElementById("staticturn").innerHTML = userturn;
        document.getElementById("liveturn").innerHTML = dataturn;
        ocultaranuncio(),
        mostrarpost(),
        ocultarboton(),
        comprobarlol();

    };
};

function subirlol(){
    firebase.database().ref("/lol").set(lol);
};


function comprobarusario() {

    firebase.database().ref("/actividad").on("value", function (snapshot) {

        actividad = snapshot.val();
        unidos();
    });
};

function unidos() {

    if (actividad == true){

        firebase.database().ref("/turn").on("value", function (snapshot) {

            ocultarboton(),
            mostrarpost();
            document.getElementById("staticturn").innerHTML = snapshot.val();

        });

        } else {
            mostrarboton();
        };
};

function user() {

    actividad = true;
    firebase.database().ref("/turn").set(userturn),
    firebase.database().ref("/actividad").set(actividad);

};

function ocultarboton() {

    document.getElementById('boton').style.display = 'none';

};

function ocultarpost() {

    document.getElementById('post').style.display = 'none';

};

function mostrarpost() {

    document.getElementById("post").style.display = 'block';

};

function mostrarboton() {
    document.getElementById("boton").style.display = 'block';
};

function mostraranuncio() {
    document.getElementById("not").style.display = 'block';
};

function ocultaranuncio() {
    document.getElementById("not").style.display = 'none';
};



function pum(){
    alert("Te faltan " + faltan + " turnos, \n ¡faltan pocos!.");
};

function subirultimolol() {
    
    document.getElementById("comentario").style.display = "none";
    document.getElementById("bonotes_exit").style.display = "block";
    document.getElementById("comentario_dos").innerHTML = "Es Tu Turno!";
    ultimolol = 5;
    firebase.database().ref("/ultimolol").set(ultimolol);
};



////

function notificacionBasica() {

    var notification = null;
    
    if (!('Notification' in window)) {
        // el navegador no soporta la API de notificaciones
        alert('Su navegador no soporta la API de Notificaciones :(');
        return;
    } else if (Notification.permission === "granted") {
        // Se puede emplear las notificaciones
    
        notification = new Notification( "Te faltan " + faltan + " Turnos");
    
    } else if (Notification.permission !== 'denied') {
        // se pregunta al usuario para emplear las notificaciones
        Notification
                .requestPermission(function(permission) {
            if (permission === "granted") {
                notification = new Notification(
                        "Notificaciones activadas");
            }
        });
    };

};

function notificacionBasicados() {

    var notification = null;
    
    if (!('Notification' in window)) {
        // el navegador no soporta la API de notificaciones
        alert('Su navegador no soporta la API de Notificaciones :(');
        return;
    } else if (Notification.permission === "granted") {
        // Se puede emplear las notificaciones
    
        notification = new Notification( "¡Es Tu Turno!");
    
    } else if (Notification.permission !== 'denied') {
        // se pregunta al usuario para emplear las notificaciones
        Notification
                .requestPermission(function(permission) {
            if (permission === "granted") {
                notification = new Notification(
                        "Notificaciones activadas");
            }
        });
    };

};

function comprobarpop() {
    
    firebase.database().ref("/push_one").on("value", function(snapshot) {

        other = snapshot.val();   
        if (other == 1){
              notificacionBasica();
              other = 2;
              firebase.database().ref("/push_one").set(other);
        };
    });
    
    firebase.database().ref("/push_two").on("value", function(snapshot) {

        other = snapshot.val();   
        if (other == 1){
              notificacionBasica();
              other = 2;
              firebase.database().ref("/push_two").set(other);
        };
    });
    
    firebase.database().ref("/push_three").on("value", function(snapshot) {

        other = snapshot.val();   
        if (other == 1){
              other = 2;
              firebase.database().ref("/push_three").set(other);
              subirultimolol();
        };
    });
};

function turnoaceptado() {
    
    window.location="turnoaceptado.html";
};

function turnorechazado() {
    window.location="turnorechazado.html"  
};

function comprobarlol() {
    
    firebase.database().ref("/ultimolol").on("value", function(snapshot) {
        
        if (snapshot.val() == 4) {
            
            subirultimolol();
        };
      });
};