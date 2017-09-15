var mongoose=require('mongoose');

var sc_book=mongoose.Schema({
    title:'string',
    content:'string',
   // subjects:[Schema.ObjectId],
    creatorUser:{type:mongoose.Schema.ObjectId, ref:'user'}
});
//book collection
module.exports=mongoose.model('book',sc_book);