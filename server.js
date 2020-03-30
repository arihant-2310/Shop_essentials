var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var port = process.env.PORT || 8000;
//var u = require('./public/reg');


//var userService = require('./public/user_service');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.render('store');
});
app.get('/corona',urlencodedParser, function(req,res){
	res.render('corona');
});

app.get("/register",function(req,res){
	res.render('register');
	//u.signin("aa");
});
app.get("/login",function(req,res){
	res.render('login');
	//u.signin("aa");
});
app.post("/done",urlencodedParser,function(req,res){
	var email=req.body.email;
	var pass=req.body.password;
	res.render('store');
	//const promise=auth.createUserWithEmailAndPassword(email,pass);
		

});
app.post("/buy",urlencodedParser, function(req,res){
	console.log(req.body.creden," purchased for ",(req.body.p1)[1]);
	res.render("store");
})


app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});