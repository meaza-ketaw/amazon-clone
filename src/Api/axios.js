import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-a515b/us-central1/api",
  // baseURL: "http://127.0.0.1:5000",

  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-mcth.onrender.com/",
});

export { axiosInstance };
