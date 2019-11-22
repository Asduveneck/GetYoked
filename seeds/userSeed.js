const mongoose = require("mongoose");
const axios = require("axios");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const User = require('../models/User')

User.collection.drop();
const Workout = require("../models/Workout");
// const workouts = Workout.collection;
// https://stackoverflow.com/questions/24035872/return-results-mongoose-in-find-query-to-a-variable
/* 
// returns undefined, which then breaks workouts 
// Part 1 of above SO top answer
const workoutFinder = name => {
 let query = Workout.find({ name })
  return query.exec(function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    if (data.length == 0) {
      console.log("No record found");
      return;
    }
    return data;
  })
};

*/
// Still async hell with create.
// const workoutFinder = name => (
//   Workout.find({ name }, function(err, data) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     if (data.length == 0) {
//       console.log("No record found");
//       return;
//     }
//     return data;
//   })// Promise as of now
//   .then(function(workouts) {
//     workouts.forEach(function(workout){
//       return workout
//     });
//   })
// );


// workoutFinder("Introduction to Cardio").then(res =>
//   User.create({
//     username: "PromisedNeverland",
//     password: "12345!",
//     age: 27,
//     height: 69,
//     weight: 160,
//     activity: "low",
//     goals: "5k",
//     achievement: 0,
//     workouts: res
//   })
// );


// Helper method to return a promise to find a specific workout POJO
const workoutFindOneByName = entry => (
  Workout.find({ name: "Introduction to Strength" }, function(err, data) {
    // error handling
    if (err) {
      console.log(err);
      return;
    }
    if (data === null || data.length == 0) {
      console.log("No record found in workoutFindOneByName");
      return;
    }
    return data;
  })
);

// Makes an array of workouts that wait until each workout is found 
// (so we have a proper array of pojos that came from evaluated promises)

  async function workoutArrayResMaker(workoutsArray) {
    workoutArray = []
    for(workoutName in workoutsArray) {
      // let workout = await workoutFindOneByName(workoutName);
      // workoutArray.push(workout);
      workoutFindOneByName(workoutName).then(workout =>
        workoutArray.push(workout)
      )
      .catch( () => "No workout found in workoutArrayResMaker");
      // workoutArray.push(workout) //Soft fail because worst case empty array
    }
    return workoutArray; 
  };

  // DARN IT achievements 0 is treated as a null...
const userCreate = (username, password, age, height, 
  weight, activity, goals, achievement, workouts = []) => {
    User.create({username, password, age, height, weight, 
      activity, goals, achievement, workouts
    }) // returns a POJO where username: username, password: password, etc.
  }; 

async function userResHandler(username, password, age, height, 
  weight, activity, goals, achievement, workoutsArray = []) {

  // Screening workoutsArray to be an array or string.
  let screenedWorkouts = []; // storing everything
  if (workoutsArray.length !== 0) { // if we have something in our workoutsArray
    if(typeof(workoutsArray) === "string") { // If I pass a string
      console.log("you passed in a string");
      screenedWorkouts.push(workoutsArray)  // make it an array.
    } else if(Array.isArray(workoutsArray)) { // else, keep the array
      console.log("you passed in an array object here")
      screenedWorkouts = workoutsArray
    }
  }
  
  // Optimization step
  let workouts = []; 
  if (screenedWorkouts.length !== 0) { // Only query DB if a workout exists
    console.log("querying database with: ");
    console.log(screenedWorkouts);
    console.log(" ");
     try {
      workouts = await workoutArrayResMaker(workoutsArray); 
      console.log("finished querying database. Workouts:");
      console.log(workouts);
    } catch (error) {
      console.log("Something went wrong when waiting for workoutArrayResMaker");
      console.log(error.message);
    }
    
  };

  userCreate(username, password, age, height, 
    weight, activity, goals, achievement, workouts)
    // .then(() => console.log(`User ${username} successfully created`) )
    // .catch( () => console.log(`Something failed`) )
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
  ["Introduction to Strength"]
)


/*
https://stackoverflow.com/questions/48255659/node-js-mongoose-find
https://www.robinwieruch.de/mongodb-express-setup-tutorial
https://mongoosejs.com/docs/api.html#model_Model.insertMany
*/




User.insertMany([
  //insertMany
  // {
  //   username: "realYoungJun",
  //   password: "!password",
  //   age: 27,
  //   height: 69,
  //   weight: 160,
  //   activity: "low",
  //   goals: "5k",
  //   achievement: 0,
  //   // workouts: [workoutFinder("Introduction to Strength")]
  // },
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
    goals: "lose weight ",
    achievement: 0 // Zaid
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