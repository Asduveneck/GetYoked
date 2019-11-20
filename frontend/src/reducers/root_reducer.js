import { combineReducers } from "redux";
import session from "./session_reducer";
import entities from "./entities_reducer";
import ErrorsReducer from "./errors_reducer";


const RootReducer = combineReducers({
  entities,
  session,
  errors: ErrorsReducer
});

export default RootReducer;
