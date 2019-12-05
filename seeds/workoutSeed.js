const mongoose = require("mongoose");
const axios = require("axios");

const Workout = require('../models/Workout');
Workout.collection.drop();

const Exercise = require("../models/Exercise");

async function exerciseFindOneByName(name) {
  let exercise = await Exercise.findOne({ name}, function(err, data) { // May work?
    if (err) {
      return;
    }
    if (data === null || data.length == 0) {
      return;
    }
    return data;
  })
  return exercise;
} // Works. returns null if I pass in nothing...

async function exerciseArrayResMaker(exercisesArray) {
    if (!Array.isArray(exercisesArray)) {
      return; //stops execution early
    }

    let finalExerciseArr = [];
    // for each name I'll query
    for(let i = 0; i < exercisesArray.length; i++) {
      let exercise = await exerciseFindOneByName(exercisesArray[i]); // Switch to a .then
      if (exercise) {finalExerciseArr.push( exercise) } // For some reason, this isn't nested within an array...
    }

    return finalExerciseArr
};

const workoutCreate = (name, type, intensity, description, exercises = []) => {
  if (exercises.length === 0) {
    Workout.create({ name, type, intensity, description });
  } else {
    const newWorkout = new Workout({ name, type, intensity, description });

    for(let i = 0; i < exercises.length; i++) {
      newWorkout.exercises.push(exercises[i])
    }
    newWorkout.save();
  }
};

async function workoutResHandler (name, type, intensity, description, exercisesArray = []) {

  let screenedExercises = [];

  if (exercisesArray.length !== 0) {
    // If when creating a workout we pass in a string of an exercise...
    if(typeof(exercisesArray) === "string") { 
      screenedExercises.push(exercisesArray) 
    } else if(Array.isArray(exercisesArray)) {
      screenedExercises = exercisesArray
    }
  }

  await exerciseArrayResMaker(screenedExercises)
    .then(exercises => {
      workoutCreate(name, type, intensity, description, exercises)
    })
    .catch(err => {
      console.log("Something went wrong in Workout Seeds");
      console.log(err); // SEE IF WE GET THIS STILL
    })
} 

workoutResHandler("Introduction to Cardio", "cardio", 1, "An introduction to cardio", ["Stretch!", "Walk-outs", "Arm circles"]);
workoutResHandler("Introduction to Strength", "strength", 1, "An introduction to strength", ["Stretch!", "Lunge twist", "Squats"]);
workoutResHandler("Introduction to Flexibility", "flexibility", 1, "An introduction to flexibility", ["Stretch!", "Hip circles", "Scorpion"]);
workoutResHandler("Intro to Strength: Chest Abs Legs",	"strength",	1,	"A light set to work out your core, chest, and legs",	[	"Stretch!", "Push Ups (Basic)", "Assisted Squats", "Flat knee raises"]);
workoutResHandler("Intro to Cardio 2",	"cardio",	1,	"A light set to work out your core, chest, and legs",	[	"Stretch!", "Arm circles", "Air bikes"]);
workoutResHandler("Intro to Strength 2: Chest abs legs",	"strength",	2,	"A light set to work out your core, chest, and legs",	[	"Stretch!", "Push Ups (Diamond)", "Bulgarian split squats", "Flat straight leg raises"]);
workoutResHandler("Intro to strength 2.1",	"strength",	2,	"A light set to work out your core, chest, and legs",	[	"Stretch!", "Push Ups (arm by side)", "Beginner Shrimp Squats", "Forearm bent leg raise"]);
workoutResHandler("Intro to Strength 1.0",	"strength",	1,	"A light set to work out your core, chest, and legs",	[	"Stretch!", "Push Ups (Basic)", "Deep assisted squats", "Flat bent leg raises"]);
workoutResHandler("Intro to Strength 1.1",	"strength",	3,	"A light set to work out your core, chest, and legs",	[	"Stretch!", "Push ups (arm by side)", "Renegade pistol squats", "Hanging bent leg raise"]);
// Zaid Weight Lifting Workouts
workoutResHandler("Future Arnold Schwarzenegger",	"strength",	3,	"Blast those back and shoulder muscles!",	[	"Stretch!", "Barbell Row", "Farmers Carry", "Standing Barbell Military Press" ]);
workoutResHandler("Future Wonder Woman",	"strength",	3,	"Push, Pull and legs all in one day!",	[	"Stretch!", "Barbell Deadlift", "Dumbell Benchpress", "Bulgarian split squats" ]);
workoutResHandler("Lats of the Gods",	"strength",	2,	"Build out that upper body!",	[	"Stretch!", "Wide-grip Pullups", "Kettlebell Rack Carry", "Tricep Dips" ]);
workoutResHandler("Bicep King",	"strength",	2,	"Have the biggest biceps on the block",	[	"Stretch!", "Concentration Curls", "Hammer Curls", "Close-grip Pullups" ]);
workoutResHandler("Killer Queen",	"strength",	3,	"Work that whole body out y'all",	[	"Stretch!", "Dumbbell Deadlift", "Renegade pistol squats", "Chest Dips" ]);
workoutResHandler("Trapzilla Workout",	"strength",	2,	"Like Godzilla, but with your trap muscles",	[	"Stretch!", "Suitcase Carry", "Barbell Shoulder Press", "Dumbbell Row" ]);
workoutResHandler("Rack City",	"strength",	3,	"Blast those chest muscles",	[	"Stretch!", "Dumbell Benchpress", "Chest Dips", "EZ-Bar Skullcrusher" ]);
workoutResHandler("Amazons R Us",	"strength",	3,	"Keeping you in fighting form",	[	"Stretch!", "Tricep Dips", "Kettlebell Cross-Body Carry", "Dumbbell Row" ]);
workoutResHandler("Strong as an Ox",	"strength",	2,	"Move those heavy weights, to boost up your strength",	[	"Stretch!", "Farmers Carry", "Regular-grip Pullups", "Bottom-Up Kettlebell Waiter Carry" ]);
workoutResHandler("Triceps over Biceps everyday",	"strength",	2,	"Build up your real arm muscles",	[	"Stretch!", "Tricep Dips", "Barbell Shoulder Press", "Standing Dumbbell Triceps Extension" ]);
workoutResHandler("The Johhny Bravo",	"strength",	2,	"Wait... what's leg day again?",	[	"Stretch!", "Concentration Curls",  "Dumbell Benchpress", "Zottman Curls" ]);


//Zaid Cardio Workouts

// Alex Flexibility:
workoutResHandler("Intro to Yoga: Crescent Lunge",	"flexibility",	1,	"An introduction to breathing and a classic introductory yoga pose",	[	"Deep Breaths", "Crescent Lunge/Utthita Ashwa Sanchalanasana"]);
workoutResHandler("Intro to Yoga: Dancers Pose",	"flexibility",	1,	"An introduction to breathing and a classic introductory yoga pose",	[	"Deep Breaths", "Dancers Pose/Natarajasana"]);
workoutResHandler("Intro to Yoga: Mountain Pose",	"flexibility",	1,	"An introduction to breathing and a classic introductory yoga pose",	[	"Deep Breaths", "Mountain Pose/Tadasana", "Warrior II/Virabhadrasana II"]);
workoutResHandler("Intro to Yoga: Seated Forward Fold",	"flexibility",	1,	"An introduction to breathing and a classic introductory yoga pose",	[	"Deep Breaths", "Seated Forward Fold/Paschimottanasana"]);
workoutResHandler("Intro to Yoga II: On the Floor",	"flexibility",	2,	"Connecting introductory yoga poses together",	[	"Deep Breaths", "Seated Forward Fold/Paschimottanasana", "Downward-Facing Dog/Adho Mukha Svanasana", "Half Pigeon Pose/Ardha Kapotasana"]);
workoutResHandler("Intro to Yoga II: Standing Tall",	"flexibility",	2,	"Connecting introductory yoga poses together",	[	"Deep Breaths", "Dancers Pose/Natarajasana", "Mountain Pose/Tadasana", "Tree/Vrksasana"]);
workoutResHandler("Intro to Yoga II: Lunges",	"flexibility",	2,	"Connecting introductory yoga poses together",	[	"Deep Breaths", "Crescent Lunge/Utthita Ashwa Sanchalanasana", "Warrior II/Virabhadrasana II", "Triangle/Trikonasana"]);
workoutResHandler("Intro to Yoga II: Planks",	"flexibility",	2,	"Connecting introductory yoga poses together",	[	"Deep Breaths", "Plank Pose/Kumbhakasana", "Low Plank/Chaturanga Dandasana", "Upward-Facing Dog/Urdhva Mukha Svanasana"]);
workoutResHandler("Intro to Yoga III: On the Floor 2.0",	"flexibility",	3,	"Chaining introductory yoga poses to stretch multiple parts of your body",	[	"Deep Breaths", "Seated Forward Fold/Paschimottanasana", "Downward-Facing Dog/Adho Mukha Svanasana", "Half Pigeon Pose/Ardha Kapotasana","Plank Pose/Kumbhakasana", "Low Plank/Chaturanga Dandasana", "Upward-Facing Dog/Urdhva Mukha Svanasana"]);
workoutResHandler("Intro to Yoga III: Stand and Lunge",	"flexibility",	3,	"Chaining introductory yoga poses to stretch multiple parts of your body",	[	"Deep Breaths", "Dancers Pose/Natarajasana", "Mountain Pose/Tadasana", "Tree/Vrksasana", "Crescent Lunge/Utthita Ashwa Sanchalanasana", "Warrior II/Virabhadrasana II", "Triangle/Trikonasana"]);
workoutResHandler("Intro to Yoga III: Lunge and Plank",	"flexibility",	3,	"Chaining introductory yoga poses to stretch multiple parts of your body",	[	"Deep Breaths", "Crescent Lunge/Utthita Ashwa Sanchalanasana", "Warrior II/Virabhadrasana II", "Triangle/Trikonasana", "Plank Pose/Kumbhakasana", "Low Plank/Chaturanga Dandasana", "Upward-Facing Dog/Urdhva Mukha Svanasana"]);

// Zaid Cardio
workoutResHandler("Marathon Woman",	"cardio",	2,	"Get that blood flowing, and bring up that overall body fitness",	[	"Stretch!", "800m Jog", "20 Box Jumps", "15 Burpees" ]);
workoutResHandler("Usain Bolt in the making",	"cardio",	3,	"Burn fat and get shredded like the fastest man alive",	[	"Stretch!", "200m Sprints", "30 Mountain climbers" ]);
workoutResHandler("I'll run a marathon someday",	"cardio",	1,	"Getting into the groove and loosening up",	[	"Stretch!", "20 Squat jumps", "50 Jumping jacks", "15 minute Bicycle" ]);
workoutResHandler("The 'I eat nails for breaktfast'",	"cardio",	3,	"Guranteed to get you into shape with this intense workout",	[	"Stretch!", "45 minute Bicycle",  "100m Sprints", "20 Squat jumps" ]);
workoutResHandler("I'll run a marathon someday",	"cardio",	2,	"Works your legs and core, and boosts up overall explosiveness with some squat jumps",	[	"Stretch!", "40 Squat jumps", "30 Mountain climbers", "30 minute Bicycle" ]);
