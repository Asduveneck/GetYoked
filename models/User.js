const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Workout = require('./Workout');
const WorkoutSchema = Workout.Schema;
// const WorkoutSchema = new Schema({
//     _workoutId: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     intensity: {
//         type: Number
//     }
// })

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    goals: {
        type: String,
        required: true
    },
    achievement: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    workouts: {
        type: [WorkoutSchema]
        // type: mongoose.Schema.Types.ObjectId, // returns a reference to the ID
        // ref: 'Workout'
    }
})


module.exports = User = mongoose.model('users', UserSchema);