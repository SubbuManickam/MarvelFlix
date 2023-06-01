const router = require("express").Router();
const Movie = require("../models/Movies");
const verify = require("../verify");

//Create Movie
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newMovie = new Movie(req, body);
        
        try {
            const addedMovie = await newMovie.save();
            return res.status(200).json(addedMovie);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Forbidden access!");
    }
});

module.exports = router;