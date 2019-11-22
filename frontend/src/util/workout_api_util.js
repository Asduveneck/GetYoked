import axios from "axios";

export const fetchWorkouts = () => {
  return axios.get("/api/workouts")
};

export const fetchWorkout = (type, intensity) => {
  return axios.get(`/api/workouts/find?type=${type}&intensity=${intensity}`);
};