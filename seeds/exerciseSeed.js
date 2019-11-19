const mongoose = require("mongoose");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const Exercise = require("../models/Exercise");

Exercise.collection.drop();

Exercise.create([{}]);
