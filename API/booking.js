var express = require('express');
var router = express.Router();
var mysqlConnection = require('./mysqlConnection.js');
var sendMail = require('./sendMail.js');

router.get('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   result=mysqlConnection.select("SELECT * FROM booking");
   res.send(result);
});
router.post('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
 console.log("INSERT INTO `booking`(`id`, `shedule`, `date`, `noOfSeats`, `email`)VALUES (NULL, '"+req.body.shedule+"', '"+req.body.date+"', '"+req.body.noOfSeats+"', '"+req.body.email+"');")
  result=mysqlConnection.insert("INSERT INTO `booking`(`id`, `shedule`, `date`, `noOfSeats`, `email`,`nic`)VALUES (NULL, '"+req.body.shedule+"', '"+req.body.date+"', '"+req.body.noOfSeats+"', '"+req.body.email+"', '"+req.body.nic+"');");
    res.send(result); 
// sendMail.seatBookings();
});

//export this router to use in our index.js
module.exports = router;
