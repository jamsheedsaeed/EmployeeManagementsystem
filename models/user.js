/*var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//var passportLocalMongoose = require("passport-local-mongoose");

var AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

//AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("newAdmin", AdminSchema);*/

var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');

var AdminSchema = new mongoose.Schema({
    username:{type: String, unique: true, required: true},
    password: { type: String, required: true },

    // role:{type:String,default:'student',enum:['student','admin']},
    // department:{type:String,required:true},
    // semester:{type:String,required:true},
    // degree:{type:String,required:true},

});

const User = module.exports = mongoose.model('newAdmin',AdminSchema);


