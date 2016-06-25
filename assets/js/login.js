var console = 0;
var actividad = false;

function onload() {
    
    cargaractividad();
    
};

    function cargaractividad() {
        
        firebase.database().ref("/actividad").on("value", function (snapshot){
        actividad = snapshot.val();
        comprobar();
    });
    };
            
            function comprobar() {
                
                if(actividad == true){
                    
                    window.location="https://tuturno-javico.c9users.io/App.html";
                };
            };