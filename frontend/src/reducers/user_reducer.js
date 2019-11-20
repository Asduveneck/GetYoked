// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, {[action.user.id]: action.user})
    default:
      return state;
  }
};

export default usersReducer;

