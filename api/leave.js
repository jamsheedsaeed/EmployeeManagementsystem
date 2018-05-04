const exprss = require('express');
const leave = require('../models/leave.js');
var app = exprss();
//var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

//function used to post some data in database

exports.leaveadd=function(req,res){
  let newleave = new leave({
     //leave :req.body.leave

     name:req.body.name,
     designation:req.body.designation,
     leavetype:req.body.leavetype,
     fromdate:req.body.fromdate,
     todate:req.body.todate,
     nodays:req.body.nodays,
     reason:req.body.reason

    
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
    leave
        .find({})
        .exec(function (error, leave) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(leave);
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