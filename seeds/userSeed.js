const mongoose = require("mongoose");
const axios = require("axios");


const User = require('../models/User')

User.collection.drop();
const Workout = require("../models/Workout");

// Helper method to return a promise to find a specific workout POJO. 
async function workoutFindOneByName(name) {
  let workout = await Workout.find({ name }, 
    function(err, data) {
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
    let workout = await workoutFindOneByName(workoutsArray[i]); // uses above helper method
    finalWorkoutArr.push(workout[0]); // add to our returned output
  }

  return await finalWorkoutArr; 
}; // Used in userResHandler (final step)

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
  
  await workoutArrayResMaker(screenedWorkouts) // Wait to see if we get an array of workouts
    .then(workouts => { // take the result (even if we get nothing), then
      userCreate(username, password, age, height, weight, activity, goals,
        achievement, workouts) // has a safeguard to detect if a workout is present or not.
    })
    .catch(err => {
      console.log("Something went wrong"); // throw an error here later
    });
};

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


User.insertMany([
  {
    username: "Super_Buff_Dude",
    password: "password",
    age: 53,
    height: 68,
    weight: 210,
    activity: "low",
    goals: "5k",
    achievement: 1
    // workouts: [
    //   workoutFinder("Shoudld return null and therefore have nothing")
    // ]
  },
  {
    username: "Maureep",
    password: "GottaCatchEmAll!",
    age: 15,
    height: 60,
    weight: 108,
    activity: "medium",
    goals: "5k",
    achievement: 2
    // workouts: [
    //   workoutFinder("Introduction to Strength"),
    //   workoutFinder("Introduction to Cardio")
    // ]
  },
  {
    username: "Kazu",
    password: "marathon",
    age: 22,
    height: 68,
    weight: 140,
    activity: "intense",
    goals: "5k",
    achievement: 3 // "20km"
    // workouts: [
    //   workoutFinder("Introduction to Cardio"),
    //   workoutFinder("Introduction to Flexibility")
    // ]
  },
  {
    username: "ZaShaPaSha",
    password: "hunter12",
    age: 29,
    height: 68,
    weight: 165,
    activity: "intense",
    goals: "5k",
    achievement: 95 // "genos"
    // workouts: [
    //   workoutFinder("Introduction to Cardio"),
    //   workoutFinder("Error"),
    //   workoutFinder("Introduction to Strength")
    // ]
  },
  {
    username: "RickAndMorty",
    password: "szechuansauce",
    age: 15,
    height: 64,
    weight: 130,
    activity: "medium",
    goals: "5k",
    achievement: 1 // "MortiestMorty"
  },
  {
    username: "zaidclone",
    password: "$2a$10$2G9p/.xZwFLETGPc0Jjb/ulyznev4tCRQiDnBe5cDy4w6an9Cqa36",
    age: 69,
    height: 69,
    weight: 69,
    activity: "light",
    goals: "Michelle Obama arms",
    achievement: 0 // Zaid
  },
  {
    username: "btest0",
    password: "$2a$10$VoRTZMCNBZGC9aQYywLqM.P3bpfkyc9Woxq2rjFJxgPWYbX/RenVK",
    age: 24,
    height: 77,
    weight: 50,
    activity: "light",
    goals: "lose weight",
    achievement: 0 // Braeden
  },
  {
    username: "modanger3275",
    password: "$2a$10$wEzxrkYWvxVghQxVh2nj6eyrzORE2uKNrWrKTlW4qBqHHqbDaC63i",
    age: 50,
    height: 70,
    weight: 200,
    activity: "medium",
    goals: "5k",
    achievement: 1 // Maurine
  }
]);