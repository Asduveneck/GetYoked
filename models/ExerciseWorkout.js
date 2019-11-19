const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseWorkoutSchema = new Schema({
  exercise: {
    type: Schema.Types.ObjectId,
    ref: 'exercises'
  },
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'workouts'
  },
});

module.exports = ExerciseWorkout = mongoose.model('exerciseWorkouts', ExerciseWorkoutSchema);