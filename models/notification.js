var mongoose = require('mongoose');


var notificationSchema = new mongoose.Schema({
    title:String,
    description:String,
    date:String,
});
const notification = module.exports = mongoose.model('Notifications', notificationSchema);
