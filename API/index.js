var express = require('Express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var train = require('./train.js');
var shedule = require('./shedule.js');
var time = require('./time.js');
var booking = require('./booking.js');
var user = require('./user.js');


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
app.use(upload.array()); 

//both index.js and things.js should be in same directory
app.use('/train', train);
app.use('/shedule', shedule);
app.use('/time', time);
app.use('/booking', booking);
app.use('/user', user);

app.listen(3000);