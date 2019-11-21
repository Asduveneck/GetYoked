import { getUser, updateUser } from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = id => dispatch => (
    getUser(id)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);

export const updateUser = user => dispatch => (
    updateUser(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);
