const mongoose = require("mongoose");
const axios = require("axios");

const Workout = require('../models/Workout');
Workout.collection.drop();

const Exercise = require("../models/Exercise");

async function exerciseFindOneByName(name) {
  let exercise = await Exercise.findOne({ name}, function(err, data) { // May work?
    if (err) {
      return;
    }
    if (data === null || data.length == 0) {
      return;
    }
    return data;
  })
  return exercise;
} // Works. returns null if I pass in nothing...

async function exerciseArrayResMaker(exercisesArray) {
    if (!Array.isArray(exercisesArray)) {
      return; //stops execution early
    }

    let finalExerciseArr = [];
    // for each name I'll query
    for(let i = 0; i < exercisesArray.length; i++) {
      let exercise = await exerciseFindOneByName(exercisesArray[i]); // Switch to a .then
      if (exercise) {finalExerciseArr.push( exercise) } // For some reason, this isn't nested within an array...
    }

    return finalExerciseArr
};

const workoutCreate = (name, type, intensity, description, exercises = []) => {
  if (exercises.length === 0) {
    Workout.create({ name, type, intensity, description });
  } else {
    const newWorkout = new Workout({ name, type, intensity, description });

    for(let i = 0; i < exercises.length; i++) {
      newWorkout.exercises.push(exercises[i])
    }
    newWorkout.save();
  }
};

async function workoutResHandler (name, type, intensity, description, exercisesArray = []) {

  let screenedExercises = [];

  if (exercisesArray.length !== 0) {
    // If when creating a workout we pass in a string of an exercise...
    if(typeof(exercisesArray) === "string") { 
      screenedExercises.push(exercisesArray) 
    } else if(Array.isArray(exercisesArray)) {
      screenedExercises = exercisesArray
    }
  }

  await exerciseArrayResMaker(screenedExercises)
    .then(exercises => {
      workoutCreate(name, type, intensity, description, exercises)
    })
    .catch(err => {
      console.log("Something went wrong in Workout Seeds");
      console.log(err); // SEE IF WE GET THIS STILL
    })
} 

workoutResHandler(
"Introduction to Cardio",
 "cardio",
 1,
 "An introduction to cardio",
 ["Stretch!", "Walk-outs", "Arm circles"]
);

workoutResHandler(
"Introduction to Strength",
 "strength",
 1,
 "An introduction to strength",
 ["Stretch!", "Lunge twist", "Squats"]
);

workoutResHandler(
"Introduction to Flexibility",
 "flexibility",
 1,
 "An introduction to flexibility",
 ["Stretch!", "Hip circles", "Scorpion"]
);

// Workout.insertMany([
//   {
//     name: "Introduction to Cardio", 
//     type: "cardio",
//     intensity: 1,
//     description: "An introduction to cardio"
//   },
//   {
//     name: "Introduction to Strength", 
//     type: "strength",
//     intensity: 1,
//     description: "An introduction to strength",
//   },
//   {
//     name: "Introduction to Flexibility", 
//     type: "flexibility",
//     intensity: 1,
//     description: "An introduction to flexibility",
//   },
// ]); // Creates a collection of workouts with the following

// Workout.collection.findOneAndUpdate(
//   {name: "Introduction to Cardio"},
//   { $push: {exercises: { 
//     $each: [
//       Exercise.findOne({name: "Stretch!"  }, {exec: true}, function(err, obj) {}).exec(),
//       Exercise.findOne({ name: "Walk-outs" }, { exec: true }, function(err, obj) {}).exec(),
//       Exercise.findOne({ name: "Arm circles" }, { exec: true }, function(err, obj) {}).exec() 
//     ]
//   } } }
// );

// Workout.collection.findOneAndUpdate(
//   {name: "Introduction to Strength"},
//   { $push: {exercises: { 
//     $each: [
//       Exercise.findOne({name: "Stretch!"  }, function(err, obj) {}).exec(),
//       Exercise.findOne({name: "Lunge twist"  }, function(err, obj) {}).exec(),
//       Exercise.findOne({name: "Squats" }, function(err, obj) {}).exec() 
//     ]
//   } } }
// );

// Workout.collection.findOneAndUpdate(
//   {name: "Introduction to Flexibility"},
//   { $push: {exercises: { 
//     $each: [
//       Exercise.findOne({name: "Stretch!"  }, function(err, obj) {}).exec(),
//       Exercise.findOne({name: "Hip circles"  }, function(err, obj) {}).exec(),
//       Exercise.findOne({name: "Scorpion" }, function(err, obj) {}).exec() 
//     ]
//   } } }
// );

// // let stretch = Exercise.findOne({ name: "Arm circles" })
// // .lean()
// // .exec()
// // .then( function(res) {console.log(res) } )
// // .catch( function(err) {console.log(err) } )
// // console.log(stretch);

// let stretch = Exercise
//   .findOne({ name: "Stretch!" }, function (err, obj) { })
//   .lean()
//   .exec()
//   // .addBack( function(err, obj) {});
  
// console.log("FINDME");
// console.log(stretch);

// let stretch2 = {
//   name: "Stretch!",
//     description:
//   "Make sure to stretch out whatever feels tight before getting started.",
//     duration: 10,
//       sets: null,
//         reps: null,
//           weight: null
// };

// Workout.create(
//   {
//     name: "Testing No ExerciseSchema",
//     type: "cardio",
//     intensity: 1,
//     description: "An introduction to cardio",
//     exercises: [
//       stretch2, stretch2
//     ]
//   });