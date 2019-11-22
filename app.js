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
require('./seeds/userSeed');


let test = require("./models/Workout").collection
let test2 = require("./models/Workout"); 
console.log("findme");
// console.log(
//   test.findOne({ name: "Introduction to Strength" }, function(err, obj) { console.log(obj);}) // returns undefined, then returns console.log at very end... so not quite
// ); 
// console.log("end");
// console.log(
//   test2.findOne({ name: "Introduction to Strength" }, function(err, obj) { console.log(obj);}) // returns undefined, then returns console.log at very end... so not quite
// ); 

// ####################### FOLLOWING WORKS FK YEAH.

// console.log("findme");
// let str = test2.find({name: "Introduction to Strength"}, function(err, data) {
//     if(err) {
//         console.log(err);
//         return
//     }
//     if (data.length == 0) {
//         console.log("No record found");
//         return
//     }
//     return data
// }); 
// console.log(str);
// console.log("end"); // Possibly? 

// const monFind = (name) => (
//     test2.find({ name }, function(err, data) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (data.length == 0) {
//         console.log("No record found");
//         return;
//       }
//       return data;
//     })
// );
// console.log(monFind("Introduction to Cardio"));
// console.log("end")


// https://stackoverflow.com/questions/48255659/node-js-mongoose-find

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/workouts", workouts);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));