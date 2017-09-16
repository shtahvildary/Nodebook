var mongoose = require('mongoose');

var sc_subject = mongoose.Schema({
    title: 'string',
    content: 'string',
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    },
    parent: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'subject'
    }],
    creatorUser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    priority:'number'
});
//subject collection
module.exports = mongoose.model('subject', sc_subject);