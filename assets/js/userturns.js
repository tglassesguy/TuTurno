var dataturn = 0;
var userturn = 0;
var status = false;

function app(){
    
    document.getElementById("liveturn").innerHTML = dataturn;
    turno();
    app();
};

function turno(){
    
    userturn = Math.floor(Math.random()*7 + dataturn + 50);
    document.getElementById("staticturn").innerHTML = userturn;
    firebase.database().ref('/turn').set(userturn);
    
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
        
        alert("El servicio no está disponible, regrese mas tarde.");
    };
};
