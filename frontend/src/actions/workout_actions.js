import { fetchWorkout, fetchWorkouts, fetchOneWorkout } from "../util/workout_api_util";

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";


export const receiveWorkouts = (workouts) => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout
});


export const getWorkouts = () => dispatch => {
  return fetchWorkouts()
    .then((workouts) => dispatch(receiveWorkouts(workouts)))
    .catch(err => console.log(err));
}

export const getWorkout = (type, instensity) => dispatch => {
  return fetchWorkout(type, instensity)
    .then(workout => dispatch(receiveWorkout(workout)))
    .catch(err => console.log(err));
}

export const getOneWorkout = (id) => dispatch => {
  return fetchOneWorkout(id)
    .then(workout => dispatch(receiveWorkout(workout)))
    .catch(err => console.log(err));
}
