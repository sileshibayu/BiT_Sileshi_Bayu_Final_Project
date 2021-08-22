

//database connection pool
const mysql = require('mysql');
const path = require('path')
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const connection = mysql.createConnection({
    connectionLimit :1000,
    host            :process.env.DB_HOST,
    user            :process.env.DB_USER,
    password        :process.env.DB_PASS,
    database        :process.env.DB_NAME
});
connection.connect((err)=>{
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error while connecting with database");
  }
  });

  module.exports = connection;