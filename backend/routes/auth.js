const router = require("express").Router();
const User = require("../models/User");

//Register new User
router.post("/register", async (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;