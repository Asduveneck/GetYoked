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


let test = require("./models/Workout").collection
let test2 = require("./models/Workout"); 
console.log("findme");
console.log(
  test.findOne({ name: "Introduction to Strength" }, function(err, obj) { console.log(obj);}) // returns undefined, then returns console.log at very end... so not quite
); 
console.log("findme");

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/workouts", workouts);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));