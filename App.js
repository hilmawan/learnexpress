var express = require('express');
var bParse = require('body-parser');
var path = require('path');

var app = express();

/*
var logging = function (req, res, next) {
	console.log('there\'s log activity, dude!');
	next;
}

app.use(logging);
*/

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/template'));

// body parse middleware
app.use(bParse.json());
app.use(bParse.urlencoded({extended : false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

var list = [
	{
		firstName: 'Hilmawan',
		lastName: 'Yusuf R'
	},
	{
		firstName: 'Eki',
		lastName: 'Kania Dewi'
	},
	{
		firstName: 'i hope u both will be together',
		lastName: 'aamiin'
	}
]

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Welcome Express Hey',
		subtitle: 'this is my first EJS. Welcome!',
		ask: 'anything i can help for :',
		list: list
	});
});

app.post('/user/act', function(req, res){
	var newuser = {
		name: req.body.name,
		addr: req.body.addr
	}
	console.log(newuser);
});

app.listen(3000, function() {
	console.log('Hey this port 3000...');
});