import axios from "axios";

export const fetchWorkouts = () => {
  return axios.get("/api/workouts")
};

export const fetchWorkout = (type, intensity) => {
  return axios.get(`/api/workouts/workout/find?type=${type}&intensity=${intensity}`);
};


export const fetchOneWorkout = (id) => {
  return axios.get(`/api/workouts/${id}`)
}