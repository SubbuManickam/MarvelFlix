const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    imgTitle: {type: String},
    imgThumb: {type: String},
    trailer: {type: String},
    video: {type: String},
    year: {type: String},
    age: {type: Number},
    phase: {type: String},
    isSeries: {type: Boolean, default: false},
}, {
    timestamps: true
});

module.exports = mongoose.model("Movies", MoviesSchema);