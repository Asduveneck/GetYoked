import { fetchWorkout, fetchWorkouts } from "../util/workout_api_util";

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";


export const receiveWorkouts = () => ({
  type: RECEIVE_WORKOUTS,
  workouts
});


export const receiveWorkout = (id) => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const getWorkouts = () => dispatch =>
  fetchWorkouts()
    .then(() => dispatch(receiveWorkouts()))
    .catch(err => console.log(err));

export const getWorkout = id => dispatch =>
  fetchWorkout(id)
    .then(id => dispatch(receiveWorkout(id)))
    .catch(err => console.log(err));


