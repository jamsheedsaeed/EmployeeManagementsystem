var mongoose = require('mongoose');
var leaveSchema = new mongoose.Schema({
    //leave:String
    name:String,
    designation:String,
    leavetype:String,
    fromdate:String,
    todate:String,
    nodays:String,
    reason:String



});
const leave = module.exports = mongoose.model('LeaveSchema', leaveSchema);
