const mongoose = require("mongoose");
// const axios = require("axios");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const Workout = require("../models/Workout");
const Exercise = require("../models/Exercise");

Workout.collection.drop();

let exercises = Exercise.collection

Workout.insertMany([
  {
    name: "Introduction to Cardio", 
    type: "cardio",
    intensity: 1,
    description: "An introduction to cardio"
  },
  {
    name: "Introduction to Strength", 
    type: "strength",
    intensity: 1,
    description: "An introduction to cardio",
  },
  {
    name: "Introduction to Flexibility", 
    type: "flexibility",
    intensity: 1,
    description: "An introduction to cardio",
  },
]); // Creates a collection of workouts with the following

Workout.collection.findOneAndUpdate(
  {name: "Introduction to Cardio"},
  { $push: {exercises: { 
    $each: [
      exercises.findOne({name: "Stretch!"  }),
      exercises.findOne({name: "Walk-outs"  }),
      exercises.findOne({name: "Arm circles" }) 
    ]
  } } }
);

Workout.collection.findOneAndUpdate(
  {name: "Introduction to Strength"},
  { $push: {exercises: { 
    $each: [
      exercises.findOne({name: "Stretch!"  }),
      exercises.findOne({name: "Lunge twist"  }),
      exercises.findOne({name: "Squats" }) 
    ]
  } } }
);

Workout.collection.findOneAndUpdate(
  {name: "Introduction to Flexibility"},
  { $push: {exercises: { 
    $each: [
      exercises.findOne({name: "Stretch!"  }),
      exercises.findOne({name: "Hip circles"  }),
      exercises.findOne({name: "Scorpion" }) 
    ]
  } } }
);
