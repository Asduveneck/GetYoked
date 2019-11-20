const mongoose = require("mongoose");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const User = require('../models/User')

User.collection.drop();

User.create([
  {			
  username: "realYoungJun",
  password: "!password",
  age: 27,
  height: 69,
  weight: 160,
  activity: "low",
  goals: "",
  achievement: 0
  },
  {
  username: "Super_Buff_Dude",
  password: "password",
  age: 53,
  height: 68,
  weight: 210,
  activity: "low",
  goals: "lose weight",
  achievement: 1
  },
  {
  username: "Maureep",
  password: "GottaCatchEmAll!",
  age: 15,
  height: 60,
  weight: 108,
  activity: "medium",
  goals: "Evolve",
  achievement: 2
  },
  {
  username: "Kazu",
  password: "marathon",
  age: 22,
  height: 68,
  weight: 140,
  activity: "intense",
  goals: "Hakone Ekiden",
  achievement: 3 // "20km"
  },
  {
  username: "ZaShaPaSha",
  password: "hunter12",
  age: 29,
  height: 68,
  weight: 165,
  activity: "intense",
  goals: "ONEPUNCHMANZ",
  achievement: 95 // "genos"
  },
  {
  username: "RickAndMorty",
  password: "szechuansauce",
  age: 15,
  height: 64,
  weight: 130,
  activity: "medium",
  goals: "RickiestRick",
  achievement: 1 // "MortiestMorty"
  },
]);

// Exporting these we may need an axios