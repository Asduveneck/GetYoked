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
  console.log(`We're in workout FindOneByName with entry: ${entry}`);
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

  console.log(typeof workout);
  return workout; //
};

// Makes an array of workouts that wait until each workout is found 
// (so we have a proper array of pojos that came from evaluated promises)

  async function workoutArrayResMaker(workoutsArray) {
  // const workoutArrayResMaker = workoutsArray => {
    if(!Array.isArray(workoutsArray)) {
      console.log("workoutArrayResMaker received a string. We need to error out");
      return; // should learn to throw errors
    }

    let finalWorkoutArr = []

    console.log(`In workoutArrayResMaker before looping through: ${workoutsArray}`);

    for(let i = 0; i < workoutsArray.length; i++) { // my iterating through elements was broken
      console.log(`Within workoutArrayResMaker's for loop part ${i}.`);
      console.log("Looking for: ");
      console.log(workoutsArray[i]);
      let workout = await workoutFindOneByName(workoutsArray[i]);

      console.log(`Found after awaiting workoutFindOne:`);
      console.log(workout);
      
      // FINDME BUG RIGHT HERE!
      
      // finalWorkoutArr.concat(workout);  // This concat returns a new array, so we never modify finalWorkoutArr in the first
      // finalWorkoutArr += workout // converts to string. Is present in console.log(workout)
      // finalWorkoutArr.push(workout); // nests an array too deep. Is present in console.log(workout)
      finalWorkoutArr.push(workout[0]); // Will this work? //SOLUTION // 

      console.log("workout after await workoutFind:");
      console.log(`${workout}`);

      // workoutFindOneByName(workoutsArray[i])
      //   .then(workout => finalWorkoutArr.push(workout))
      //   .catch(() => "No workout found in workoutArrayResMaker");
      // workoutArray.push(workout) //Soft fail because worst case empty array
    }

    console.log(`\n\n\n`);
    console.log(`${"#".repeat(90)}`);
    console.log(`\n\n\n`);

    console.log("still within workoutArrayResMaker. Just finished loop"); // FINDME We hit the first case if we use a concat.
    if (finalWorkoutArr.length === 0) {
      console.log("Found nothing");
    } else {
      console.log(`Found: ${finalWorkoutArr}`);
    }
    return await finalWorkoutArr; 
  };

  // DARN IT achievements 0 is treated as a null...
const userCreate = (username, password, age, height, 
  weight, activity, goals, achievement, workouts = []) => {

  console.log(`\n\n`);

  if (workouts.length === 0) {
    console.log(`\n\n`);
    console.log(`${"#".repeat(90)}`);
    console.log(`\n\n`);
    console.log("In userCreate function; no workouts were present")
    User.create({
      username, password, age, height, weight, activity, goals, achievement
    }); 
  } else { // create the following
    console.log(`\n\n`);
    console.log(`${"#".repeat(90)}`);
    console.log(`\n\n`);
    console.log(`In user create function, and ${workouts.length} workouts were present:`);
    console.log(`Is the workout an array? ${Array.isArray(workouts)}`)
    console.log(`\n\n`);
    console.log(typeof(workouts[0]))
    console.log(`\n\n`);
    // right now each workout is nested in an array. Why?


  // WE ARE ABLE TO HIT THIS WHEN WE PASS IN A STRING AND IT ERRORS OUT HERE


    // User.create({username, password, age, height, weight, 
    //   activity, goals, achievement, 
    //   workouts: workouts //FINDME SWITCH TO the findOneAndUpdate 
    //   // https://www.wlaurance.com/2017/04/mongoose-tip-push/
    // })
    
    //testing stuff
    const testUser = new User({
    username: "BobbyTester",
    password: "szechuansauce",
    age: 15,
    height: 64,
    weight: 130,
    activity: "medium",
    goals: "5k",
    achievement: 1 // "MortiestMorty"
  })
  testUser.workouts.push(workouts[0])
  testUser.save();

  // THIS works. Why?
  // If we do a .create, it runs the validations right away.
  // I might have to use a `push` because I have to send things up one at a time. 
  // So we have to push manually every single time! 


    
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
  // let workouts = []; 
  if (screenedWorkouts.length !== 0) { // Only query DB if a workout exists
    console.log("querying database with: ");
    console.log(screenedWorkouts);
    console.log(" ");
  };

  await workoutArrayResMaker(screenedWorkouts)
    .then(workouts => {
      console.log(`finished querying database. \nWorkouts:`);
      console.log(`typeof workouts: ${typeof workouts}`);
      console.log(workouts);
      userCreate(username, password, age, height, weight, activity, goals,
        achievement, workouts) // has a safeguard to detect if a workout is present or not.
    })
    .catch(err => {
      console.log("Something went wrong");
    });

  // workouts = await workoutArrayResMaker(screenedWorkouts); 
  // console.log(`finished querying database. \nWorkouts:`);
  // console.log(`typeof workouts: ${typeof workouts}`);
  // console.log(workouts);
  // userCreate(username, password, age, height, weight, activity, goals, 
  //   achievement, workouts) // has a safeguard to detect if a workout is present or not.
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