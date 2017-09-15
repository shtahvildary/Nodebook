var express = require('express');
var router = express.Router();

var book_sc = require('../schema/SCbook');

router.post('/add',function(req,res){
    console.log('Now U can create a new book...');
    
    var book=new book_sc(req.body.data);
    book.save(function(err,resault){
        if(!err){
            res.status(200).json({
                book:resault
            })
        }
        else{
            res.status(500).json({
                error:err
            })
        }
    });
})
module.exports=router;