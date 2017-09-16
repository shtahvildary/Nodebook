var express = require('express');
var router = express.Router();

var book_sc = require('../schema/SCbook');

router.post('/add', function (req, res) {
    console.log('Now U can create a new book...');

    var book = new book_sc(req.body.data);
    book.save(function (err, result) {
        if (!err) {
            res.status(200).json({
                book: result
            })
        } else {
            res.status(500).json({
                error: err
            })
        }
    });
})
//show all books
router.post('/get/all', function (req, res) {
    book_sc.find({}, function (err, result) {
        if (!err) {

            res.status(200).json({
                books: result
            });
        } else {
            res.status(500).json({
                error: err
            });
        }
    })
    // console.log('request',req);
    // console.log('response',res);
})

//show selected book (by ID)
router.post('/get', function (req, res) {
    book_sc.findOne({
        _id: req.body.data.id
    }, function (err, result) {
        if (!err) {
            res.status(200).json({
                book: result
            });
        } else {
            res.status(500).json({
                error: err
            });
        }
    })
})

module.exports = router;