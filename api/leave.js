const exprss = require('express');
const leave = require('../models/leave.js');
var app = exprss();
//var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

//function used to post some data in database

exports.leaveadd=function(req,res){
  let newleave = new leave({
    
});
newleave.save((err, leave)=>{
    if(err){
        res.json({msg: 'Failed to add leave'});
    }
    else{
       res.send("sucess");
        
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