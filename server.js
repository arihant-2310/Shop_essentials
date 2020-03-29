var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var port = process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.render('store');
});
app.get('/corona',function(req,res){
	res.render('corona');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});