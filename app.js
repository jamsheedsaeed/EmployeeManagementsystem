var express = require("express"),
app = express();
var multer = require('multer'); 
var port = process.env.PORT || 3000;
const colors = require('colors');
var debug = require('debug')('05-express-first-app:server');
//var router = express.Router();
var mongodb = require("mongodb");
var cookieParser = require('cookie-parser');
var User = require('./models/user');
var MongoClient = require('mongodb').MongoClient;
mongoose = require('mongoose');
var path = require('path');
//----------------------------- Database Connection -------------------------------------------
var configDB = require('./config/database.js');
var session = require('express-session');

mongoose.connect(configDB.url, { useMongoClient: true, /* other options */ })
require("./routes/routes")(app); 

mongoose.Promise = global.Promise;


mongoose.connection.on( 'connected',function(){
   
    console.log(colors.green('Connected to database  mongodb'));
 });
 
 mongoose.connection.on('error',function(err){
     if(err){
        console.log(colors.red('Error on database connection to mongodb' +err));
     }
 });

//


passport = require("passport"),
Admin = require("./models/user"),
employee = require("./models/employee");
events = require("./models/events");

LocalStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose");
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'layout')));
app.use(express.static(path.join(__dirname,'public')));




app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/secret');
    } else {
        next();
    }    
};
app.use('/uploads', express.static('uploads'));
var debug = require('debug')('05-express-first-app:server');
var http = require('http');

/*
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
*/



app.listen(port, () => console.log(colors.green('Server is live on port : ', port  )));