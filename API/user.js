var express = require('express');
var router = express.Router();
var mysqlConnection = require('./mysqlConnection.js');


router.get('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   result=mysqlConnection.select("SELECT * FROM user");
   res.send(result);
});
router.post('/', function(req, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  //console.log(req.body)
    result=mysqlConnection.insert("INSERT INTO `user` (`id`, `name`, `userName`, `pass`) VALUES (NULL, '"+req.body.name+"', '"+req.body.userName+"', '"+req.body.pass+"');");
    res.send(result);
});

//export this router to use in our index.js
module.exports = router;
