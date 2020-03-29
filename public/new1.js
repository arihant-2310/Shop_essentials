
var admin = require("firebase-admin");

var serviceAccount = require("./firelogin13-firebase-adminsdk-xfg5q-a165e71a9a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firelogin13.firebaseio.com"
  serviceAccount:"./firelogin13-firebase-adminsdk-xfg5q-a165e71a9a.json"
});

var ref=firebase.database().ref('node-client');
