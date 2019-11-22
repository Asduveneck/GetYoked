import { RECEIVE_USER } from "../actions/user_actions"

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, {[action.user.data._id]: action.user.data})
    default:
      return state;
  }
};

export default usersReducer;

