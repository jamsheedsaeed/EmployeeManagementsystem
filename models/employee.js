var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var passportLocalMongoose = require("passport-local-mongoose");

var EmployeeSchema = new mongoose.Schema({
   // _id : {type:Number},
   // title:String, //Employee Type means teacher or other staff
   // name: String,
   // fname:String,
   // password: String,
  //  birth_date:Date,
   
    /*gender : String,
    Blood : String,
    Religion : String ,
    Status: String,
    Salary:Number,
    
    Nationality: String,
    Email : String,*/
  //  cnic:{ type: Number, min: 18, max: 65, required: true },
    /*Domicile : String ,
   interest:String,
   Address : String,
   //Contact_num : { type: Number, min: 18, max: 65, required: true } ,
    Qualification : String ,
    Department : String, */
   // H_date:Date
   employeename:String,
   fname:String,
   Email:String,
   phone:String,
   dob:String,
   address:String,
   username:String,
   Password:String,
   department:String,
   startdate:String,
   salary:String,
   EmgFullName:String,
   Relationship:String,
   EPhone:Number
});
EmployeeSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("employee", EmployeeSchema);


