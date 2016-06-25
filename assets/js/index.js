var console = 0;
var actividad = false;
var other = 0;

function onload() {
    
    cargaractividad();
    
};

    function cargaractividad() {
        
        firebase.database().ref("/actividad").on("value", function (snapshot){
        actividad = snapshot.val();
        cargarconsola();
    });
    };
        
        function cargarconsola() {
            
            firebase.database().ref("/faltan").on("value",function (snapshot) {
    
            console = snapshot.val();
            document.getElementById("bam").innerHTML = ("Faltan " + console + " Turnos");
            comprobar();
        });
        };
            
            function comprobar() {
                
                if(actividad == true){
                    
                    document.getElementById("esto").style.display = "block";
                    comprobarpop();
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
            

function notificacionBasica() {

    var notification = null;
    
    if (!('Notification' in window)) {
        // el navegador no soporta la API de notificaciones
        alert('Su navegador no soporta la API de Notificaciones :(');
        return;
    } else if (Notification.permission === "granted") {
        // Se puede emplear las notificaciones
    
        notification = new Notification( "Te faltan " + console + " Turnos");
    
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

function iraturno() {
    
    window.location="App.html";
    
};

function subirultimolol() {
    
    document.getElementById("comentario").style.display = "none";
    document.getElementById("bonotes_exit").style.display = "block";
    document.getElementById("comentario_dos").innerHTML = "Es Tu Turno!";
    ultimolol = 5;
    firebase.database().ref("/ultimolol").set(ultimolol);
    iraturno();
};