var mongoose = require('mongoose');
var leaveSchema = new mongoose.Schema({
    Leave:String
});
const leave = module.exports = mongoose.model('LeaveSchema', leaveSchema);
