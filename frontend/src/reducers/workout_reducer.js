import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS } from "../actions/workout_actions";

const workoutReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKOUTS:
      return action.workouts;
    case RECEIVE_WORKOUT:
      const newWorkout = { [action.workout.data._id]: action.workout.data };
      return Object.assign({}, state, newWorkout);
    default:
      return state;
  }
};

export default workoutReducer;
