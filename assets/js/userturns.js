var dataturn = 0;
var userturn = 0;

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

function app() {
    
    var
    
};

function onload(){

    firebase.database().ref('/console').on('value', function(snapshot){

        dataturn = snapshot.val();

    });
};