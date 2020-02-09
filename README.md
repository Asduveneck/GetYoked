# GetYoked
[Live Link](https://get-yoked.herokuapp.com/#/)

GetYoked is a fitness app to help you get exercise daily. Select a workout category and GetYoked will suggest a workout for you; you don't have to do any of the planning yourself!  

## Table of Contents
- [Technology Stack](#Technology-Stack)
- [How to Use](#How-to-Use)
- [Features](#Features)
  * [Fresh Workouts](#Fresh-Workouts)
  * [Submitting Workouts](#Submitting-Workouts)
  * [User Profile](#User-Profile)
    - [User Achievements](#User-Achievements)
    - [User Info](#User-Info)
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

<img src="https://github.com/Asduveneck/GetYoked/blob/master/README_assets/choose_workout.gif" width="95%" align="center" > 


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

### Submitting Workouts

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

  <img src="https://github.com/Asduveneck/GetYoked/blob/master/README_assets/userprofile.gif" width="95%" align="center" >

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
  let titlesStrength = ["Master Roshi", "Buff Master Roshi", "Hercules", "Super Alloy"];
  let titlesCardio = ["", "Half Marathoner", "Full Marathon", "Olympian"];
  let titlesFlex = ["", "Split Champion", "Contortionist", "Cobra"];
```

And then invoke our function with the number of completed workouts.
```js
// numCardio and numFlex represent the number of cardio and flexibility workouts completed
  let levelStrength = awardMaker("Strength", numStrength, titlesStrength);
  let levelCardio = awardMaker("Cardio", numCardio, titlesCardio);
  let levelFlex = awardMaker("Flexibility", numFlex, titlesFlex);
```

I also define the helper function, `workoutAllAwardMaker()` to make an award based upon a user's level per category.

<details>
  <summary>Click here for code</summary>

  I define an array to store the titles and the workout levels in the other categories.

```js
  let titlesWorkoutAll = ["Morty", "Buff Morty", "Pickle Rick", "Buff Rick"]; // for combo!
  let workoutLevels = [levelStrength.level, levelCardio.level, levelFlex.level];
```
  I define `goalMaker` to return a string stating the next goal, and `atLeast` to set the minimum level per category needed.

<details> 
  <summary>Click here for Code </summary>

```js
  // Make 'goals' for combo award
  function goalMaker(level) {
      return `Hit level ${level} in all workout categories`;
  }

  // Simplifies checking array of levels by returning a CB for Arr.every method. 
  // checks if a num is at least the value we pass in 
  function atLeast(val) { 
      return function (input) {
          return input >= val
      }
  }
```
</details>

  And now I can write a function similar to `awardMaker()` to return an object with nearly the same key-value pairs as objects from the `awardMaker` helper function.

```js
function workoutAllAwardMaker() {
    let category = "Overall"; // category for this award
    if (workoutLevels.every(atLeast(3))) { // Every workout at least level 3. 
        // .some() would be faster, and we can possibly autogenerate these if-else chains with a clever for loop...
        return { category, title: titlesWorkoutAll[3], level: 3, goal: "Congratulations", numCompleted: false, badge: { url: `images/icons/overall_3.jpg`, alt: `Icon for overall, level 3` } }; {/* Zaid: image will be in images/icon/Category_Level . */}
    } else if(workoutLevels.every(atLeast(2))) {
        return { category, title: titlesWorkoutAll[2], level: 2, goal: goalMaker(3), numCompleted: false, badge: { url: `images/icons/overall_2.jpg`, alt: `Icon for overall, level 2` }  };
    } else if (workoutLevels.every(atLeast(1))) {
        return { category, title: titlesWorkoutAll[1], level: 1, goal: goalMaker(2), numCompleted: false, badge: { url: `images/icons/overall_1.jpg`, alt: `Icon for overall, level 1` }  };
    } else { // no workouts hit level 1
        return { category, title: titlesWorkoutAll[0], level: 0, goal: goalMaker(1), numCompleted: false, badge: { url: `images/icons/overall_0.jpg`, alt: `Icon for overall, level 0` }  };
    }
}
```

  Because the result from this function is not stored to any object, to return the object, we must directly invoke this function.
</details>

  We can now map through the resulting objects to return content for the Achievements page.

```js
{[workoutAllAwardMaker(), levelStrength, levelCardio, levelFlex ].map(award => {
    // deconstruct the award for subsequent div:
    let { category, goal, title, level, numCompleted, badge } = award;

    // Make a new goal if our goal is to hit a target number
    let newGoal = "";
    if (numCompleted) { // if there is a number of workouts
        newGoal = `${numCompleted} / ${goal}`
    } else {
        newGoal = goal; // original goal suffices
    }

    return (
        <div className={`indv_award ${category}`} key={`indv_award_${category}_${level}`} >
            <h1>{title}</h1>
            <img src={badge.url} alt={badge.alt} className="image_placeholder"/>  
            <div className="level_and_goal">
                <h3>Level {level} in {category}</h3>
                <span className="workout_goal">{newGoal}</span>
            </div>
        </div>
    )
  })
}
```

### User Info

  On the User Info page, a user can view their profile, as well as update their info. This tab alternates between two components: `UserEditForm`, and `UserInfo`. 

```js
if (this.state.edit) {
    currentTab = (
        <UserEditForm
            user={this.props.user}
            cancelEdit={this.cancelEdit}
            patchUser={this.props.patchUser}
        />
    )
} else {
    currentTab = (
        <UserInfo 
            user={this.props.user}
            beginEdit={this.beginEdit}
            cancelEdit={this.cancelEdit}
        />
    )
}
```

  The `UserEditForm` is nearly identical to the `UserInfo`. When a user updates his or her info, they trigger:

```js
handleSubmit(e) {
    e.preventDefault();
    this.props.patchUser(this.state)
    this.props.cancelEdit()
}
```

  Within the container, `patchUser` dispatches the function `patchUser` (from within our User Actions file). `patchUser` then triggers `updateUser` from within our API call.

<table>
<tr>
<th>
Container
</th>
<th>
User Actions
</th>

<th>
API Utils
</th>

</tr>

<tr>

<td>
 
 ```js
const mapDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    patchUser: (user) => dispatch(patchUser(user))
})
``` 

</td>

<td>
 
```js
export const patchUser = user => dispatch => {
    updateUser(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(`Errored out in user_actions:\n ${err}`))
};
```

</td>

<td>
 
```js
export const updateUser = user => {
    return axios.patch(`/api/users/${user._id}`, user)
};
```

</td>

</tr>
</table>

### User Workout History

  Users can view all of their completed workouts, or filter them by workout category.

<img src="https://github.com/Asduveneck/GetYoked/blob/master/README_assets/workouthistory.gif" width="95%" align="center" > 

  To filter each workout, we create a dropdown that updates our State:

```js
handleChange(event) {
    this.setState({value: event.target.value})
}

const filter = () => (
    <select onChange={this.handleChange} value={this.state.value} style = {chosenStyle}>
        <option value="all">all</option>
        <option value="strength">strength</option>
        <option value="cardio">cardio</option>
        <option value="flexibility">flexibility</option>
    </select> 
)
```

  To return a workout that matches the filter, we just need to compare the workout's type to the value in state, and if it matches, we return it.

```js
<ul className="user-workouts-list">
    {
        this.props.workouts.map((workout, i) => {
            if(this.state.value === "all" || this.state.value === workout.type) {
            return <div key={i} className={`user-workout-item`}>
                <div className="name">{workout.name}</div>
                {/* <div className="type">{workout.type}</div> */}
                <div className="date">{workout.date}</div>
                <div className="ints">{workout.intensity}</div>
            </div>
            }
        })
    }
</ul> 
```

  To alternate the row colors, I used the `nth-child` property.

```scss
.user-workouts-list {
  .user-workout-item:nth-child(odd){
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 3px 3px -3px rgba(88, 116, 116, 0.9), inset 0 -3px 3px -3px rgba(88, 116, 116, 0.9);
  }
  .user-workout-item:nth-child(even){
      background-color: rgba(117, 125, 232, 0.3);
  }
}
```
  I previously used the index `i` to assign class `odd` or `even`, but these assignments would fail upon filtering our workouts.

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
