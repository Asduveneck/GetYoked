import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import workoutReducer from "./workout_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  workouts: workoutReducer

});

export default entitiesReducer;
