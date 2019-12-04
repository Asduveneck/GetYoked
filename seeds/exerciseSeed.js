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
  // Bodyweight workouts
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
exerciseCreate(	"Hanging bent leg raises"	,	"1. Hanging from a bar $2. Raise your knees until your thighs are parallel with the floor (knees slightly bent). $3. Lower yourself back to your starting position."	,	null	,	5	,	5	,	null	),
// Weight Lifting

// Cardio

// YOGA
  exerciseCreate("Deep Breaths", "1. Sit cross legged on the floor, hands on your belly, shoulders down and relaxed. $2. Inhale through your nose. You should feel your belly expand. Inhale for 4 seconds. $3. Hold your breath for 7 seconds, keeping your belly expanded. $4. Exhale through your mouth slowly for 9 seconds. Feel your belly shrink back. $  * Repeat 5-7 times. $  * Throughout this exercise, your shoulders should stay level.", null, 1, 1, null), 
  exerciseCreate("Downward-Facing Dog/Adho Mukha Svanasana", "1. Start on your hands and knees, with your hands stacked under your shoulders and knees under your hips. $2.Spread your hands wide and press your index finger and thumb into your mat. $3.Lift your tailbone and press your butt up and back, drawing your hips toward the ceiling.Straighten your legs as best as you can and press your heels gently toward the floor. $4.Your head should be between your arms, facing your knees, and your backs should be flat. Focus on keeping your spine straight $ * Hold for 5–10 breaths.",	null,	1, 1,	null),
  exerciseCreate("Half Pigeon Pose/Ardha Kapotasana", "1. From Downward-Facing Dog, extend your left leg high, and then bring your leg underneath your body and place it in front of you, with your shin parallel to the top of your mat. $2. Extend your right leg straight behind you. Rest the top of your foot on the floor. $3. Keep your left foot flexed. Try to keep your right hip as close to the mat as you can. If it lifts off the floor, bring your left foot $in a little closer to your body. $4. Stay upright for three breaths. Then, fold over and rest your head on the ground for 5–10 breaths. $5. Repeat on the other leg.", null, 1, 1, null),
  exerciseCreate("Mountain Pose/Tadasana", "1. Stand with your toes together and heels slightly apart. $2. Spread your toes and place your weight evenly through both feet. Engage your core and tuck your hips under a bit so your tailbone is pointing down toward the floor. Relax your shoulders and roll them back and down. $3. Inhale and reach your arms overhead, while pressing down into your feet. You may also put your hands in prayer position in front of your chest, or rest them by your sides—all are commonly used variations, and your instructor may cue one specifically or give you the choice. $4. Take long, slow, deep breaths in and out of your nose. $* Hold for 3–5 breaths.", null, 1, 1, null),
  exerciseCreate("Tree/Vrksasana", "1. Start in mountain pose with your toes together and heels slightly apart. $2. Bring your right foot to the inner thigh of your left leg. Squeeze your foot and inner thigh together. The knee of your right leg should be turned out and your right thigh facing down toward the ground at a 45-degree angle. $3. Once you’ve found your balance, lift your hands to prayer position in front of your chest (as shown), or up overhead if that feels better for you. $  * If it is difficult to balance, try placing your right foot on your left shin $4. Keep your gaze focused on a fixed point in front of you to help stay balanced. $* Hold for 5–10 breaths, then switch sides.", null, 1, 1, null),
  exerciseCreate("Crescent Lunge/Utthita Ashwa Sanchalanasana", "1. Take a big step forward with your left foot to start in a staggered stance, with your feet almost mat-length apart. $2. Bend your front knee and keep your back leg straight and heel lifted off the floor. Try to bend your front leg so that your thigh is parallel to the floor. Square your hips toward the front. $3. Extend your arms toward the ceiling on either side of your head and stretch up as you also press into the mat and feel the stretch in your hips. $* Hold for 5 breaths. Return to your starting position, then repeat with your right foot forward.", null, 1, 1, null),
  exerciseCreate("Warrior II/Virabhadrasana II", "1. Take a big step forward with your left foot to start in a staggered stance, with your feet almost mat-length apart. $2. Extend your arms so that they are parallel to the floor. $3. Bend your left knee so that it's at or near a 90-degree angle, your thigh parallel to the floor, while keeping the right leg straight. $  * Make sure your left knee doesn't move past your ankle. Reduce how deep you lunge if your knee moves past your ankle. $4. Point your left toes forward and turn your right foot out to the right so that it's perpendicular to your left foot. Your left heel should be in line with the arch of your right foot. $5. At the same time, twist your torso to the right so that your left hip is facing toward the front of the room and your right hip is facing toward the back. Your left arm and your head should both be pointing forward and your right arm should be pointing back. $* Hold for 1–5 breaths.", null, 1, 1, null),
  exerciseCreate("Triangle/Trikonasana", "1. Start in Warrior II. $2. Straighten your front leg. Then, reach forward with your left hand toward the ground. Tilt your torso forward and rotate it open to the right side. $3. Rotate your arms to 6 and 12 o’clock. Rest your left hand on your shin, or the floor if you can, and extend your top arm fingers toward the ceiling. $  * Focus on keeping your spine long rather than lowering your left hand towards your shin or floor. $* Hold for 5–10 breaths, then switch sides.", null, 1, 1, null),
  exerciseCreate("Plank Pose/Kumbhakasana", "1. Start on all fours, with your knees under your hips and your hands flat on the floor directly underneath your shoulders. $2. Lift your knees off the floor and extend your legs out behind you. You should now be on your toes and your hands, with your body forming one long line $3. Keep your palms flat on the floor, hands shoulder-width apart, shoulders stacked directly above your wrists, and core engaged. Keep your neck and spine in a neutral position by looking down at the top of your mat. $* Hold this position for 3-5 breaths.", null, 1, 1, null),
  exerciseCreate("Low Plank/Chaturanga Dandasana", "1. Start in Plank Pose with your palms flat on the floor, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended, and core engaged. $2. Slowly lower down to a Low Plank by bending your elbows, keeping them tucked in close to the side of your body, until they form 90-degree angles. $  * Your shoulders should not go lower than your elbows $* Hold for 1 breath", null, 1, 1, null),
  exerciseCreate("Upward-Facing Dog/Urdhva Mukha Svanasana", "1. Starting from a Low Plank/Chaturanga, drop your hips down to the floor and flip your toes over so the tops of your feet touch the floor. $2. Tighten your core and straighten your arms to push your chest up. Pull your shoulders back, squeeze your shoulder blades, and tilt your head toward the ceiling, to open up your chest. $* Hold for 1-3 breaths", null, 1, 1, null),
  exerciseCreate("Dancers Pose/Natarajasana", "1. Stand tall with your feet together. $2. Bend your left knee and bring your left foot toward your glutes. Grab onto the inner arch of your left foot with your left hand and slowly lift your foot toward the ceiling. At the same time, reach your right arm forward and up toward the ceiling. $  * Focus on keeping your hips level to keep your lower back comfortable and avoid overextension $3. Actively press down into the floor with your entire right foot as you start to open your chest and pull your lifted leg up. Keep your chest lifted. $* Hold on one side for 5-10 breaths, and then switch sides.", null, 1, 1, null),
  exerciseCreate("Seated Forward Fold/Paschimottanasana", "1. Sit on the floor with your legs extended in front of you. Flex your feet. Sit up tall with a straight back. $2. Bending from your hips and keeping your flat back, fold your upper body over your lower body. $  * Focus on keeping your spine long and flat over keeping your knees perfectly straight. $  * Feel free to bend your knees such that your back lengthens and you can bring your pelvis forward $3. If you are able to, grab onto the outside of each foot, or your ankles or shins. Release your neck and let your head hang heavy. $* Hold for 5–10 breaths.", null, 1, 1, null)
]);

// Exporting these we may need an axios