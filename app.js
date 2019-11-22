const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const workouts = require("./routes/api/workouts");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// SEEDS 
// require('./seeds/exerciseSeed');
// require('./seeds/workoutSeed');
// require('./seeds/userSeed');

// heroku prep

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/workouts", workouts);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(express.static(__dirname + "/public"));