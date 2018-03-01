const exprss = require('express');
const Event = require('../models/events.js');
var app = exprss();
//var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

//function used to post some data in database

exports.eventadd=function(req,res){
  let newEvent = new Event({

    title: req.body.mytitle,
    subtitle:req.body.mysubtitle,
    description: req.body.mydescription,
    Date:req.body.mydate,
    imgurl:req.body.myurl
 
});
newEvent.save((err, Event)=>{
    if(err){
        res.json({msg: 'Failed to add Event'});
    }
    else{
       res.render("events");
        
    }
});
   

  
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