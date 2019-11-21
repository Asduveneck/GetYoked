const mongoose = require("mongoose");
const axios = require("axios");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const User = require('../models/User')

User.collection.drop();
const Workout = require("../models/Workout");
const workouts = Workout.collection;

/*

https://www.robinwieruch.de/mongodb-express-setup-tutorial
https://mongoosejs.com/docs/api.html#model_Model.insertMany
*/

User.insertMany([ //insertMany
  {			
  username: "realYoungJun",
  password: "!password",
  age: 27,
  height: 69,
  weight: 160,
  activity: "low",
  goals: "5k",
  achievement: 0
  },
  {
  username: "Super_Buff_Dude",
  password: "password",
  age: 53,
  height: 68,
  weight: 210,
  activity: "low",
  goals: "5k",
  achievement: 1
  },
  {
  username: "Maureep",
  password: "GottaCatchEmAll!",
  age: 15,
  height: 60,
  weight: 108,
  activity: "medium",
  goals: "5k",
  achievement: 2
  },
  {
  username: "Kazu",
  password: "marathon",
  age: 22,
  height: 68,
  weight: 140,
  activity: "intense",
  goals: "5k",
  achievement: 3 // "20km"
  },
  {
  username: "ZaShaPaSha",
  password: "hunter12",
  age: 29,
  height: 68,
  weight: 165,
  activity: "intense",
  goals: "5k",
  achievement: 95 // "genos"
  },
  {
  username: "RickAndMorty",
  password: "szechuansauce",
  age: 15,
  height: 64,
  weight: 130,
  activity: "medium",
  goals: "5k",
  achievement: 1 // "MortiestMorty"
  },
]);

const cardWork = Workout.find({name: "Introduction to Cardio"}).exec( function(err, obj) {obj} );

User.findOneAndUpdate(
  // conditions            update               options,           callback
  {name: "realYoungJun"}, {$push: { cardWork} }, {}, function(err, obj)  {obj}
);
// const cardWork = Workout.findOne({ name: "Introduction to Cardio"})
//   .then(workout => res.status(200).json(workout))
//   .catch(err => err => res.status(400).json({workout: "workout not found"}));


// User.collection.findOneAndUpdate(
//   {name: "realYoungJun"},
//   {$push: { cardWork} } 
// )
//   .then(workout => res.status(200).json(workout))
//   .catch(err => res.status(400).json({ workout: 'Workout not found' }));
// User.collection.findOneAndUpdate(
//   {name: "realYoungJun"},
//   {$push: { 
//     workouts: Workout.findOne({
//       name: "Introduction to Cardio"
//     }).then(bla => res.status(200).json(workout))
//     .catch(err => res.status(400).json({ workout: "blablablaerror"}))
//   }} 
// )
//   .then(workout => res.status(200).json(workout))
//   .catch(err => res.status(400).json({ workout: 'Workout not found' }));

// Festival.findOneAndUpdate(
//   { _id: req.params.festivalId },
//   { $push: { lineup: newSet } },
//   { "new": true })
//   .then(festival => res.status(200).json(festival))
//   .catch(err => res.status(400).json({ festival: 'Festival not found' }));

// https://mongoosejs.com/docs/queries.html Update your findOne to take in a callback! 
// User.collection.findOneAndUpdate( // Case where no workouts
//   {name: "Super_Buff_Dude"},
//   {$push: { 
//     workouts: workouts.findOne({
//       name: "Introduction to Cardio"
//     })
//   }} 
// );

// FINDME TEST!

// const findOneRO = (str) => {
//   workouts.findOne({name: str}, function(err, obj) { console.log(obj);})
// }

// workouts.findOne({ name: "Introduction to Strength" }, function(err, obj) {
//   console.log(obj);
// });

// User.collection.findOneAndUpdate(
//   { name: "Maureep" },
//   {$push: { workouts: "testing 1" }
//   }
// );


User.findOneAndUpdate(
  {name: "Maureep"},
  {$push: { 
    workouts: Workout.findOne({name: "Introduction to Strength"}, function(err, obj) { obj })
    // workouts: Workout.findOne().lean().exec({ name: "Introduction to Strength" },function(err, obj) {
    //   obj
    // } )
  }} 
);

User.collection.findOneAndUpdate(
  {name: "Kazu"},
  {$push: { 
    workouts: { $each: [
      workouts.findOne({name: "Introduction to Cardio"}),
      workouts.findOne({name: "Introduction to Strength"})
  ]
  } } } 
);

User.collection.findOneAndUpdate( // Does order change by default?
  {name: "ZaShaPaSha"},
  {$push: { // Where do we store date?
    workouts: { $each: [
      workouts.findOne({name: "Introduction to Strength"}),
      workouts.findOne({name: "Introduction to Cardio"})
  ]
  } } } 
);


User.collection.findOneAndUpdate(
  {name: "RickAndMorty"},
  {$push: { 
    workouts: workouts.findOne({
      name: "Introduction to Flexibility"
    })
  }} 
);

// Exporting these we may need an axios