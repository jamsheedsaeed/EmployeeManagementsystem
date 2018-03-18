const exprss = require('express');
const News = require('../models/news.js');
var app = exprss();
//var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

//function used to post some data in database

exports.addnews=function(req,res){
  let newNews = new News({

    title: req.body.field1,
    subtitle:req.body.field2,
    description: req.body.field5,
    Date:req.body.field6,
 
});
newNews.save((err, News)=>{
    if(err){
        res.json({msg: 'Failed to add News'});
    }
    else{
       res.render("news");
        
    }
});
   

  
  }

  exports.getAll = function (req, res) {
    News
        .find({})
        .exec(function (error, News) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(News);
            }
        })
}

exports.delete = function(req, res, next){
    News.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
}