  var firebaseConfig = {
    apiKey: "AIzaSyAMyBcu1NgQfZA4fgTzmYNi0-PBvmNCbkw",
    authDomain: "firelogin13.firebaseapp.com",
    databaseURL: "https://firelogin13.firebaseio.com",
    projectId: "firelogin13",
    storageBucket: "firelogin13.appspot.com",
    messagingSenderId: "807037341244",
    appId: "1:807037341244:web:7ddd5377f78c74fdaf7d39",
    measurementId: "G-Q5NVG2PD9S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  function signup(){
  var email=document.getElementById("inputEmail");
  var pass=document.getElementById("inputPassword");
  const promise=auth.createUserWithEmailAndPassword(email.value,pass.value);
  promise.catch(e => alert(e.message));
  alert("signed up");
}
function signin(){
    var email=document.getElementById("inputEmail");
    var pass=document.getElementById("inputPassword");
    const promise=auth.signInWithEmailAndPassword(email.value,pass.value);
    promise.catch(e => console.log(e.message));
}
function signout(){
    auth.signOut();
    alert("signed out");
}
auth.onAuthStateChanged(function(user){
    if(user){
        var email=user.email;
        document.getElementById("usr").innerHTML=email;
        document.getElementById("usr1").value=email;
        var x = document.getElementById("rgstr");
        var y= document.getElementById("log");
        var z= document.getElementById("sout");
        var w= document.getElementById("logform");
        w.style.display="none";
        x.style.display = "none";
        y.style.display="none";
        z.style.display="block";
    }
    else{
        document.getElementById("usr").innerHTML="logged out";
        var x = document.getElementById("rgstr");
        var y= document.getElementById("log");
        var z= document.getElementById("sout");
        z.style.display="none";
        var w= document.getElementById("logform");
        w.style.display="block";
        x.style.display = "block";
        y.style.display="block";
    }
});
function tst(){
    return("hahaha");
}
