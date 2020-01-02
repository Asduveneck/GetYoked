import { getUser, updateUser, updateUserWorkouts } from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
};

export const fetchUser = id => dispatch => {
    getUser(id)
        .then(user => {
            console.log("user fetched");
            console.log(user);
            // console.log(user.data.workouts);
            dispatch(receiveUser(user))})
        .catch(err => console.log(err))
};

export const patchUser = user => dispatch => {
    updateUser(user) // TODO: This updateUser is broken here. Switched to brackets to match
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(`Errored out in user_actions:\n ${err}`))
};

export const patchUserWorkouts = (userId, workout) => dispatch => {
    updateUserWorkouts(userId, workout)
        .then(user => {
            dispatch(receiveUser(user))})
        .catch(err => console.log(err))
}   