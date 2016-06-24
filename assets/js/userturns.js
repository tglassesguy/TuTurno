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
    user(),
    mostrarpost(),
    ocultarboton();
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
        ocultarpost(),
        ocultarboton(),
        anuncio();
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
    document.getElementById("boton").style.display = "block";
};
    
function anuncio() {
    document.getElementById("anuncio").innerHTML = "El servicio no está disponible";
};