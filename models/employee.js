var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var passportLocalMongoose = require("passport-local-mongoose");

var EmployeeSchema = new mongoose.Schema({

   employeename:String,
   fname:String,
   Email:String,
   phone:String,
   gender:String,
   dob:String,
   address:String,
   title:String,
   department:String,
   startdate:String,
   salary:String,
   payscale:String,
   username:String,
   Password:String,
   
   EmgFullName:String,
   Relationship:String,
   EPhone:Number


   
});
EmployeeSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("employee", EmployeeSchema);


