import axios from 'axios';

export const getUser = id => {
    return axios.get(`/api/users/${id}`)
};

export const updateUser = user => {
    return axios.patch(`/api/users/${user._id}`, user)
};

export const updateUserWorkouts = (userId, workout) => {
    return axios.patch(`/api/users/adduserworkout/${userId}`, workout)
}