
//import all required dependencies 
const express = require('express');
const bodyParser = require('body-parser'); //used to pass json data
const mysql = require('mysql');
const expressejslayouts = require('express-ejs-layouts')
const session = require('express-session')
const path = require('path')
const flash =require('express-flash')
const  expressValidator = require('express-validator');
const {v4:uuidv4} = require('uuid')

const app = express();

//set the port number for your application to run
const PORT = process.env.PORT || 5000;

//parsing middleware 
// parse app/ x-www-form-urlencoded
//parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//using static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/bootstrap',express.static(__dirname + 'public/bootstrap'));

app.use(expressejslayouts)
app.set('layout','./layouts/main-layout')
//Template engine
app.set('views', './views');
app.set('view engine','ejs');

app.use(session({ 
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
 
app.use(flash());
app.use(expressValidator());
//routing
const routes = require('./server/routes/route');
app.use('/',routes);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})  

module.exports = app;