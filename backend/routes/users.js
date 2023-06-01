const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verify");

//Update User
router.put("/:id", verify, async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});

            const {password, ...details} = updateUser._doc;
            return res.status(200).json(details);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Forbidden access!");
    }
});

//Delete User
router.delete("/:id", verify, async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("User Deleted Successfully!");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Forbidden access!");
    }
});

//Get User
router.get("/getUser/:id", verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const {password, ...details} = user._doc;
        return res.status(200).json(details);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Get All Users
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if(req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({_id: -1}).limit(10) : await User.find();
            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Forbidden access!");
    }
});


module.exports = router;