import axios from "axios";
export const signup = (user) => {
  console.log("api call signup");
  return axios.post("/api/1.0/users", user);
};
