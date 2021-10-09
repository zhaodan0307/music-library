//use express
var express = require('express');

//instantiate an express router to parse and direct url requests
var router = express.Router();

//Get : /artists show index view
router.get('/',(req, res) =>{
    res.render('artists/index', );
})


//make public

module.exports = router;