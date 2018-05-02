var mongoose = require('mongoose');
var leaveSchema = new mongoose.Schema({
    leave:String
});
const leave = module.exports = mongoose.model('LeaveSchema', leaveSchema);
