# GetYoked
[Live Link](https://get-yoked.herokuapp.com/#/)

GetYoked is a fitness app to help you get exercise daily. Select a workout category and GetYoked will suggest a workout for you; you don't have to do any of the planning yourself!  

## Technology Stack

  Get Yoked is built using Full Stack JavaScript.
  - MongoDB is used as a NoSQL database
  - Express functions as an API to access user and workout information 
  - React components were used on the frontend with Redux to manage state
  - Node.js as a server environment 

## How to Use 

Once you've signed up or logged in, select one of the buttons to choose a `workout category`. Once you've completed your workout, click the button saying you've completed the workout and it will be stored in your profile.

## Features

### Randomized workout generation, specific to user activity level and preferred workout type

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

### Custom error handling

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
In above example, "validPositiveNumber" checks that the input field is of JavaScript type "number" and that the user provided a number above 0. If these conditions are not met, the error message returned reminds the user that they must provide this piece of information and that it must be in pounds.

### User workout history



## To-dos and Future Features

  1. Images to accompany workouts
  2. Social features allowing users to interact with others (facilitating more of a community).
