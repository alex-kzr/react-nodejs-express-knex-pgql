const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res){
    db.select().from('todo').then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
    });
});

router.post('/', function(req, res){
    db.insert(req.body).returning('*').into('todo').then(function(data){
        res.send(data);
    });
    //res.send('hello');
});

module.exports = router;