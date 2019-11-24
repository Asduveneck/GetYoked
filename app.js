const mongoose = require('mongoose');
const express = require("express");
const path = require('path');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const workouts = require("./routes/api/workouts");
const bodyParser = require('body-parser');


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// SEEDS 
// // require('./seeds/exerciseSeed');
// require('./seeds/workoutSeed');
// require('./seeds/userSeed');
// require('./seeds/seeding_all');

console.log("");
console.log("findme back in app.js . userSeed thread stack has ended in terms of stack...");
console.log("");


// https://stackoverflow.com/questions/48255659/node-js-mongoose-find

// heroku prep

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/workouts", workouts);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(express.static(__dirname + "/public"));