const exprss = require('express');
const News = require('../models/news.js');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path');
var app = exprss();
//var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

//function used to post some data in database

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads')
    },
    filename: function (req, file, callback) {
      callback(null, Date.now() + file.originalname)
    }
  })


  exports.addnews = function(req,res){
    var upload = multer({ storage: storage }).single('userFile')
    upload(req, res, function (err) {

    
        console.log("file Name",req.file)
        console.log("Request: ",req.body);
        console.log(req.body);
        var params = req.body;

        let newNews = new News({
            title   : req.body.mytitle,
            subtitle: req.body.mysubtitle,
            description: req.body.mydescription,
            date: req.body.mdate,
        imgurl:req.file.path
      
        
        
    });
        
    newNews.save((err, News)=>{
        if(err){
            res.json({msg: 'Failed to add the notifications'});
        }
        else{
         //   res.json({msg: 'notifications is added successfully'});
         res.render("news",News);
        }
    });
    

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