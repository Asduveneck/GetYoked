const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Validations?

router.get("/test", (req, res) => res.json({ msg: "Workouts test route" }));
// https://restdb.io/blog/object-relations-in-a-nosql-database

/*
* `GET /workouts`
  * ? intensity = light AND category = cardio
  * Has query parameters
  * includes`exerciseWorkouts` & `exercises`
* `GET /workouts/:id`
  * On User show page
*/

const Workout = require('../../models/Workout'); // to be made
const UserWorkout = require('../../models/UserWorkout');

//GET workout. 
router.get('/workout', (req, res) => { // Is this what we wanted
  Workout.find()
    .sort({ date: -1 })
    .then(workouts => res.json(workouts))
    .catch(err => res.status(404).json({ noworkoutsfound: 'No workouts found' }));
});

// Workouts for a user
// router.get('/user/:user_id', (req, res) => { // We want the workouts to be on the users page, right?
//   let workoutIds = UserWorkout.find({user: req.params.user_id}).workout_id // returns an array or something of workout IDs.
  
//   // If no workoutIds were returned
//   if (!workoutIds) return res.status(404).json(
//     { noWorkoutsFound: `You have no recorded workouts. Today's the day!` }
//   )
//   // If there are workouts:
//   let workouts = {};

//   workoutIds.map( (id, idx) => { // Assumes workouts are in chronological order...
//     workouts.idx = Workout.find({id}) 
//   });

//   return res.json(workouts)
// });


// Workout show 

router.get("workout/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err =>
      res.status(404).json({ noworkoutfound: "No workout found with that ID" })
    );
});
