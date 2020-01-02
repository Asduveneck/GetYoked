import axios from 'axios';

export const getUser = id => {
    console.log(id);
    return axios.get(`/api/users/${id}`)
};

export const updateUser = user => {
    console.log("In user_api_util.\nuser:");
    console.log(user);
    console.log(user.id);
    return axios.get(`/api/users/${user.id}`); // TODO: Found the problem. This user is not the same...?
    // return axios.patch(`/api/users/${user.id}`, user)
};

export const updateUserWorkouts = (userId, workout) => {
    return axios.patch(`/api/users/adduserworkout/${userId}`, workout)
}