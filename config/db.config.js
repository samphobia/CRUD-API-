const mysql = require('mysql2');

const dbConn = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'AsfastasaHumanhurricane01!',
      database: 'blackhole'
})

dbConn.connect(function(error){
   if(error) throw error;
   console.log('Connected to database');
})

module.exports = dbConn;