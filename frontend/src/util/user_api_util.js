import axios from 'axios';

export const getUser = id => {
    console.log("id=")
    console.log(id)
    return axios.get(`/api/users/${id}`)
};

export const updateUser = user => {
    return axios.patch(`/api/users/${user.id}`, user)
};
