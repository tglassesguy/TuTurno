var dataturn = 0;
var userturn = 0;
var status = false;
var actividad = false;
var faltan = 0;
var ultimolol = 0;
var lol = 0;
var pull = false;
var push_one = firebase.database().ref("/push_one").on("value", function(snapshot) {
    alert("Te faltan " + faltan + " turnos, \n ¡faltan pocos!.");
});

var push_two = firebase.database().ref("/push_two").on("value", function(snapshot) {
    alert("Te faltan " + faltan + " turnos, \n ¡faltan pocos!.");
});

var push_three = firebase.database().ref("/push_two").on("value", function(snapshot) {
    alert("¡es tu turno!")
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
        ocultarboton();

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

    document.getElementById("comentario").style.display = none;
    document.getElementById("comentario_dos").innerHTML = notificar;
    document.getElementById("bonotes_exit").style.display = block;
};

function push() {

    pull = true

    if (pull == true){

        pull = false;
        alert("Te faltan " + faltan + " turnos, \n ¡faltan pocos!.");
    } else {
        alert("lo logramos");
    };

};








////
