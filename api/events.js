var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path');
const Event = require('../models/events.js');
 
var app = express();
/*var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname()
    }
  })
  var upload = multer({ storage: storage })
*/
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads')
    },
    filename: function (req, file, callback) {
      callback(null, Date.now() + file.originalname)
    }
  })






exports.eventadd = function(req,res){
    var upload = multer({ storage: storage }).single('userFile')
    upload(req, res, function (err) {
        console.log("file Name",req.file)
        console.log("Request: ",req.body);
        console.log(req.body);
        var params = req.body;

        let newEvent = new Event({
            title   : req.body.mytitle,
            subtitle: req.body.mysubtitle,
            description: req.body.mydescription,
            date: req.body.myDate,
        imgurl:req.file.path
                
    });
    newEvent.save((err, Event)=>{
        if(err){
            res.json({msg: 'Failed to add the notifications'});
        }
        else{
         //   res.json({msg: 'notifications is added successfully'});
         
         res.render("events",Event);
        }
    });
    
    })
}

  
  

  exports.getAll = function (req, res) {
    Event
        .find({})
        .exec(function (error, events) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(events);
            }
        })
}

exports.delete = function(req, res, next){
    Event.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
}



exports.editEvent = function(req,res){
  
    Event.findOne({_id:req.body.id}).exec(function(err,Event){
        if(err){
            console.log(Event);
            res.status('500').send({message:'error'})
           
        }
        else{
            console.log(Event);
            Event.title=req.body.title;
            Event.subtitle=req.body.subtitle;
            Event.description=req.body.description;
            Event.date=req.body.date;
            Event.save(function(err,result){
                if(err){
                    res.status('500').send({message:'error found'})
                }
                else{
          
                    console.log(result);
                    res.render("viewevents");
                }
            });
        }
    })
  }