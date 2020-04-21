var express = require('express');
var router = express.Router();
var mysqlConnection = require('./mysqlConnection.js');


router.get('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   result=mysqlConnection.select("SELECT * FROM train");
   res.send(result);
});
router.post('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  //console.log(req.body)
    result=mysqlConnection.insert("INSERT INTO `train` (`id`, `name`, `noOfBookings`, `state`) VALUES (NULL, '"+req.body.name+"', '"+req.body.noOfBookings+"', 'RUNNING');");
    res.send(result);
});

//export this router to use in our index.js
module.exports = router;
