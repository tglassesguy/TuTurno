var dataturn = 0;
var userturn = 0;
var status = false;
var actividad = false;

function app(){
    
    firebase.database().ref("/console").on("value", function (snapshot){
        
        dataturn = snapshot.val();
    });
    
    userturn = Math.floor(Math.random()*7 + dataturn + 50);
    document.getElementById("staticturn").innerHTML = userturn; 
    user();
};

function onload(){

    comprobarestado(),
    comprobarusario();
};

function comprobarestado() {
    
    firebase.database().ref("/status").on("value", function (snapshot){
        
        status = snapshot.val();
        estado();
    });
};

function estado() {
    
    if (status == "true"){
        
        firebase.database().ref("/console").on("value", function (snapshot){
            
            document.getElementById("liveturn").innerHTML = snapshot.val();
        });
    } else {
        alert("Servicio no disponible.");
    };
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
            
            //aqui esta la funcion que hace desaparecer el boton
            document.getElementById("staticturn").innerHTML = snapshot.val();
            
        });
        
        } else {
            //aqui va la funcion que hace aparecer el boton.
        };
};

function user() {
    
    actividad = true;
    firebase.database().ref("/turn").set(userturn),
    firebase.database().ref("/actividad").set(actividad);
    
};