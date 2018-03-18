var mongoose = require('mongoose');


var NewsSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    description:String,
    Date:String
});
const News = module.exports = mongoose.model('NewsSchema', NewsSchema);
