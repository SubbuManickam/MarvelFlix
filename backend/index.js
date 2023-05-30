const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database connection successful!")).catch(err => console.log(err));

app.use(express.json());
 
app.use("/api/auth", authRoute);

app.listen(8080, () => {
    console.log("Backend started!");
});