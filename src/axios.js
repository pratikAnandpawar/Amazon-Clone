import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-51b81/us-central1/api", //the API url
});

export default instance;
