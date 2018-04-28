var mongoose = require('mongoose');


var NewsSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    description:String,
    date:String,
    imgurl:String
});
const News = module.exports = mongoose.model('NewsSchema', NewsSchema);
