const mongoose = require("mongoose");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const Exercise = require("../models/Exercise");

Exercise.collection.drop();
// Helper method to create exercises
const exerciseCreate = (name, description, duration = null, sets, reps, weight = null) => ({
  name, description, duration, sets, reps, weight
})

Exercise.insertMany([
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
  },
exerciseCreate(	"V-up"	,	"1. Lay on floor or mat, hands and arms stretched opposite from each other. $2. While keeping knees straight, raise your legs and arms towards each other"	,	null	,	2	,	8	,	null	),
exerciseCreate(	"Air bikes"	,	"1. Lay on floor or mat, hands behind your head, with your legs stretched out. $2. Raise your left knee towards your body (knees bent). $3. Raise and twist your body, bringing your right elbow in contact with your left knee. $4. Repeat with your right knee and left elbow. $    * This counts as one rep"	,	null	,	2	,	6	,	null	),
exerciseCreate(	"Push Ups (Basic)"	,	"1. Get in standard push-up position (arms below shoulder, back straight, butt and back aligned) $2. Lower body until your arms are parallel to the floor $3. Push yourself back up"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Push Ups (Diamond)"	,	"1. Get into push-up position. $2. Make a diamond with your fingers; have your thumbs touch and index fingers touch, positioning arms centered below your chest $3. Proceed with Push-ups"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Push Ups (arms by side)"	,	"1. Get into push-up position. $2. Move your arms so they are by your waist, fingers pointing forward $3. Do your push-ups"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Assisted Squats"	,	"1. Rest your hands on the back of a chair in front of you. $2. Lower yourself until your thighs are parallel with the floor, then raise yourself, using the chair as support"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Deep assisted squats"	,	"1. Rest your hands on the back of a chair in front of you. $2. Lower yourself as far as possible, then raise yourself back up, using the chair as support"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Bulgarian split squats"	,	"1. Rest your back foot on an elevated platform, while standing roughly 1-2 feet away from the platform. $2. Lower yourself until your resting leg's knee touches the floor, then raise yourself up. $3. Complete the # of reps, then switch your feet. Do 6 reps per leg"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Beginner Shrimp Squats"	,	"1. Stand on one leg, bending the knee of the other until it's parallel with the floor. $2. Slowly lower yourself on one leg until the knees and toes of the bent leg touch the floor. $3. Raise yourself up (raising your knees and toes at the same rate)" 	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Assisted One Legged Squats"	,	"1. Stand next to a chair or bench, and extend one leg straight in front of you. $2. Lower yourself until your butt touches your heel (keeping the heel grounded) $3. Raise yourself up, assisting yourself with the chair/bench"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Balance assisted one legged squats"	,	"1. Stand next to any solid vertical structure (door/doorframe/pole), and extend one leg straight in front of you. $2. Lower yourself until your butt touches your heel (keeping the heel grounded) $3. Raise yourself up, assisting yourself with the vertical support"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Weighted one legged squats"	,	"1. Start by holding a 10lb weight or lower (less weight is harder) $2. Extend one leg straight in front of you $3. Lower yourself until your butt touches the floor, then raise yourself back up."	,	null	,	5	,	5	,	null	),
exerciseCreate(	"One-legged squats"	,	"1. Extend one leg straight in front of you. $2. Lower yourself until your butt touches your heel (keeping the heel grounded) $3. Raise yourself up."	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Renegade pistol squats"	,	"1. Extend one leg straight in front of you. $2. Lower yourself until your butt touches your heel (keeping the heel grounded) $3. Bring your  extended foot back until you return to a deep squat position. $4. Extend your other foot straight forward. $5. Raise yourself up (now on the opposite foot you lowered yourself on)"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Intermediate shrimp squats"	,	"1. Stand on one leg, bending the knee of the other until it's parallel with the floor. $2. Slowly lower yourself on one leg until the knees and toes of the bent leg touch the floor. $3. Bend or raise your back foot (emphasizing your quads) $4. Raise yourself up (raising your knees and toes at the same rate)" 	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Advanced Shrimp Squats"	,	"1. Hold your foot (as if you're stretching your quads) $2. Lower yourself, holding onto your back foot the entire time) $3. Raise yourself back up."	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Flat knee raises"	,	"1. Lay flat on the floor, legs straight forward. $2. Raise your knees to your chest, keeping your legs bent at a 90 degree angle $3. Keep breathing as you raise and lower your legs"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Flat bent leg raises"	,	"1. Lay flat on the floor, legs straight forward. $2. Raise your legs up, with a slight bend with them, until your thighs are perpendicular to the floor $3. Lower your legs until they almost touch the floor, then proceed with another rep until the goal is hit"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Flat straight leg raises"	,	"1. Lay flat on the floor, legs straight forward. $2. Raise your legs up until they're perpendicular to the floor $3. Lower your legs until they almost touch the floor, then proceed with another rep until the goal is hit"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Forearm knee raises"	,	"1. Position your forearms to be on parallel bars (or the back of two stable chairs). $2. Raise your knees until your thighs are parallel with the floor (knees bent 90degrees), then lower them back to a hanging position $     * By performing leg raises without back support, you significantly increase the difficulty"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Hanging knee raises"	,	"1. Hanging from a bar $2. Raise your knees until your thighs are parallel with the floor (knees bent  90 degrees). $3. Lower yourself back to your starting position."	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Forearm bent leg raises"	,	"1. Position your forearms to be on parallel bars (or the back of two stable chairs). $2. Raise your knees until your thighs are parallel with the floor (knees slightly bent), then lower them back to a hanging position $     * By performing leg raises without back support, you significantly increase the difficulty"	,	null	,	5	,	5	,	null	),
exerciseCreate(	"Hanging bent leg raises"	,	"1. Hanging from a bar $2. Raise your knees until your thighs are parallel with the floor (knees slightly bent). $3. Lower yourself back to your starting position."	,	null	,	5	,	5	,	null	)
]);

// Exporting these we may need an axios