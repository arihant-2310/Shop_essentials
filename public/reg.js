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
    window.Location.href='https://www.google.com/';
    var email=document.getElementById("inputEmail");
    var pass=document.getElementById("inputPassword");
    var repass=document.getElementById("reinputPassword");
    const promise=auth.signInWithEmailAndPassword(email.value,pass.value);
    promise.catch(e => console.log(e.message));}

function signout(){
    var x = document.getElementById("rgstr");
    var y= document.getElementById("log");
    auth.signOut();
    document.getElementById("log1").style.display="block";
    x.style.display="block";
    document.getElementById("rgstr1").style.display="block";
    y.style.display="block"
    alert("signed out");
}
auth.onAuthStateChanged(function(user){
    var y= document.getElementById("log");
    var z= document.getElementById("sout");
    var w= document.getElementById("logform");
    var li = document.getElementById("logedin");
    //w.style.display="none";
    if(user){
        var email=user.email;
        if(document.getElementById("usr")!=null)
       { document.getElementById("usr").innerHTML=email;
        document.getElementById("usr1").value=email;
        if(document.getElementById("rgstr")!= null){
            document.getElementById("rgstr").style.display="none";
            document.getElementById("rgstr1").style.display="none";
            document.getElementById("sout1").style.display="block";
        };
        document.getElementById("log1").style.display="none";
        y.style.display="none";
        x.style.display="none";
        alert("aaa");
        }
        if(document.getElementById("rgstr")!= null){
            document.getElementById("rgstr").style.display="none";
            document.getElementById("rgstr1").style.display="none";

        };

        li.style.display="block";
        w.style.display="none";
        z.style.display="block";


    }
    else{

        document.getElementById("usr").innerHTML="logged out";
        document.getElementById("sout1").style.display="none";
        z.style.display="none";
        w.style.display="block";
        x.style.display = "block";
        y.style.display="block";
        li.style.display="none";
    }
});
function tst(){
    return("hahaha");
}

