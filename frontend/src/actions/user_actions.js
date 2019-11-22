import { getUser, updateUser } from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = id => dispatch => {
    console.log("this is happening")
    getUser(id)
        .then(user => {
            console.log("user=")
            console.log(user)
            dispatch(receiveUser(user))})
        .catch(err => console.log(err))
};

export const patchUser = user => dispatch => (
    updateUser(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);
