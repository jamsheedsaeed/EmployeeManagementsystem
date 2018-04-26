const exprss = require('express');
const Notification = require('../models/notification.js');
var app = exprss();
var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

exports.addnotification= function(req, res){
    let newNotification = new Notification({

        title: req.body.mytitle,
        description:req.body.field7,
        date:req.body.myDate
      
    });
    newNotification.save((err, Notification)=>{
        if(err){
            res.json({msg: 'Failed to add the User'});
        }
        else{
       
            res.render("notification");
      
         
            
        }
    });
}



exports.getAll = function (req, res) {
    Notification
        .find({})
        .exec(function (error, Notification) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(Notification);
            }
        })
}


 exports.delete = function(req, res, next){
    Notification.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
           res.json(result);
        }
    });
 }


 exports.edit=function(req,res){
    if(req.params.id==undefined){
      res.status(404).send({
        message:'one or more perameters missing'
      });
    }else{
     Notification.findOne({_id:req.params.id}).exec(function(error,Notification){
      //  console.log(Employee);
    //   Employee.username=req.body.username?req.body.username:Events.title;
    //   Employee.subtitle=req.body.subtitle?req.body.subtitle:Events.subtitle;
    //   Employee.description=req.body.description?req.body.description:Events.description;
    //   Employee.imageurl=req.body.imageurl?req.body.imageurl:Events.imageurl;
    //   Employee.date=req.body.date?req.body.date:Events.date;      
      Notification.save(function(error,Notification){
          if(error){
            res.status('500').send({message:'error found'})
          }else{
            res.status('202').send({message:'updated'})
          }
        });
      })
   }
  }


  
