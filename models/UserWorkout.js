const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserWorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'workouts'
  },
});

module.exports = UserWorkout = mongoose.model('userWorkouts', UserWorkoutSchema);