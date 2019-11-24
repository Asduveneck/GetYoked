

// Testing
// workoutResHandler(
// "Introduction to Cardio",
//  "cardio",
//  1,
//  "An introduction to cardio",
//  ["Stretch!", "Walk-outs", "Arm circles"]
// );
// workoutResHandler(
// "Introduction to Strength",
//  "strength",
//  1,
//  "An introduction to strength"//,
// //  ["Stretch!", "Lunge twist", "Squats"]
// );

// workoutResHandler(
// "Introduction to Flexibility",
//  "flexibility",
//  1,
//  "An introduction to flexibility"//,
// //  ["Stretch!", "Hip circles", "Scorpion"]
// );

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