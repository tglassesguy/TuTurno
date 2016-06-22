var usuario = 0;

firebase.database().ref('/console').on('value', function(turno) {
    
    document.getElementById('liveturn').innerHTML = turno.val();
    
});

function app(){
    
    user();
    
};

function user(){
    
    firebase.database().ref("/console").on("value", function(snapshot){
        
        usuario = snapshot.val() + Math.floor(Math.random() * 7 + 50);
        document.getElementById("static-turn").innerHTML = usuario;
    });

};


/*
firebase.database().ref("console/").on("value", function(snapshot) {
  
  document.getElementById("liveturn").innerHTML = snapshot.val();
  
});



///

function push() {
    document.getElementById("static-turn").innerHTML = user.turn;
    firebase.database().ref("/user").set(user);
};

///

function turnousuario() {
    
    firebase.database().ref("console/").on("value", function(turno){
        
    var casa = turno.val();    
    user.turn = Math.floor(Math.random() * 7 + casa);
    push();
    
    });
};


///


