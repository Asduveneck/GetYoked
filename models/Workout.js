const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = require('./Exercise');
const ExerciseSchema = Exercise.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: { 
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
  exercises: {
    type: [ExerciseSchema]
  }
});

module.exports = Workout = mongoose.model('workouts', WorkoutSchema);