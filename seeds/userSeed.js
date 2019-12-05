const mongoose = require("mongoose");
const axios = require("axios");


const User = require('../models/User')

User.collection.drop();
const Workout = require("../models/Workout");

// Helper method to return a promise to find a specific workout POJO. 
async function workoutFindOneByName(name) {
  let workout = await Workout.findOne({ name }, function(err, data) { // Is this what fixed it?
    // error handling
    if (err) {
      return;
    }
    if (data === null || data.length == 0) {
      return;
    }
    // return an array of workouts
    return data;
  })

  return workout;
}; // Used in workoutArrayResMaker

// Makes an array of workouts that queries each entry (awaiting for each query)
async function workoutArrayResMaker(workoutsArray) {
  if(!Array.isArray(workoutsArray)) {
    return; //stops execution early
  }

  let finalWorkoutArr = [] // stores results from each query
  // For each name you'll query
  for(let i = 0; i < workoutsArray.length; i++) { 

    // SWITCH TO A .then if possible. Bottleneck here
    let workout = await workoutFindOneByName(workoutsArray[i]); // uses above helper method

    // if(workout) { finalWorkoutArr.push(workout[0]) } ; // add to our returned output 
    if(workout) { finalWorkoutArr.push(workout) } ; // add to our returned output 
  }
  return finalWorkoutArr; 
}; // Used in userResHandler (final step  to seed individual )

// Helper Method to create a user based on whether workouts are present or not
const userCreate = (username, password, age, height, 
  weight, activity, goals, achievement, workouts = []) => {
  if (workouts.length === 0) { // If there are no workouts
    User.create({
      username, password, age, height, weight, activity, goals, achievement
    }); 
  } else { // create a new user
    const newUser = new User({
      username, password, age, height, weight, activity, goals, achievement
    })
    // Use mongoose push to add a workout to each new user
    for(let i = 0; i < workouts.length; i++) {
      // Maybe add a safe option here, so if the workouts[i] is null, call next?
      newUser.workouts.push(workouts[i])
    }
    // Save to mongoose DB:
    newUser.save();
  }
}; 
// Utilizes all the above helper methods to 
async function userResHandler(username, password, age, height, 
  weight, activity, goals, achievement, workoutsArray = []){

  let screenedWorkouts = []; // stores workouts that meet a criteria
  
  // if we have something in our workoutsArray
  if (workoutsArray.length !== 0) { 
    // If I pass in a string, convert to an array.
    if(typeof(workoutsArray) === "string") { 
      screenedWorkouts.push(workoutsArray)
    } else if(Array.isArray(workoutsArray)) { // else, if it's an array, keep it
      screenedWorkouts = workoutsArray
    }
  }

  // Is this await necessary since I use a `.then` shortly afterwards
  await workoutArrayResMaker(screenedWorkouts) // Wait to see if we get an array of workouts
    .then(workouts => { // take the result (even if we get nothing), then
      userCreate(username, password, age, height, weight, activity, goals,
        achievement, workouts) // has a safeguard to detect if a workout is present or not.
    })
    .catch(err => {
      console.log("Something went wrong in User Seeds"); // throw an error here later
      console.log(err);
    });
};

// Write a function to seed everything else. So you pass in an array of entries to each userResHandler, so calling that one function will exeute seeds. Should tidy up the below examples a LOT more.


userResHandler(
  "PromisedNeverland2", // username
  "12345!",  //password
  27,    // age
  69,   // height
  160,  // weight
  "low", 
  "5k", 
  1, // achievement
  ["Introduction to Strength", "Introduction to Cardio"]
);

userResHandler(
  "BobbyTester", // username
  "Password",  //password
  27,    // age
  69,   // height
  160,  // weight
  "low", 
  "5k", 
  1, // achievement
  "Introduction to Strength" //, "Introduction to Cardio"]
);

userResHandler(
  "Popo",
  "Rule1OfPoposTraining",
  149,
  75,
  200,
  "high",
  "5k",
  1000,
  "No Workout With This Name" // Null entry in workouts array. Potential problem?
);

userResHandler(
  "zaidclone",
  "$2a$10$2G9p/.xZwFLETGPc0Jjb/ulyznev4tCRQiDnBe5cDy4w6an9Cqa36",
  23,
  70,
  188,
  "light",
  "Michelle Obama arms",
  1,
  ["Introduction to Strength", "Introduction to Cardio"]
);

userResHandler(
   "btest0",
   "$2a$10$VoRTZMCNBZGC9aQYywLqM.P3bpfkyc9Woxq2rjFJxgPWYbX/RenVK",
   24,
   77,
   50,
   "light",
   "lose weight",
   1,
   "Introduction to Strength"
);

userResHandler(
 "modanger3275",
 "$2a$10$wEzxrkYWvxVghQxVh2nj6eyrzORE2uKNrWrKTlW4qBqHHqbDaC63i",
 50,
 70,
 200,
 "medium",
 "5k",
 9,
 ["Introduction to Strength", "Introduction to Cardio", "Introduction to Flexibility"]
)
