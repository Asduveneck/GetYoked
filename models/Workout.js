const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
});

module.exports = Workout = mongoose.model('workouts', WorkoutSchema);