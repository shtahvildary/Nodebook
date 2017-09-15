var mongoose=require('mongoose');

var sc_subject=mongoose.Schema({
    title:'string',
    content:'string',
    bookId:Schema.ObjectId,
    parent:Schema.ObjectId,
    creatorUser:Schema.ObjectId
});
//subject collection
module.exports=mongoose.model('subject',sc_subject);