var actividad = false;

function onload(){
    firebase.database().ref("/actividad").set(actividad);
    renovar(), relolear(), repush();
    
};

function reload() {

    window.location="https://tuturno-javico.c9users.io/admintool.html";

};


function renovar() {

    status = false;
    estado();
};

function relolear() {

    ultimolol = 0;

    firebase.database().ref("/ultimolol").set(ultimolol);

    lol = 0;

    firebase.database().ref("/lol").set(lol);

    userturn = 0;

    firebase.database().ref("/turn").set(userturn);

};

function redireccionar(){
    window.location= "index.html"
};