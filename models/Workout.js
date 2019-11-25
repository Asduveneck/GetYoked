const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = require('./Exercise');
const ExerciseSchema = Exercise.Schema;

// const ExerciseSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   duration: {
//     type: Number,
//     required: false
//   },
//   sets: {
//     type: Number,
//     required: false
//   },
//   reps: {
//     type: Number,
//     required: false
//   },
//   weight: {
//     type: Number,
//     required: false
//   }
// });

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: { // call this category?
    type: String,
    required: true
  },
  intensity: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  // user: { // workout belongs to a user...
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // }
  exercises: {
    type: [ExerciseSchema]
  }
});

module.exports = Workout = mongoose.model('workouts', WorkoutSchema);