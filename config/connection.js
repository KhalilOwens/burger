var mysql = require("mysql");
var connection;



if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({ 
    
        host: 'ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',  
        user: 'tcs7ossm0u4y94g4',
        password: 'zfwde31bfaqxg85g',
        port: 3306,
        database: 'ehyr5himnuws2ajm'
    } );
    


    connection.connect(function(err) {
        if (err) {
          console.error("error connecting: " + err);
          return;
        }
        console.log("connected as id " + connection);
      });


};


module.exports = connection;