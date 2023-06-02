const router = require("express").Router();
const Movie = require("../models/Movies");
const verify = require("../verify");

//Create Movie
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newMovie = new Movie(req, body);
        
        try {
            const addedMovie = await newMovie.save();
            return res.status(201).json(addedMovie);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Forbidden access!");
    }
});

//Get Movie
router.get("/getMovie/:id", verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        return res.status(200).json(movie);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Get Featured Movie
router.get("/featured", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if(type === 'series') {
            movie = await Movie.aggregate([
                { $match: {isSeries: true} },
                { $sample: {size: 1} },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: {isSeries: false} },
                { $sample: {size: 1} },
            ]);
        }
        return res.status(200).json(movie);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;