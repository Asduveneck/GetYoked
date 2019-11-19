const mongoose = require("mongoose");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const Exercise = require("../models/Exercise");

Exercise.collection.drop();

Exercise.create([
  {
    name: "Squats",
    description:
      "1. Stand with your feet hip-width apart and turn your toes to face forward or out to the side slightly.$2. With your core engaged and your back straight, slowly move into a sitting position until your thighs are parallel with the floor.$3. Pause briefly before rising back up.$* Your knees should not be more forward than your toes!",
    duration: null,
    sets: 1,
    reps: 15,
    weight: null
  },
  {
    name: "Lunge twist",
    description:
      "1. Step forward and drop your hips. Dont lunge so far forward that your front knee extends beyond your toes.$2. After youve lunged, slowly twist towards the side of your front leg",
    duration: null,
    sets: 1,
    reps: 10,
    weight: null
  },
  {
    name: "Skip around",
    description:
      "Skipping around will get your heart pumping and warm up your muscles",
    duration: 3,
    sets: 1,
    reps: null,
    weight: null
  },
  
]);
