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
  {
    name: "Hip circles",
    description:
      "1. Stand with you feet together$2. Raise one knee to 90 degrees. Raise your knee and move in an outwards circular motion.$3. After 8 reps, switch directions for another 8.$4. Repeat the process for the other leg.$* 8 reps per leg per direction",
    duration: null,
    sets: 1,
    reps: 32,
    weight: null
  },
  {
    name: "Arm circles",
    description:
      "1. Stand with your feet spaced shoulder-width apart$2. Slowly swing your arms forward in a circular motion. Do this for 8 reps.$3. Repeat this in the opposite directions.$* 8 reps forward and 8 reps backward.",
    duration: null,
    sets: 1,
    reps: 16,
    weight: null
  },
  {
    name: "Jump rope",
    description:
      "Jump roping is a great way to get your heart pumping. If you dont have a rope, jump in place",
    duration: 3,
    sets: 1,
    reps: null,
    weight: null
  },
  {
    name: "Walk-outs",
    description:
      "1. Start with your feet hip-width apart, arms at sides.$2. Bend the at hips to reach your hands to floor; crawl out to a high plank position.$3. Pause for a couple seconds your with shoulders over your wrists and abs engaged.$4. Crawl your hands back to feet and stand up.$ * That was one rep",
    duration: null,
    sets: 1,
    reps: 8,
    weight: null
  },
  {
    name: "Pigeon sit",
    description:
      "1. In a push up position, bring your right knee toward your right hand while keeping your shin parallel to your hips so that your left foot comes just behind your left hand$2. Sink your hips towards the floor.$3. Return to pushup position and repeat on the other leg.$* That was one full rep",
    duration: null,
    sets: 1,
    reps: 10,
    weight: null
  },
  {
    name: "Scorpion",
    description:
      "1. Lay on the floor, face down, with your arms spread so that youre making a T$2. Without moving your arms, roll your body to the left so that your hips are attempting to face upwards. This will happen naturally if you aim to bring your right heel to your left hand.$* One rep is doing this once per side",
    duration: null,
    sets: 1,
    reps: 10,
    weight: null
  },
  {
    name: "Stretch!",
    description:
      "Make sure to stretch out whatever feels tight before getting started.",
    duration: 10,
    sets: null,
    reps: null,
    weight: null
  },
  {
    name: "Skaters",
    description:
      "From a standing position, jump a few feet to your right side. Land on your right leg with your left knee bent in front of you, left arm at your side, and right arm raised.$Reverse the movement by hopping on your left and repeating the process.$Thats a single rep",
    duration: null,
    sets: 4,
    reps: 8,
    weight: null
  }
]);

// Exporting these we may need an axios