var express = require('express');
var bodyParser= require('body-parser');
var low = require('lowdb');
var dates = require('./models/date.js')

var app = express();
var db = low('db.json');

db.defaults({ names: [] }).value();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(req, res) {
  var nameValues = db.get('names')
    .map('name')
    .value();

  res.render('index', { names: nameValues, dates: dates()});
})

app.post('/names', function(req, res) {

  console.log(req.body)

  db.get('names')
    .push({
      name: req.body.name
    })
    .value();

  res.redirect('/');
})

app.listen(3000, function() {
  console.log('listening on 3000');
})
