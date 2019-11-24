const mongoose = require("mongoose");
const axios = require("axios");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird"); // Not using...
// mongoose.connect(db);

const Workout = require("../models/Workout");
const Exercise = require("../models/Exercise");

// Workout.collection.drop(); // FINDME Can't include this until we seed the data first again...

// Helper to return a promise to find a specific workout POJO
async function exerciseFindOneByBName(name) {
  console.log("Within exerciseFindOneByName");
  let exercise = await Exercise.findOne( { name }, function(err, data) {
    // error handling
    if (err) {
      return;
    }
    if (data === null || data.length == 0) {
      console.log("Nothing passed in here?");
      return;
    }
    // return an array of workouts
    return data;
  })
  console.log(`Found:\n${exercise}`);
  return exercise;
}; // Used in exerciseArrayResMaker

// Makes array of matched exercises that queries each entry
async function exerciseArrayResMaker(exercisesArray) {
  console.log("Hitting exerciseArrayResMaker with:");
  console.log(exercisesArr);
  console.log("\n");
  if (!Array.isArray(workoutsArray)) {
    return; //stops execution early
  }
  let finalExerciseArr = [];

  for(let i = 0; i < exercisesArray.length; i++ ) {
    console.log(`Within exerciseArrayResMaker. Loop: ${i}\n`);
    let exercise = await exerciseFindOneByBName(exercisesArray[i]);
    console.log(`Found Exercise:\n${exercise}`);
    if(exercise) { finalExerciseArr.push(exercise[0]) };
  }
  console.log(`Outside for loop, array to push is: `);
  console.log(finalExerciseArr);
  return finalExerciseArr;
}; // Used in workoutResHandler (final step to seed individual)

// Helper to make workouts based 
const workoutCreate = (name, type, intensity, description, exercisesArr = []) => {
  console.log("Within workoutCreate");
  if (exercisesArr.length === 0) { // If there are no exercises, we should throw an error or warning?
    console.log("No workouts were found");
    Workout.create( { name, type, intensity, description } ); 
  } else { // create a new workout
    const newWorkout = new Workout({name, type, intensity, description});
    // Use mongoose push to add a new exercise per workout
    for (let i = 0; i < exercisesArr.length; i++) {
      // Maybe add a safe option here, so if the object is null, call next?
      console.log(`New exercise to add:`);
      console.log(`\n`);
      console.log(`${"#".repeat(90)}`);
      console.log(`\n`);
      newWorkout.exercises.push(exercisesArr[i]);
    }
    // Save to mongoose DB:
    newWorkout.save();
  }
}; 

// utilize all above helper methods // CHECK LINE 65 and BELOW...
async function workoutResHandler(name, type, intensity, description, exercisesArr = []) {
  console.log("Beginning of workoutResHandler with exercises:");
  console.log(exercisesArr);
  console.log('\n');

  let screenedExercises = [];
  // if we have something in our exercisesArray
  if(exercisesArr.length !== 0) {
    console.log("We have something")
    // If I pass in a string, wrap it in an array
    if(typeof(exercisesArr) === "string" ) {
      screenedExercises.push(exercisesArr)
    } else if(Array.isArray(exercisesArr)) {
      screenedExercises = exercisesArr;
    }
  };
  console.log("Will pass the following into exerciseArrayResMaker: ")
  console.log(screenedExercises);
  console.log("\n");
  await exerciseArrayResMaker(screenedExercises) //FINDME BROKEN HERE ALREADY // IT IS THIS .THEN THAT IS BROKEN.
    .then(exercises => {
      console.log("Executed exerciseArrayResMaker, and we returned:");
      console.log(exercises);
      console.log('\n');
      workoutCreate(name, type, intensity, description, exercises) // NEVER CALLED?!?
    })
    .catch(err => {
      console.log("Something went wrong in Workout Seeds");
      console.log(err.messages);
    })
}

// Testing
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
 "An introduction to strength"//,
//  ["Stretch!", "Lunge twist", "Squats"]
);

workoutResHandler(
"Introduction to Flexibility",
 "flexibility",
 1,
 "An introduction to flexibility"//,
//  ["Stretch!", "Hip circles", "Scorpion"]
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

  // ORIGINALLY IN app.js backend

  // let test = require("./models/Workout").collection
// let test2 = require("./models/Workout"); 

// console.log(
//   test.findOne({ name: "Introduction to Strength" }, function(err, workout) {
//     if (err) handleError(err); // NO WORKY
//     // return workout.toObject(); // NO WORKY 
//   })
// );

// console.log("FINDME");
// console.log(
//   test2.findOne().lean().exec(function(err, obj) {
//       obj
//   })
// );
// console.log("FINDME");





// test.findOne({ name: "Introduction to Strength" }, function(err, workout) {
//     if (err) handleError(err); // NO WORKY
//     console.log(workout); // NO WORKY?
// }); // WORKY



