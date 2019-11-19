const mongoose = require("mongoose");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const User = require('../models/User')

User.collection.drop();

User.create([{

}]);