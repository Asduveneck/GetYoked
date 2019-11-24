const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Workout = require('../../models/Workout');
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Validations?

// Index
router.get("/", (req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .then(workouts => res.json(workouts))
    .catch(err => res.status(404).json({ noworkoutsfound: "No workouts found" }));
});

// Specific Workout Show
router.get('/:id', (req, res) => { // Is this what we wanted
  Workout.findById(req.params.id)
    .sort({ date: -1 })
    .then(workouts => res.json(workouts))
    .catch(err =>
      res.status(404).json({ noworkoutsfound: "No workouts found" })
    );
});

// Get workout by type and intensity
router.get('/workout/find', (req, res) => {
  Workout.find({ 'type': req.query.type, 'intensity': req.query.intensity })
    .then(workouts => {
      const workout = workouts[Math.floor(Math.random()*workouts.length)];
      return res.json(workout)
    })
    .catch(err =>
      res.status(418).json({ noworkoutfound: "No workout found"}))
})
// Workouts for a user //BROKEN
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

module.exports = router;