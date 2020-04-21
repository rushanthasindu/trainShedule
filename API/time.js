var express = require('express');
var router = express.Router();
var mysqlConnection = require('./mysqlConnection.js');


router.get('/:id', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   // console.log(req.params.id);
   result=mysqlConnection.select("SELECT * FROM timeslots WHERE `shedule`="+req.params.id );
   res.send(result);
});
router.post('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//  console.log(req.body);
    result=mysqlConnection.insert("INSERT INTO `timeslots`(`id`, `shedule`, `station`, `arrival`, `depature`) VALUES (NULL, '"+req.body.shedule+"', '"+req.body.station+"', '"+req.body.arrival+"', '"+req.body.depature+"')");
    res.send(result);
});
 
//export this router to use in our index.js
module.exports = router;
