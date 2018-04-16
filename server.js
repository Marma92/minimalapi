var express     = require('express');
var cors 	= require('cors');
var app         = express();
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 3000;
var morgan      = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


// routes ======================================================================
require('./routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
