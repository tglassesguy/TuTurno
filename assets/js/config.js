var console = 0;
var actividad = false;

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
                };
            };