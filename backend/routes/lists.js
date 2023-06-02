const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verify");

//Create List
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newList = new List(req, body);
        
        try {
            const addedList = await newList.save();
            return res.status(201).json(addedList);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Forbidden access!");
    }
});

//Get List
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const phaseQuery = req.query.phase;
    let list = [];
    try {
        if(typeQuery) {
            if(phaseQuery) {
                list = await List.aggregate([
                    { $sample: {size: 10} },
                    { $match: {type: typeQuery, phase: phaseQuery} }
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: {size: 10} },
                    { $match: {type: typeQuery} }
                ]);
            }
        } else {
            list = await List.aggregate([
                { $sample: {size: 10} }
            ]);
        }
        return res.status(200).json(list);
        
    } catch (err) {
        return res.status(500).json(err);
    }
})
module.exports = router;