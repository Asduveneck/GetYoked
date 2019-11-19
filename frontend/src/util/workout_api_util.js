import axios from "axios";

export const fetchWorkouts = () => {
  return axios.get("/api/workouts")
};

export const fetchWorkout = id => {
  return axios.get(`/api/workouts/${id}`);
};