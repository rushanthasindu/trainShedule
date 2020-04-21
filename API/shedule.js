var express = require('express');
var router = express.Router();
var mysqlConnection = require('./mysqlConnection.js');


router.get('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   result=mysqlConnection.select("SELECT * FROM shedule");
   res.send(result);
});

router.post('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  console.log(req.body);
    result=mysqlConnection.insert("INSERT INTO `shedule`(`id`, `train`, `day`, `start`, `end`, `type`) VALUES (NULL, '"+req.body.train+"', '"+req.body.day+"', '"+req.body.start+"', '"+req.body.end+"', '"+req.body.type +"')");
    res.send(result);
});



router.get('/search', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
   
   
   result=mysqlConnection.select("SELECT `train`.`name`,`timeslots`.`arrival`,`timeslots`.`depature`,`shedule`.`type`,`shedule`.`id`  FROM `timeslots`,`train`,`shedule` WHERE `timeslots`.`shedule`=`shedule`.`id` AND `shedule`.`train`=`train`.`id` AND `timeslots`.`station`='POLGAHAWELA'");
   res.send(result);

});





 
//export this router to use in our index.js
module.exports = router;
