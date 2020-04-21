var mysql = require('mysql');
var res='';

this.select=function(query)
    {

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'train'
          })          
          connection.connect();   
          connection.query(query, function (err, rows, fields) {
            if (err) throw err
            //console.log( rows);
            res=rows;
          })
        connection.end(); 
        return res;
    } 

    this.insert=function(query)
    {

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'train'
          })
          connection.connect();
          connection.query(query, function (err, rows, fields) {
            if (err) throw err
            //console.log( rows);
            res=rows;
          })
        connection.end(); 
        return res;
    } 
  