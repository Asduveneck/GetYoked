const mongoose = require("mongoose");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const Workout = require("../models/Workout");

Workout.collection.drop();

Workout.create([]);
