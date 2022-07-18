const mysql = require('mysql2');

const dbConn = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'blackhole'
})

dbConn.connect(function(error){
   if(error) throw error;
   console.log('Connected to database');
})

module.exports = dbConn;