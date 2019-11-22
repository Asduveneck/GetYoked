import axios from "axios";
import { fileURLToPath } from "url";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export const fetchWorkouts = () => {
  return axios.get("/api/workouts")
};

export const fetchWorkout = (type, intensity) => {
  return axios.get(`/api/workouts/workout/find?type=${type}&intensity=${intensity}`);
};
