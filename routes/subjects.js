var express = require('express');
var router = express.Router();

var subject_sc = require('../schema/SCsubject');

//add a subject to a book
router.post('/add', function (req, res) {
    if (req.body.data.parent) {
        subject_sc.findOne({
            _id: req.body.data.parent

        }, function (err, doc) {
            if (!err) {
                var parents = doc.parent;
                parents.push(req.body.data.parent);
                req.body.data.parent = parents;

                subject_sc.find({
                    parent: req.body.data.parent
                }, function (err, result) {
                    if (!err) {
                        req.body.data.priority = result.length + 1
                        var subject = new subject_sc(req.body.data);
                        subject.save(function (err, result) {
                            if (!err) {
                                res.status(200).json({
                                    subject: result
                                })
                            } else {
                                res.status(500).json({
                                    error: err
                                })
                            }
                        })
                    } else {
                        res.status(500).json({
                            error: err
                        })
                    }
                })


            } else {
                res.status(500).json({
                    error: err
                })

            }
        })


    } else {
        subject.save(function (err, result) {
            if (!err) {
                res.status(200).json({
                    subject: result
                })
            } else {
                res.status(500).json({
                    error: err
                })
            }
        })

    }

})


//select all subjects of a book
router.post('/get/all', function (req, res) {
    subject_sc.find({}, function (err, result) {
        if (!err) {
            res.status(200).json({
                subjects: result
            });
        } else {
            res.status(500).json({
                error: err
            })
        }
    })
})

//
router.post('/get', function (req, res) {
    subject_sc.find({
        $or: [{
                _id: req.body.data.id
            },
            {
                parent: req.body.data.id
            }
        ]
    }, function (err, result) {
        if (!err) {
            res.status(500).json({
                subjects: result
            })
        } else {
            res.status(200).json({
                error: err
            })

        }
    })
})
module.exports = router;