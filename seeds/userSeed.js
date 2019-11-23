const mongoose = require("mongoose");
const axios = require("axios");
// const { port, db, secret } = require("../config/env");
// mongoose.Promise = require("bluebird");
// mongoose.connect(db);

const User = require('../models/User')

User.collection.drop();
const Workout = require("../models/Workout");
// Following failed:
// https://stackoverflow.com/questions/24035872/return-results-mongoose-in-find-query-to-a-variable

// Helper method to return a promise to find a specific workout POJO
async function workoutFindOneByName(entry) {
  console.log(`We're in workoutFindOneByName with entry: ${entry}`);
  let workout = await Workout.find({ name: entry }, // )
    // .lean().exec( // returns `undefined` 
    // {new: true},  // returns the objectId's only...
    // {lean: true}, // returns objectID only
    function(err, data) {
    console.log(`Our entry in workoutFindOneByName: ${entry}`)
    // error handling
    if (err) {
      console.log(err);
      return;
    }
    if (data === null || data.length == 0) {
      console.log("No record found in workoutFindOneByName");
      return;
    }
    console.log(`Something found with type: ${typeof data} : \n ${data}`)
    return data;
  })
  console.log("FIND ME!!");
  console.log("FIND ME!!");
  console.log("FIND ME!!");
  console.log(typeof workout);
  return workout; // returns a string of a pojo
};

// Makes an array of workouts that wait until each workout is found 
// (so we have a proper array of pojos that came from evaluated promises)

  async function workoutArrayResMaker(workoutsArray) {
  // const workoutArrayResMaker = workoutsArray => {
    if(!Array.isArray(workoutsArray)) {
      console.log("workoutArrayResMaker received a string. We need to error out");
      return; // should learn to throw errors
    }

    finalWorkoutArr = []

    console.log(`In workoutArrayResMaker before looping through: ${workoutsArray}`);

    for(let i = 0; i < workoutsArray.length; i++) { // my iterating through elements was broken
      console.log("In workoutArrayResMaker now. Looking for: ");
      console.log(workoutsArray[i]);
      let workout = await workoutFindOneByName(workoutsArray[i]);
      // finalWorkoutArr.push(workout);  // Somehow nests everything as one giant array

      // FINDME BUG RIGHT HERE!
      // finalWorkoutArr += workout // converts to string
      // finalWorkoutArr.push(workout); // nests an array too deep
      console.log(`Within workoutArrayResMaker, workout after await workoutFind:`);
      console.log(`${workout}`);
      
      finalWorkoutArr.concat(workout); // 

      // workoutFindOneByName(workoutsArray[i])
      //   .then(workout => finalWorkoutArr.push(workout))
      //   .catch(() => "No workout found in workoutArrayResMaker");
      // workoutArray.push(workout) //Soft fail because worst case empty array
    }
    console.log("still in workoutArrayResMaker");
    console.log(`found: ${finalWorkoutArr}`);
    return await finalWorkoutArr; 
  };

  // DARN IT achievements 0 is treated as a null...
const userCreate = (username, password, age, height, 
  weight, activity, goals, achievement, workouts = []) => {

    if (workouts.length === 0) {
      console.log("In userCreate function; no workouts were present")
      User.create({
        username, password, age, height, weight, activity, goals, achievement
      }); 
    } else { // create the following
      console.log(`In userCreate function, and ${workouts.length} workouts were present: `)
      console.log(workouts)
      // right now each workout is nested in an array. Why?
      User.create({username, password, age, height, weight, 
        activity, goals, achievement, 
        workouts: workouts //FINDME SWITCH TO the findONE AND UPDATE THINGAMIJIGGY
        // https://www.wlaurance.com/2017/04/mongoose-tip-push/
      })
      
      
    }
  }; 

async function userResHandler(username, password, age, height, 
  weight, activity, goals, achievement, workoutsArray = []){

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

    workouts = await workoutArrayResMaker(screenedWorkouts); // RETURNS A STRING?!?
    console.log(`finished querying database. \nWorkouts:`);
    console.log(`typeof workouts: ${typeof workouts}`);
    console.log(workouts);
    userCreate(username, password, age, height, weight, activity, goals, 
      achievement, workouts)

  };

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
  ["Introduction to Strength"] //, "Introduction to Cardio"]
)


/*
https://stackoverflow.com/questions/48255659/node-js-mongoose-find // WHAT A LIE
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
    goals: "lose weight",
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