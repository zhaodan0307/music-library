//use express
var express = require('express');

//instantiate an express router to parse and direct url requests
var router = express.Router();

//add model ref

const Artist = require('../models/artist')


// GET: /artists => show index view
router.get('/', (req, res) => {
    // use Artist model to fetch all documents from artists collection in mongodb
    //得到model的数据,两种可能性，一种是error，一种是得到artists
    Artist.find((err, artists) => {
        //如果数据有error，打出error并且传到前端
        if (err) {
            console.log(err)
            res.end(err)
        }
        //否则
        else {

            console.log(artists)
            res.render('artists/index', {
                //这里是pass list of artists data
                artists: artists,
                title: 'Artists'

            })
        }
    })
})




// GET: /artists/create => show new artist form

router.get('/create',(req,res) => {
  //render ,passing a json as option
    res.render('artists/create',{
        title: 'Add a new Artist'
    })
})



// POST: /artists/create => process form submission & save new Artist document
//从那个表格得到的 表格是/create
router.post('/create', (req, res) => {
    // use Mongoose model to create a new Artist document
    Artist.create({
        //read the input from our form called name
        name: req.body.name
    }, (err, newArtist) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else { // save successful; update artists list view
            //go back to main artists page
            res.redirect('/artists')
        }
    })
})


//make public

module.exports = router;