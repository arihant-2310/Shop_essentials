 /* // Your web app's Firebase configuration
  var firebase = require('firebase-admin');
  import * as admin from 'firebase-admin';
const fs = require('fs') ;
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) ;*/

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
    alert("signed in "+email.value);
    console.log(promise);
   // window.location.href = '\\';
}
function signout(){
    auth.signOut();
    alert("signed out");
}
auth.onAuthStateChanged(function(user){
    if(user){
        var email=user.email;
        var x = document.getElementById("rgstr");
        var y= document.getElementById("log");
        var z= document.getElementById("sout");
        x.style.display = "none";
        y.style.display="none";
        z.style.display="block";
        document.getElementById("usr").innerHTML=email;
        document.getElementById("usr1").value=email;

    }
    else{
        document.getElementById("usr").innerHTML="logged out";
        var x = document.getElementById("rgstr");
        var y= document.getElementById("log");
        var z= document.getElementById("sout");
        x.style.display = "block";
        y.style.display="block";
        z.style.display="none";
    }
});
function tst(){
    return("hahaha");
}
