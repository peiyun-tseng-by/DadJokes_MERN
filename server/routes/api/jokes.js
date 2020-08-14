const express = require('express');
const router = express.Router();

//Joke Model
const Joke = require('../../models/Jokes');

//@route    Get api/jokes
//@desc     Get all jokes
//@access   Public
router.get('/', (req, res) => {
    console.log('calling get jokes api');
    Joke
        .find()
        .sort({ date: -1 })
        .then(jokes => {
            console.log(jokes);
            return res.status(200).json(jokes);
        })
        .catch(err => {console.log(err)});
});

//@route    Post api/jokes
//@desc     Create a joke
//@access   Public
router.post('/', (req, res) => {
    const newJoke = new Joke({
        joke: req.body.joke
    });

    newJoke.save().then(joke => res.status(200).json(joke))
});

//@route    Delete api/jokes/:id
//@desc     Delete a joke
//@access   Public
router.delete('/:id', (req, res) => {
    Joke.findById(req.params.id)
        .then(joke => joke.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
    });

//@route    Update api/jokes/:id
//@desc     Update a joke
//@access   Public
/* router.patch('/:id', (req, res) => {
    Joke.findById(req.params.id)
}) */
    
module.exports = router;