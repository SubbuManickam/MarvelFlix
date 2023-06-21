const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database connection successful!")).catch(err => console.log(err));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Access-Control-Allow-Headers');
    next();
  });

app.use(express.json());
 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8080, () => {
    console.log("Backend started!");
});