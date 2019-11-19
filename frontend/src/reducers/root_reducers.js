import { combineReducers } from "redux";
import session from "./session_reducer";
import entities from "./entities_reducer";
import errors from "./errors_reducers";
import workouts from "./workout_reducers"

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  workouts
});

export default RootReducer;
