import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-mern-backendd.herokuapp.com",
});

export default instance;
