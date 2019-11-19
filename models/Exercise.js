const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: false
  },
  sets: {
    type: Number,
    required: false
  },
  reps: {
    type: Number,
    required: false
  },
});

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);
// https://www.sitepoint.com/using-joins-in-mongodb-nosql-databases/