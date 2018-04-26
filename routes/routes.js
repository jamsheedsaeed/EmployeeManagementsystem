var express = require("express"),
app = express();
var multer = require('multer'); 
var debug = require('debug')('05-express-first-app:server');
var path = __dirname + '/views/';

mongoose = require('mongoose'),
passport = require("passport"),

LocalStrategy = require("passport-local");
var router = express.Router();
var http = require('http');
bodyParser = require("body-parser");
var mongodb = require("mongodb");

passportLocalMongoose = require("passport-local-mongoose");
var dbHost = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";
var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";
//DB Object
var dbObject;

//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient;


MongoClient.connect(dbHost, function(err, db){
  if ( err ) throw err;
  dbObject = db;
  
});
	

module.exports = function(app) {

  app.use(express.static('public'));
  app.use('/public', express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(require("express-session")({
  secret: "wah wah wah",
  resave: false,
  saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());


///////---------------------- FrontHand Routes -------------------------------------



  app.get('/', function (req, res) {
    res.render('index');
    });
    app.get('/news', function (req, res) {
      res.render('news');
      });

      

      app.get('/newstable', function (req, res) {
        res.render('newstable');
        });


    app.get('/secret',  function (req, res) {
    res.render('secret');
    });
   
  app.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });
  
  app.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });
  
    //login logic
    //middleware
    /*app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/" 
    }), function(req, res) {
    
    });*/
    
    app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/");
    });
    app.get("/about",function(req,res){
      res.render("about");
    });
    app.get("/events",function(req,res){
      res.render("events");
    });
    app.get("/viewemp",function(req,res){
      res.render("viewemp");
    });
    app.get("/event",function(req,res){
      res.render("viewevent");
    });

   

    app.get("/notification",function(req,res){
      res.render("notification");
    });



    app.get("/nextregister",function(req,res){
      res.render("nextregister");
    });
    /*
    app.get("/deleteemp" , function(req,res){
      res.render("deleteemp")
    });
    */
    app.get("/register",function(req,res){
      res.render("register");
    });
/*
    function isLoggedIn(req,res,next) {
      if(req.isAuthenticated()){
          return next();
      }
      res.redirect("/login");
    }*/
    //--------------------------------------------------------------------------------------------------

    //----------------------------Backand  routes for Employee------------------------------------------
    var employee = require('../api/employee.js');
    app.post('/empregister', employee.empregister);
    app.get('/employee', employee.getAll);
     app.delete('/employee/:id', employee.delete);
     app.post('/editemployee',employee.edit);
    //app.delete('/tasks/:id',employee.delete)



    //---------------------------Defining Routes For Admin-----------------------------------------------
    var user = require('../api/user.js');
    app.post('/login', user.login);
    app.post('/adminregister', user.adminregister);


    //---------------------------Defining Routes For Events-----------------------------------------------
     var events = require('../api/events.js');
     app.post('/eventadd', events.eventadd);
    // app.get('/viewevent', events.getAll);
    // app.delete('/eventdelete/:id', events.delete);

    
    // var eventss = require('../api/eventss.js');
    // app.post('/eventadd', eventss.eventadd);
    // app.get('/viewevent', eventss.getAll);
    // app.delete('/eventdelete/:id', events.delete);

 //---------------------------Defining Routes For News-----------------------------------------------
 var News = require('../api/news.js');
 app.post('/addnews', News.addnews);
 app.get('/viewnews', News.getAll);
 app.delete('/deletenews/:id', News.delete);

  
 //---------------------------Defining Routes For Leave-----------------------------------------------
 var leave = require('../api/leave.js');
 app.post('/applyleave',leave.leaveadd );




 //---------------------Defining Routes for Notifications-------------------------------------------
 var notification = require('../api/notification.js');
 app.post('/addnotification',notification.addnotification);


   
    
   
    app.use("*",function(req,res){
      res.sendFile(path + "404.html");
    });





} ;




  
   