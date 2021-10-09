var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //loading a view
  //create a variable named title and assigning it a value
  res.render('index', { title: 'Node Tunes' });
});

router.get('/about',(req, res) =>{
  res.render('about', {
    title: 'About this Site',
    content: 'This is some info about our music library'
  });
})

//when its public, we will see controllers/index.js
//export the router ，类似java public class，所以大家都能access一样
module.exports = router;
