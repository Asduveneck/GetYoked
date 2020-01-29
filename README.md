# GetYoked
[Live Link](https://get-yoked.herokuapp.com/#/)

GetYoked is a fitness app to help you get exercise daily. Select a workout category and GetYoked will suggest a workout for you; you don't have to do any of the planning yourself!  

## Table of Contents
- [Technology Stack](#Technology-Stack)
- [How to Use](#How-to-Use)
- [Features](#Features)
  * [Fresh Workouts](#Fresh-Workouts)
  * [User Profile](#User-Profile)
    - [User Workout History](#User-Workout-History)
- [Other Features](#Other-Features)
  * [Custom Error Handling](#Custom-Error-Handling)
- [Future Features](#Future-Features)


## Technology Stack

  Get Yoked is built using Full Stack JavaScript.
  - MongoDB is used as a NoSQL database
  - Express functions as an API to access user and workout information 
  - React components were used on the frontend with Redux to manage state
  - Node.js as a server environment 

## How to Use 

Once you've signed up or logged in, select one of the buttons to choose a `workout category`. Once you've completed your workout, click the button saying you've completed the workout and it will be stored in your profile.

## Features

### Fresh Workouts

**Randomized workout generation, specific to user activity level and preferred workout type**

<img src="https://github.com/Asduveneck/GetYoked/blob/master/frontend/public/choose_workout.gif" width="95%" align="center" > 


After logging in, a user is presented with a set of workout options: "Cardio", "Strength & Weights", "Balance & Flexibility". The generated workout must be specific to this preferred workout type. Furthermore, workouts progress over time and as such, each generated workout must be specific to the user's activity level. This was achieved with the following Express routing method:

```javascript
router.get('/workout/find', (req, res) => {
  Workout.find({ 'type': req.query.type, 'intensity': req.query.intensity })
    .then(workouts => {
      const workout = workouts[Math.floor(Math.random()*workouts.length)];
      return res.json(workout)
    })
    .catch(err =>
      res.status(418).json({ noworkoutfound: "No workout found"}))
})
```
The query returns a set of all workouts matching "type" and "intensity". A single randomly selected workout is returned from this set. This method of randomly returning a workout by its specified parameters presented a second challenge: what happens if the user reloads the page? The route in place will dismiss their previous workout and present a new randomly generated workout which is not ideal. A second route to fetch the workout by ID was built to resolve this problem:

```javascript
router.get('/:id', (req, res) => { 
  Workout.findById(req.params.id)
    .sort({ date: -1 })
    .then(workouts => res.json(workouts))
    .catch(err =>
      res.status(404).json({ noworkoutsfound: "No workouts found" })
    );
});
```

And then on the React component:

```javascript
componentDidUpdate(prevProps) {
      let values = queryString.parse(prevProps.location.search)
      if (values.workoutId !== this.props.workoutId) {
        this.props.fetchWorkout(values.workoutId);
      }
    }
```

### Fresh Workouts

<img src="https://github.com/Asduveneck/GetYoked/blob/master/frontend/public/userprofile.gif" width="95%" align="center" > 

Because MongoDB is not a relational database, each user record includes an array of its completed workouts, rather than a reference to each completed workout from the workout model.

When a user clicks "I finished this workout", the user's workout history is updated. 

The user clicks "I finished this workout":
```javascript
handleClick() {

      const workoutObject = {
        _workoutId: this.props.workoutId,
        date: Date(Date.now()),
        name: this.props.workout.name,
        intensity: this.props.workout.intensity
      }
      const userWorkouts = (this.props.currentUser.workouts).slice();
      userWorkouts.push(workoutObject);


      this.props.updateUserWorkouts(this.props.currentUserId, userWorkouts);

      this.props.history.push(`/users/${this.props.currentUserId}`)
}
```

This dispatches the updateUserWorkouts action which triggers an axios call to update the user record:
```javascript
export const updateUserWorkouts = (userId, workout) => {
    return axios.patch(`/api/users/adduserworkout/${userId}`, workout)
}
```

The express route appends the workout to the user record:

```javascript
router.patch('/adduserworkout/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.params.id, {
        $set: { workouts: req.body }
    }, { new: true }).then(user => {

        res.json(user)})
        .catch(err => res.status(404).json({ nouserfound: "No user found" }));
})
```

### User Profile

  On the user's profile page, the User can view their achievements, personal information, and workout history.

### User Achievements

  Users can accomplish achievements based upon the number of workouts they complete as well as their other achievements.

  To accomplish this, I iterate through the user's workouts, and count how many workouts of each type they complete.
<details>
  <summary>Click here to see the Code</summary>

```js
// Create constants to store number of workouts of each type
let numStrength = 0; let numCardio = 0; let numFlex = 0; let numUnsorted = 0;
let totalWorkouts = this.props.user.workouts.length
// Iterate through workouts array once, and increment above respectively
for(let i = 0; i < totalWorkouts; i++) {
    let workout = this.props.user.workouts[i];

    switch(workout.type) {
        case "strength":
            numStrength += 1;
            break;
        case "cardio":
            numCardio += 1;
            break;
        case "flexibility":
            numFlex += 1;
            break;
        case undefined:
            numUnsorted += 1;
            break;
        default:
            break;
    }
}
```
</details>
 
  Each achievement will have a `title`, a `badge` (image with alt text), `level`, and a `goal`. For each workout category, the goal is directly linked to the number of completed workouts (`numCompleted`), so we can automate making the achievement.

```js
function awardMaker(categoryType, num, titlesArray) {
    if (num >= 100) { // if a user has completed 100 or more workouts, level 3
        return { category: categoryType, numCompleted: 100, goal: 100, title: titlesArray[3], level: 3, badge: { url: `images/icons/${categoryType}_3.jpg`, alt: `Icon for ${categoryType}, level 3` } };
    } else if (num > 25) {
        return { category: categoryType, numCompleted: num, goal: 100, title: titlesArray[2], level: 2, badge: { url: `images/icons/${categoryType}_2.jpg`, alt: `Icon for ${categoryType}, level 2` } };
    } else if (num > 10) {
        return { category: categoryType, numCompleted: num, goal: 25, title: titlesArray[1], level: 1, badge: { url: `images/icons/${categoryType}_1.jpg`, alt: `Icon for ${categoryType}, level 1` } };
    } else { // case num > 0
        return { category: categoryType, numCompleted: num, goal: 10, title: titlesArray[0], level: 0, badge: { url: `images/icons/${categoryType}_0.jpg`, alt: `Icon for ${categoryType}, level 0` } };
    }
}
```
  And to utilize this function, we first define an array of titles for our categories:

```js
  let titlesCardio = ["", "Half Marathoner", "Full Marathon", "Olympian"];
  let titlesFlex = ["", "Split Champion", "Contortionist", "Cobra"];
```

And then invoke our function with the number of completed workouts.
```js
// numCardio and numFlex represent the number of cardio and flexibility workouts completed
  let levelCardio = awardMaker("Cardio", numCardio, titlesCardio);
  let levelFlex = awardMaker("Flexibility", numFlex, titlesFlex);
```

### User Info

#### User Workout History

<img src="https://github.com/Asduveneck/GetYoked/blob/master/frontend/public/workouthistory.gif" width="95%" align="center" > 

### Other Features

#### Custom Error Handling

New users are required to provide several pieces of information in order to create a GetYoked account. To ensure valid inputs, (e.g., passwords over 6 characters), validations targeting each each specific input field were put into place. For instance:

```javascript
const validPositiveNumber = number => {
    return typeof number === "number" && number > 0;
}
```

```javascript
if (validPositiveNumber(data.weight) === false) {
        errors.weight = 'Please provide a valid weight in pounds';
}
```
In above example, "validPositiveNumber" checks that the input field is of JavaScript type "number" and that the user provided a number above 0. If these conditions are not met, the returned error message reminds the user that they must provide this piece of information and that it must be in pounds.

## Future Features

  1. Images to accompany workouts
  2. Social features allowing users to interact with others (facilitating more of a community).
