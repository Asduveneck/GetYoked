import axios from 'axios';

export const getUser = id => {
    console.log("in user_api_util function: getUser")
    console.log(id);
    return axios.get(`/api/users/${id}`)
};

export const updateUser = user => {
    console.log("In user_api_util. function: updateUser:");
    console.log("user:");
    console.log(user);
    console.log("user._id:"); // PROBLEM: We had to call it by '._id' not '.id'
    console.log(user._id);
    // return axios.get(`/api/users/${user._id}`); // TODO: Found the problem. This user is not the same...?
    return axios.patch(`/api/users/${user._id}`, user)
};

export const updateUserWorkouts = (userId, workout) => {
    return axios.patch(`/api/users/adduserworkout/${userId}`, workout)
}