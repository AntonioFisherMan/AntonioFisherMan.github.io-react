import * as axios from "axios";


const baseUrl = "http://localhost:5000/";

let instance = axios.create({
  baseUrl: baseUrl,
  headers: {
    "x-auth-token":""
  },
});

export const testAPI = {
  getMyUsers() {
    return axios
      .get("http://localhost:5000/users")
      .then((response) => response.data);
  },
  getGoods(token) {
    return axios
      .get("http://localhost:5000/goods", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => response.data);
  },
  login(email, password) {
    return axios.post("http://localhost:5000/auth/", { email, password });
  },
  register(name, email, password) {
    return axios.post("http://localhost:5000/users", { name, email, password });
  },
  getAuth(token) {
    return instance.get("http://localhost:5000/auth/user", {
      headers: {
        "x-auth-token": token,
      },
    });
  },
};
