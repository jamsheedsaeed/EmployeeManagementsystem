var mongoose = require('mongoose');


var eventSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    description:String,
    Date:String,
    imgurl:String
});
const Events = module.exports = mongoose.model('Eventschema', eventSchema);
